import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  Cpu, 
  Wifi, 
  CircuitBoard, 
  Coffee, 
  Settings, 
  Hammer, 
  Zap 
} from 'lucide-react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: 'C Programming', icon: <Code />, level: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'Embedded C', icon: <Cpu />, level: 85, color: 'from-green-500 to-green-600' },
    { name: 'IoT Development', icon: <Wifi />, level: 80, color: 'from-purple-500 to-purple-600' },
    { name: 'PCB Design', icon: <CircuitBoard />, level: 75, color: 'from-yellow-500 to-yellow-600' },
    { name: 'Java', icon: <Coffee />, level: 70, color: 'from-red-500 to-red-600' },
    { name: 'Arduino IDE', icon: <Settings />, level: 88, color: 'from-teal-500 to-teal-600' },
    { name: 'KiCad', icon: <Hammer />, level: 78, color: 'from-indigo-500 to-indigo-600' },
    { name: 'VLSI', icon: <Zap />, level: 72, color: 'from-pink-500 to-pink-600' }
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="text-yellow-400">Skills</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for embedded systems development and IoT innovation
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {skill.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                {skill.name}
              </h3>
              
              <div className="relative">
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100 + 500}ms`
                    }}
                  ></div>
                </div>
                <div className="text-sm text-gray-300 font-medium">{skill.level}% Proficiency</div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-2xl font-bold text-white mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Git & GitHub',
              'Linux',
              'Python',
              'MATLAB',
              'Proteus',
              'Eagle CAD',
              'STM32',
              'ESP32',
              'Raspberry Pi',
              'Sensors & Actuators'
            ].map((tech, index) => (
              <span
                key={tech}
                className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
