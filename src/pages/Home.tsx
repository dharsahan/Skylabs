import React, { useState, useEffect } from 'react';
import { Rocket, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      >
        <div className="stars absolute inset-0" />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          AgriTech
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
        Predictive & Sustainable
Agriculture via
Satellite
Constellation        </p>
        <button 
          onClick={() => navigate('/technology')}
          className="group relative inline-flex items-center px-8 py-3 text-lg font-medium bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Get Started
          <Rocket className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}