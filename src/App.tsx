import React, { useState } from 'react';
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter, 
  BarChart3, 
  Clock, 
  Target,
  ArrowRight
} from 'lucide-react';
import Header from './components/Header';
import SocialCard from './components/SocialCard';
import BenefitItem from './components/BenefitItem';
import ConnectAllButton from './components/ConnectAllButton';

const platforms = [
  {
    name: 'Instagram',
    icon: Instagram,
    description: 'Analyze engagement patterns and optimize your content strategy.',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    description: 'Track professional network growth and content performance.',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    description: 'Monitor real-time engagement and trending topics.',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    description: 'Measure audience insights and community engagement.',
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: 'Cross-Platform Analytics',
    description: 'Get unified insights across all your social media accounts',
  },
  {
    icon: Clock,
    title: 'Smart Scheduling',
    description: 'AI-powered posting times based on audience activity',
  },
  {
    icon: Target,
    title: 'Audience Insights',
    description: 'Deep understanding of your followers across platforms',
  },
];

function App() {
  const [connectedPlatforms, setConnectedPlatforms] = useState<Set<string>>(new Set());

  const handleConnect = (platformName: string) => {
    setConnectedPlatforms(prev => {
      const newSet = new Set(prev);
      if (prev.has(platformName)) {
        newSet.delete(platformName);
      } else {
        newSet.add(platformName);
      }
      return newSet;
    });
  };

  const handleConnectAll = () => {
    const allPlatforms = new Set(platforms.map(p => p.name));
    setConnectedPlatforms(allPlatforms);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#212121] text-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 h-[90vh]">
          {/* Left Column: Header + Connect All + Privacy */}
          <div className="col-span-4 flex flex-col justify-between">
            <div>
              <Header />
              <div className="mt-6">
                <ConnectAllButton onClick={handleConnectAll} />
              </div>
            </div>
            
            {/* Privacy Notice */}
            <div className="mb-4">
              <p className="text-center text-sm text-gray-400">
                We value your privacy. Your data is encrypted and securely stored.
                <a href="#" className="text-blue-400 hover:text-blue-300 ml-1 font-medium">
                  Learn more
                </a>
              </p>
            </div>
          </div>

          {/* Middle Column: Platform Cards */}
          <div className="col-span-5 space-y-4 overflow-auto hide-scrollbar pr-4">
            {platforms.map((platform) => (
              <SocialCard
                key={platform.name}
                platform={platform}
                isConnected={connectedPlatforms.has(platform.name)}
                onConnect={() => handleConnect(platform.name)}
              />
            ))}
          </div>

          {/* Right Column: Benefits + Actions */}
          <div className="col-span-3 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Why Connect?
              </h2>
              {benefits.map((benefit) => (
                <BenefitItem key={benefit.title} {...benefit} />
              ))}
            </div>

            {/* Footer Actions */}
            <div className="flex flex-col gap-2 mb-4">
              <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200">
                Continue to Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full text-gray-400 hover:text-gray-200 transition-colors px-6 py-2">
                Skip for now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;