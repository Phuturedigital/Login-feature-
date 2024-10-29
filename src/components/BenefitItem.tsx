import React from 'react';
import { LucideIcon } from 'lucide-react';

interface BenefitItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitItem({ icon: Icon, title, description }: BenefitItemProps) {
  return (
    <div className="group relative glass-effect p-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
      
      <div className="relative flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-sm text-white">{title}</h3>
          <p className="text-xs text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
}