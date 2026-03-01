import React from 'react';
import { Property, Agent } from '../types';
import { Star, MapPin, UserCheck } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  agent?: Agent;
  isAiMatch?: boolean;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, agent, isAiMatch }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col h-full relative">
      {isAiMatch && (
        <div className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10 shadow-lg flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          MEILLEURE CORRESPONDANCE
        </div>
      )}
      <div className="h-48 overflow-hidden relative">
        <img 
          src={property.imageUrl} 
          alt={property.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <p className="text-white font-bold text-lg">{property.price} € <span className="text-sm font-normal opacity-80">/ mois</span></p>
        </div>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-slate-800 line-clamp-1">{property.title}</h3>
        </div>
        
        <div className="flex items-center text-slate-500 text-sm mb-3">
          <MapPin className="w-3 h-3 mr-1" />
          <span>{property.surface} m² • {property.rooms} p.</span>
        </div>

        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-1">
          {property.description}
        </p>

        {agent && (
          <div className="mt-auto pt-3 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src={agent.photoUrl} alt={agent.name} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
              <div className="flex flex-col">
                <span className="text-xs font-medium text-slate-700">{agent.name}</span>
                {agent.isElite && (
                  <span className="text-[10px] text-amber-600 font-bold flex items-center gap-0.5">
                    <UserCheck className="w-3 h-3" /> AGENT ELITE
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center bg-slate-50 px-2 py-1 rounded text-xs font-bold text-slate-700">
               <Star className="w-3 h-3 text-amber-400 fill-current mr-1" />
               {agent.rating}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
