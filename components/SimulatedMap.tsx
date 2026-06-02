import React, { useState } from 'react';
import { MapPin, Navigation } from 'lucide-react';

interface SimulatedMapProps {
  onPinDrop: (x: number, y: number) => void;
  isPinDropped: boolean;
  pinPosition: { x: number, y: number } | null;
}

const SimulatedMap: React.FC<SimulatedMapProps> = ({ onPinDrop, isPinDropped, pinPosition }) => {
  
  const handleMapClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    onPinDrop(x, y);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!isPinDropped) {
        onPinDrop(50, 50);
      }
    } else if (isPinDropped && pinPosition) {
      const step = 2;
      let { x, y } = pinPosition;

      if (e.key === 'ArrowUp') { e.preventDefault(); y -= step; }
      else if (e.key === 'ArrowDown') { e.preventDefault(); y += step; }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); x -= step; }
      else if (e.key === 'ArrowRight') { e.preventDefault(); x += step; }
      else return;

      onPinDrop(
        Math.max(0, Math.min(100, x)),
        Math.max(0, Math.min(100, y))
      );
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={isPinDropped ? "Ajuster la position du marqueur" : "Placer un marqueur sur la carte"}
      className="relative w-full h-full bg-slate-200 overflow-hidden group cursor-crosshair focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-inset"
      onClick={handleMapClick}
      onKeyDown={handleKeyDown}
    >
      {/* Background simulating a map style */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="0.5"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Simulated streets/blocks */}
            <path d="M 0 100 Q 200 150 400 100 T 800 100" stroke="black" strokeWidth="2" fill="none" />
            <path d="M 100 0 Q 150 200 100 400 T 100 800" stroke="black" strokeWidth="2" fill="none" />
            <circle cx="50%" cy="50%" r="50" stroke="black" strokeWidth="1" fill="none" opacity="0.5" />
        </svg>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <span className="text-slate-400 text-sm font-medium opacity-50 select-none uppercase tracking-widest">
            Cliquez pour définir la zone
         </span>
      </div>

      {/* The Pin */}
      {isPinDropped && pinPosition && (
        <div 
            className="absolute transform -translate-x-1/2 -translate-y-full transition-all duration-500 ease-out z-20"
            style={{ left: `${pinPosition.x}%`, top: `${pinPosition.y}%` }}
        >
            <div className="relative">
                <MapPin className="w-10 h-10 text-indigo-600 fill-indigo-600 drop-shadow-xl animate-bounce" />
                {/* Search Radius Pulse */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500 rounded-full opacity-20 animate-ping pointer-events-none"></div>
                <div className="absolute top-full left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500 rounded-full opacity-10 border border-indigo-400 pointer-events-none"></div>
            </div>
        </div>
      )}

      {/* Simulated POIs */}
      <div className="absolute top-[20%] left-[30%] text-slate-400 pointer-events-none"><div className="w-2 h-2 bg-slate-400 rounded-full"></div></div>
      <div className="absolute top-[60%] left-[70%] text-slate-400 pointer-events-none"><div className="w-2 h-2 bg-slate-400 rounded-full"></div></div>
      
      {/* User location indicator */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg text-indigo-600 pointer-events-none">
        <Navigation className="w-5 h-5 fill-current" />
      </div>
    </div>
  );
};

export default SimulatedMap;
