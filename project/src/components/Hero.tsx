import React, { useEffect, useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import AnimatedMicrochip from './AnimatedMicrochip';

const Hero: React.FC = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = useMemo(
    () => [
      'Embedded Systems Engineer',
      'IoT Enthusiast',
      'Award-Winning Innovator',
      'PCB Design Expert'
    ],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center md:text-left animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-yellow-400">SESHADRI S</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-blue-200 mb-8 h-12">
            <span className="border-r-2 border-yellow-400 pr-1 animate-pulse">
              {currentText}
            </span>
          </div>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Passionate about creating innovative embedded solutions and IoT systems 
            that bridge the gap between hardware and software.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* 3D Microchip Animation */}
        <div className="flex justify-center animate-fade-in-up delay-300">
          <AnimatedMicrochip />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white hover:text-yellow-400 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
