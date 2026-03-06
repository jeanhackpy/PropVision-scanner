import React, { useState } from 'react';
import { Agent } from '../types';
import { Star, ShieldCheck, Phone, Check } from 'lucide-react';

interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  const [copied, setCopied] = useState(false);

  const handleContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
        navigator.clipboard.writeText(agent.phone);
    } catch (err) {
        console.error("Failed to copy phone number:", err);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        <button
          onClick={handleContact}
          aria-label={copied ? "Numéro copié" : `Contacter ${agent.name}`}
          className={`w-full text-center text-xs py-1.5 rounded flex items-center justify-center gap-2 transition-colors ${
            copied ? 'bg-green-600 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3 h-3" />
              <span>Copié !</span>
            </>
          ) : (
            <>
              <Phone className="w-3 h-3" />
              <span>Contacter</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AgentCard;
