export interface Location {
  lat: number;
  lng: number;
}

export interface Agent {
  id: string;
  name: string;
  photoUrl: string;
  rating: number;
  reviewCount: number;
  specialty: string[]; // e.g., "Haussmannien", "Moderne", "Luxe"
  isElite: boolean;
  phone: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  surface: number; // m2
  rooms: number;
  imageUrl: string;
  location: Location;
  agentId: string;
  buildingType: string; // Used for matching with visual search
  matchScore?: number; // Calculated by AI/Logic
  features: string[];
}

export interface BuildingAnalysis {
  architecturalStyle: string;
  estimatedEra: string;
  condition: string;
  luxuryLevel: 'Standard' | 'Premium' | 'Luxe';
  detectedFeatures: string[];
}
