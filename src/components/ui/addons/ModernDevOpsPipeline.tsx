import React, { useState, useEffect } from 'react';
import { JetBrains_Mono } from "next/font/google";
import { User } from 'lucide-react';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ModernDevOpsPipeline = () => {
  const [mainTimeLeft, setMainTimeLeft] = useState(6);
  const [agents, setAgents] = useState([
    {
      id: 1,
      name: "Build",
      timeLeft: 4,
      progress: 65
    },
    {
      id: 2,
      name: "Test", 
      timeLeft: 6,
      progress: 42
    },
    {
      id: 3,
      name: "Deploy",
      timeLeft: 4,
      progress: 78
    }
  ]);

  // Update main timer
  useEffect(() => {
    const timer = setInterval(() => {
      setMainTimeLeft(prev => {
        if (prev <= 0) return Math.floor(Math.random() * 8) + 4;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Update agents
  useEffect(() => {
    const agentTimer = setInterval(() => {
      setAgents(prevAgents => 
        prevAgents.map(agent => ({
          ...agent,
          timeLeft: agent.timeLeft <= 0 ? Math.floor(Math.random() * 6) + 2 : agent.timeLeft - 1,
          progress: agent.timeLeft <= 0 ? Math.floor(Math.random() * 30) + 20 : Math.min(95, agent.progress + Math.floor(Math.random() * 3))
        }))
      );
    }, 1000);
    return () => clearInterval(agentTimer);
  }, []);

  return (
    <div className={`text-white max-w-md mx-auto p-6 ${jetbrainsMono.className}`}>
      {/* Top User Icon */}
      <div className="flex justify-center">
        <div className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center">
          <User className="w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Vertical Connection Line */}
      <div className="flex justify-center">
        <div className="w-0.5 h-12 bg-gray-800 rounded-full"></div>
      </div>

      {/* Main Pipeline Status */}
      <div className="rounded-xl border border-white/5 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-800">
          <div className="text-base font-medium text-white">DevOps Pipeline</div>
        </div>
        <div className="px-5 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-orange-400 text-sm font-medium uppercase">Processing</span>
          </div>
          <div className="text-gray-400 text-sm uppercase">{mainTimeLeft}m left</div>
        </div>
      </div>

      {/* Vertical Connection Lines to Agents */}
      <div className="flex justify-center">
        <div className="flex space-x-30">
          {agents.map((_, idx) => (
            <div key={idx} className="w-0.5 h-8 bg-gray-800 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* Agent Cards */}
      <div className="grid grid-cols-3 gap-3">
        {agents.map((agent, index) => {
          
          return (
            <div key={index} className="rounded-xl border border-gray-800 overflow-hidden">
              {/* Agent Header */}
              <div className="px-4 py-3 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-white/70 text-sm font-medium uppercase">{agent.name}</span>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Agent Content */}
              <div className="px-4 py-4">
                {/* Time Left */}
                <div className="text-gray-400 text-xs mb-4 uppercase">
                  {agent.timeLeft}m left
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 uppercase">Progress</span>
                    <span className="text-xs text-orange-400 font-medium">{agent.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${agent.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Status Footer */}
      <div className="mt-6 text-center">
        <div className="text-xs text-gray-500">
          3 agents active • Pipeline running
        </div>
      </div>
    </div>
  );
};

export default ModernDevOpsPipeline;