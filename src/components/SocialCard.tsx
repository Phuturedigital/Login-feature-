import React from 'react';
import { Check, ExternalLink } from 'lucide-react';

interface SocialCardProps {
  platform: {
    name: string;
    icon: React.ElementType;
    description: string;
  };
  isConnected: boolean;
  onConnect: () => void;
}

export default function SocialCard({ platform, isConnected, onConnect }: SocialCardProps) {
  const Icon = platform.icon;
  
  return (
    <div className="group relative glass-effect rounded-xl p-4 transition-all duration-300 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
              <Icon className={`w-5 h-5 ${isConnected ? 'text-blue-400' : 'text-gray-400'}`} />
            </div>
            <h3 className="font-semibold text-white">{platform.name}</h3>
          </div>
          {isConnected && (
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">
              <Check className="w-3 h-3 mr-1" />
              Connected
            </span>
          )}
        </div>
        
        <p className="text-xs text-gray-400 mb-4">{platform.description}</p>
        
        <button
          onClick={onConnect}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
            ${isConnected 
              ? 'glass-effect text-gray-300 hover:bg-white/10' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
            }`}
        >
          {isConnected ? 'Manage Connection' : 'Connect Account'}
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}