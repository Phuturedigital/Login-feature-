import React from 'react';
import { Shield } from 'lucide-react';

interface ConnectAllButtonProps {
  onClick: () => void;
}

export default function ConnectAllButton({ onClick }: ConnectAllButtonProps) {
  return (
    <div className="relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <button
        onClick={onClick}
        className="relative w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg px-6 py-3 font-medium hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200"
      >
        <div className="absolute inset-0 rounded-lg bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
        <div className="flex items-center justify-center gap-2">
          <Shield className="w-5 h-5" />
          <span>Connect All Accounts Securely</span>
        </div>
      </button>
      <p className="text-center text-xs text-gray-400 mt-2">
        You can manage individual permissions after connecting
      </p>
    </div>
  );
}