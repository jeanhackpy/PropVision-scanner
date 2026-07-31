import React from 'react';
import { Agent } from '../types';
import { Star, ShieldCheck, Phone } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-4">
      <div className="relative">
        <img 
          src={agent.photoUrl} 
          alt={agent.name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100"
        />
        {agent.isElite && (
          <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full border-2 border-white" title="Agent Elite">
            <ShieldCheck className="w-3 h-3" />
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <h4 className="font-bold text-slate-800">{agent.name}</h4>
          <div className="flex items-center text-amber-500 text-sm font-bold">
            <Star className="w-3 h-3 fill-current mr-1" />
            {agent.rating} <span className="text-slate-400 font-normal text-xs ml-1">({agent.reviewCount})</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1 mt-1 mb-2">
          {agent.specialty.map((spec, idx) => (
            <span key={idx} className="text-[10px] bg-indigo-50 text-indigo-700 px-1.5 py-0.5 rounded">
              {spec}
            </span>
          ))}
        </div>

        <a
          href={`tel:${agent.phone}`}
          className="w-full text-center text-xs bg-slate-900 text-white py-1.5 rounded flex items-center justify-center gap-2 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-indigo-500 outline-none transition-colors"
          aria-label={`Appeler ${agent.name}`}
        >
          <Phone className="w-3 h-3" />
          Contacter
        </a>
      </div>
    </div>
  );
};

export default AgentCard;
