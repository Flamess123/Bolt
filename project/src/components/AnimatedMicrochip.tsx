import React from 'react';

const AnimatedMicrochip: React.FC = () => {
  return (
    <div className="relative w-80 h-80 perspective-1000">
      {/* Main Chip Body */}
      <div className="absolute inset-0 transform-gpu animate-float">
        <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border-4 border-yellow-400/30 shadow-2xl transform rotate-12 hover:rotate-6 transition-transform duration-700">
          {/* Circuit Patterns */}
          <div className="absolute inset-4 bg-gradient-to-br from-green-900/20 to-blue-900/20 rounded-lg overflow-hidden">
            {/* Horizontal Lines */}
            {[...Array(8)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute h-0.5 bg-gradient-to-r from-yellow-400/60 to-green-400/60 animate-pulse"
                style={{
                  top: `${12 + i * 10}%`,
                  left: '10%',
                  right: '10%',
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
            
            {/* Vertical Lines */}
            {[...Array(6)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute w-0.5 bg-gradient-to-b from-blue-400/60 to-purple-400/60 animate-pulse"
                style={{
                  left: `${15 + i * 12}%`,
                  top: '15%',
                  bottom: '15%',
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}

            {/* Central Processing Core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg animate-glow shadow-lg">
              <div className="absolute inset-2 bg-gradient-to-br from-orange-600 to-red-600 rounded animate-pulse">
                <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded text-xs font-bold text-black flex items-center justify-center">
                  CPU
                </div>
              </div>
            </div>

            {/* Corner Components */}
            {[
              { top: '10%', left: '10%' },
              { top: '10%', right: '10%' },
              { bottom: '10%', left: '10%' },
              { bottom: '10%', right: '10%' }
            ].map((pos, i) => (
              <div
                key={`corner-${i}`}
                className="absolute w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-600 rounded animate-pulse"
                style={{ ...pos, animationDelay: `${i * 0.5}s` }}
              />
            ))}
          </div>

          {/* Pins */}
          {[...Array(16)].map((_, i) => (
            <div key={`pin-${i}`} className="absolute">
              {/* Left pins */}
              {i < 8 && (
                <div
                  className="w-8 h-1 bg-gradient-to-r from-gray-600 to-gray-400 animate-pulse"
                  style={{
                    left: '-2rem',
                    top: `${20 + i * 8}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              )}
              {/* Right pins */}
              {i >= 8 && (
                <div
                  className="w-8 h-1 bg-gradient-to-r from-gray-400 to-gray-600 animate-pulse"
                  style={{
                    right: '-2rem',
                    top: `${20 + (i - 8) * 8}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Glowing Aura */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-400/20 rounded-xl blur-xl animate-pulse" />
      
      {/* Rotating Ring */}
      <div className="absolute inset-0 border-2 border-yellow-400/30 rounded-full animate-spin-slow" />
    </div>
  );
};

export default AnimatedMicrochip;
