import React, { useState, useEffect, useRef } from 'react';
import { Camera, Map, Search, X, Loader2, Sparkles, Building, Menu, MapPin } from 'lucide-react';
import SimulatedMap from './components/SimulatedMap';
import PropertyCard from './components/PropertyCard';
import AgentCard from './components/AgentCard';
import { MOCK_PROPERTIES, MOCK_AGENTS } from './constants';
import { analyzeBuildingImage } from './services/geminiService';
import { BuildingAnalysis, Property, Agent } from './types';

function App() {
  const [view, setView] = useState<'map' | 'visual' | 'listings'>('map');
  const [pinLocation, setPinLocation] = useState<{ x: number, y: number } | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<BuildingAnalysis | null>(null);
  const [buildingAgents, setBuildingAgents] = useState<Agent[]>([]);
  const [showIntro, setShowIntro] = useState(true);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Initialize with all properties shown for demo, but "filtered" when pinned
  useEffect(() => {
    // Simulate initial GPS fetch
    setTimeout(() => {
        // Just for effect
    }, 1000);
  }, []);

  const handlePinDrop = (x: number, y: number) => {
    setPinLocation({ x, y });
    // Simulate finding properties near the pin
    // In a real app, we would query the backend with lat/lng
    const shuffled = [...MOCK_PROPERTIES].sort(() => 0.5 - Math.random());
    setProperties(shuffled.slice(0, 3)); 
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Convert to base64
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1]; // Remove data url prefix

      try {
        const analysis = await analyzeBuildingImage(base64Data);
        setAnalysisResult(analysis);
        
        if (analysis) {
            // Find agents that match the detected style
            const matchedAgents = MOCK_AGENTS.filter(agent => 
                agent.specialty.some(s => analysis.architecturalStyle.includes(s) || analysis.luxuryLevel === 'Luxe')
            ).sort((a, b) => b.rating - a.rating);
            
            setBuildingAgents(matchedAgents);

            // Find properties that might be in this building (simulated by style)
            const matchedProps = MOCK_PROPERTIES.filter(p => 
                p.buildingType === analysis.architecturalStyle || 
                (analysis.luxuryLevel === 'Luxe' && p.buildingType === 'Luxe')
            );
            setProperties(matchedProps);
        }

      } catch (e) {
        console.error("Error analyzing image", e);
      } finally {
        setIsAnalyzing(false);
      }
    };
    reader.readAsDataURL(file);
  };

  const getAgent = (id: string) => MOCK_AGENTS.find(a => a.id === id);

  return (
    <div className="h-screen w-full flex flex-col bg-slate-50 overflow-hidden relative">
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md z-30 border-b border-slate-200 px-4 py-3 flex justify-between items-center sticky top-0">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <Building className="w-5 h-5" />
            </div>
            <h1 className="font-bold text-xl tracking-tight text-slate-800">Immo<span className="text-indigo-600">Scan</span></h1>
        </div>
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full" aria-label="Menu principal">
            <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-hidden">
        
        {/* VIEW: MAP */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${view === 'map' ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}>
           <SimulatedMap 
             onPinDrop={handlePinDrop} 
             isPinDropped={!!pinLocation} 
             pinPosition={pinLocation} 
           />
           
           {/* Map Overlay: Listings Bottom Sheet */}
           <div className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300 transform ${pinLocation ? 'translate-y-0' : 'translate-y-[85%]' } h-[60%] flex flex-col`}>
             <div
                className="w-full flex justify-center pt-3 pb-1 focus:outline-none group"
                onClick={() => setPinLocation(null)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setPinLocation(null)}
                tabIndex={0}
                role="button"
                aria-label="Réinitialiser la zone"
             >
                <div className="w-12 h-1.5 bg-slate-200 rounded-full cursor-pointer group-focus:bg-indigo-300 transition-colors"></div>
             </div>
             
             <div className="px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                <h2 className="font-bold text-slate-800 text-lg">
                    {pinLocation ? 'Offres dans ce secteur' : 'Définissez une zone'}
                </h2>
                {pinLocation && (
                    <span className="text-xs bg-indigo-100 text-indigo-700 font-bold px-2 py-1 rounded-full">
                        {properties.length} trouvés
                    </span>
                )}
             </div>

             <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                {!pinLocation && (
                    <div className="text-center text-slate-400 py-10">
                        <Map className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>Cliquez sur la carte pour activer le <br/> Pin-Point Search™</p>
                    </div>
                )}
                {pinLocation && properties.map(prop => (
                    <div key={prop.id} className="h-auto">
                        <PropertyCard property={prop} agent={getAgent(prop.agentId)} />
                    </div>
                ))}
             </div>
           </div>
        </div>

        {/* VIEW: VISUAL SEARCH */}
        <div className={`absolute inset-0 bg-white z-20 flex flex-col transition-transform duration-300 ${view === 'visual' ? 'translate-x-0' : 'translate-x-full'}`}>
           <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-lg flex items-center gap-2">
                <Camera className="w-5 h-5 text-indigo-600" />
                Scan de Résidence
              </h2>
              <button onClick={() => setView('map')} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200" aria-label="Fermer le scan">
                <X className="w-5 h-5" />
              </button>
           </div>

           <div className="flex-1 overflow-y-auto p-4">
              
              {/* Upload Area */}
              {!analysisResult && !isAnalyzing && (
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center bg-slate-50 min-h-[300px]">
                     <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600">
                        <Sparkles className="w-10 h-10" />
                     </div>
                     <h3 className="font-bold text-slate-800 text-lg mb-2">Analysez un immeuble</h3>
                     <p className="text-slate-500 mb-6 max-w-xs">
                        Prenez une photo pour identifier le style, le standing et trouver les agents "Elite" de cette résidence.
                     </p>
                     <button 
                        onClick={() => fileInputRef.current?.click()}
                        className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-2"
                     >
                        <Camera className="w-5 h-5" />
                        Ouvrir la caméra
                     </button>
                     <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*" 
                        capture="environment"
                        onChange={handleImageUpload}
                     />
                  </div>
              )}

              {/* Loading State */}
              {isAnalyzing && (
                  <div className="flex flex-col items-center justify-center h-[300px]">
                      <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mb-4" />
                      <p className="font-medium text-slate-600 animate-pulse">Analyse de l'architecture...</p>
                      <p className="text-xs text-slate-400 mt-2">Powered by Gemini AI</p>
                  </div>
              )}

              {/* Results */}
              {analysisResult && (
                  <div className="animate-fade-in">
                      {/* Analysis Card */}
                      <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl mb-6 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 opacity-20">
                              <Sparkles className="w-24 h-24" />
                          </div>
                          <div className="relative z-10">
                              <span className="text-indigo-400 text-xs font-bold tracking-wider uppercase mb-1 block">Rapport d'analyse IA</span>
                              <h3 className="text-2xl font-bold mb-2">{analysisResult.architecturalStyle}</h3>
                              <div className="flex flex-wrap gap-2 mb-4">
                                  <span className="bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-sm">Époque : {analysisResult.estimatedEra}</span>
                                  <span className="bg-white/10 px-2 py-1 rounded text-xs backdrop-blur-sm">État : {analysisResult.condition}</span>
                                  <span className="bg-amber-500/20 text-amber-300 border border-amber-500/50 px-2 py-1 rounded text-xs backdrop-blur-sm">Standing : {analysisResult.luxuryLevel}</span>
                              </div>
                              <div className="border-t border-white/10 pt-3 mt-3">
                                  <p className="text-sm text-slate-300">Caractéristiques détectées :</p>
                                  <p className="text-sm font-medium">{analysisResult.detectedFeatures.join(', ')}</p>
                              </div>
                          </div>
                      </div>

                      {/* Agents Section */}
                      <h3 className="font-bold text-slate-800 text-lg mb-3 flex items-center justify-between">
                          Agents Experts de l'immeuble
                          <span className="text-xs font-normal bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Vérifié</span>
                      </h3>
                      <div className="space-y-3 mb-6">
                          {buildingAgents.length > 0 ? (
                              buildingAgents.map(agent => (
                                  <AgentCard key={agent.id} agent={agent} />
                              ))
                          ) : (
                              <p className="text-sm text-slate-500 italic">Aucun agent élite trouvé pour ce type spécifique.</p>
                          )}
                      </div>

                      {/* Listings in Building */}
                      <h3 className="font-bold text-slate-800 text-lg mb-3">Annonces potentielles ici</h3>
                      <div className="space-y-4 pb-10">
                          {properties.length > 0 ? (
                             properties.map(prop => (
                                <PropertyCard key={prop.id} property={prop} agent={getAgent(prop.agentId)} isAiMatch={true} />
                             ))
                          ) : (
                            <div className="bg-slate-50 p-4 rounded-xl text-center text-slate-500 text-sm">
                                Pas d'annonce active dans cet immeuble précis, mais nos agents surveillent le secteur.
                            </div>
                          )}
                      </div>
                      
                      <button 
                        onClick={() => { setAnalysisResult(null); setView('visual'); }}
                        className="w-full py-3 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50"
                      >
                        Scanner un autre bâtiment
                      </button>
                  </div>
              )}
           </div>
        </div>

      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-slate-200 px-6 py-2 flex justify-between items-center z-40 pb-safe">
        <button 
            onClick={() => setView('map')}
            className={`flex flex-col items-center gap-1 ${view === 'map' ? 'text-indigo-600' : 'text-slate-400'}`}
        >
            <Map className="w-6 h-6" />
            <span className="text-[10px] font-medium">Explorer</span>
        </button>

        {/* Floating Action Button for Scan */}
        <div className="relative -top-6">
            <button 
                onClick={() => setView('visual')}
                className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white shadow-lg shadow-slate-400/50 hover:scale-105 transition-transform border-4 border-slate-50"
                aria-label="Scanner un immeuble"
            >
                <Camera className="w-7 h-7" />
            </button>
        </div>

        <button 
            onClick={() => {}} // Placeholder for favorites or profile
            className="flex flex-col items-center gap-1 text-slate-400"
        >
            <Search className="w-6 h-6" />
            <span className="text-[10px] font-medium">Recherche</span>
        </button>
      </nav>
      
      {/* Intro Modal / Tooltip */}
      {showIntro && (
        <div className="absolute inset-0 z-50 bg-black/50 flex items-center justify-center p-6 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl animate-fade-in-up">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4 text-indigo-600 mx-auto">
                    <MapPin className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-center mb-2">Recherche Hyper-Localisée</h2>
                <p className="text-center text-slate-600 mb-6 text-sm">
                    Cliquez n'importe où sur la carte pour définir instantanément votre zone de recherche. Utilisez le scanner pour identifier des résidences.
                </p>
                <button 
                    onClick={() => setShowIntro(false)}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                >
                    Compris !
                </button>
            </div>
        </div>
      )}

      <style>{`
        .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 20px);
        }
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;