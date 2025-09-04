"use client"

import React, { useState, useEffect } from 'react';

export default function TerminalServices() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  const services = [
    "$ deploying infra-architecture...",
    "$ optimizing finops-cost-reduction...", 
    "$ securing devsecops-pipeline...",
    "$ monitoring chaos-engineering..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const text = services[currentLine];
    let i = 0;
    setDisplayText('');
    
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentLine]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="bg-black/50 text-green-400 p-4 rounded-lg font-mono text-sm max-w-3xl border border-gray-700">
      <div className="flex items-center mb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-2 text-gray-400">services.sh</span>
      </div>
      <div className="h-16">
        <div className="text-green-400">
          {displayText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
        </div>
      </div>
    </div>
  );
};