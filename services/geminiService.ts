import { GoogleGenAI, Type } from "@google/genai";
import { BuildingAnalysis } from "../types";

const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;
if (API_KEY && API_KEY !== 'undefined') {
  ai = new GoogleGenAI({ apiKey: API_KEY });
} else {
  console.warn("Gemini API Key is missing. AI features will be disabled.");
}

export const analyzeBuildingImage = async (base64Image: string): Promise<BuildingAnalysis | null> => {
  if (!ai) return null;
  try {
    const model = 'gemini-2.5-flash-image'; 
    // Using a specific model optimized for speed and image understanding in this context

    const prompt = `
      Tu es un expert en architecture et immobilier. Analyse cette photo de bâtiment.
      Extrais les informations suivantes au format JSON :
      - architecturalStyle: Le style architectural (ex: Haussmannien, Moderne, Art Déco, Brutaliste, Industriel).
      - estimatedEra: L'époque estimée de construction.
      - condition: L'état apparent extérieur (ex: Excellent, Rénové, Standard).
      - luxuryLevel: Une estimation du standing (Standard, Premium, Luxe).
      - detectedFeatures: Une liste de caractéristiques visibles (ex: Balcon, Grande fenêtre, Pierre de taille).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg', // Assuming JPEG for simplicity in this demo context
              data: base64Image,
            },
          },
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
            type: Type.OBJECT,
            properties: {
                architecturalStyle: { type: Type.STRING },
                estimatedEra: { type: Type.STRING },
                condition: { type: Type.STRING },
                luxuryLevel: { type: Type.STRING, enum: ['Standard', 'Premium', 'Luxe'] },
                detectedFeatures: { type: Type.ARRAY, items: { type: Type.STRING } }
            }
        }
      },
    });

    const text = response.text;
    if (!text) return null;

    return JSON.parse(text) as BuildingAnalysis;
  } catch (error) {
    console.error("Gemini analysis error:", error);
    return null;
  }
};
