import React from 'react';
import { Heart, Code, Cpu } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              SESHADRI S<span className="text-yellow-400">.</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Passionate embedded systems engineer dedicated to creating innovative IoT solutions 
              and pushing the boundaries of hardware-software integration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-300 hover:text-yellow-400 transition-colors duration-300"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['C/C++', 'IoT', 'PCB Design', 'VLSI', 'Arduino', 'ESP32', 'Python', 'Java'].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/10 px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>using</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>and</span>
            <Cpu className="w-4 h-4 text-yellow-400" />
          </div>
          
          <div className="text-gray-300 text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} SESHADRI S. All rights reserved.</p>
            <p className="text-sm text-gray-400 mt-1">
              Embedded Systems & IoT Engineer
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
