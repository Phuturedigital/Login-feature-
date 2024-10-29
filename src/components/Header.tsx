import React from 'react';
import { Info, Sparkles } from 'lucide-react';

export default function Header() {
  return (
    <div>
      <div className="inline-flex items-center gap-2 glass-effect text-blue-300 px-4 py-2 rounded-full mb-4 font-medium text-sm">
        <Sparkles className="w-4 h-4" />
        Supercharge your social presence
      </div>
      <h1 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
        Connect Your Social Universe
      </h1>
      <div className="flex items-start gap-2 text-gray-300">
        <p className="text-sm">
          Unlock AI-powered insights by connecting your accounts
        </p>
        <button className="group relative flex-shrink-0">
          <Info className="w-5 h-5 text-blue-400" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-64 p-3 glass-effect text-gray-200 text-xs rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <strong className="block mb-1 text-white">Why connect?</strong>
            Get personalized analytics, content recommendations, and audience insights across all your platforms
          </div>
        </button>
      </div>
    </div>
  );
}