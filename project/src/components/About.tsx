import React, { useEffect, useRef, useState } from 'react';
import { Code, Cpu, Zap, Award } from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Photo */}
          <div className={`lg:col-span-1 flex justify-center transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative group">
              {/* Photo Container with Gradient Border */}
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-500 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="SESHADRI S - Embedded Systems Engineer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Passionate Embedded Systems Engineer
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm SESHADRI S, an aspiring Embedded Systems and IoT Engineer with a deep passion for creating 
              innovative hardware-software solutions. My journey in technology is driven by curiosity 
              and a commitment to pushing the boundaries of what's possible in embedded systems.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With expertise in C programming, PCB design, VLSI, and IoT development, I specialize 
              in bridging the gap between complex hardware requirements and elegant software solutions. 
              My goal is to contribute to cutting-edge projects that make a real impact on how we 
              interact with technology.
            </p>

            {/* Personal Highlights */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">B.E. in Electronics and Communication Engineering</p>
                <p className="text-sm text-blue-600 font-medium">Specializing in Embedded Systems</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-yellow-500">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Passion</h4>
                <p className="text-gray-600">IoT Innovation & Smart Systems</p>
                <p className="text-sm text-yellow-600 font-medium">Creating Connected Solutions</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-yellow-500 mb-2">8+</div>
                <div className="text-gray-600 font-medium">NPTEL Certifications</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            {
              icon: <Code className="w-8 h-8" />,
              title: 'Clean Code',
              description: 'Writing efficient, maintainable embedded code',
              color: 'from-blue-500 to-blue-600'
            },
            {
              icon: <Cpu className="w-8 h-8" />,
              title: 'Hardware Design',
              description: 'Expert in PCB design and circuit optimization',
              color: 'from-green-500 to-green-600'
            },
            {
              icon: <Zap className="w-8 h-8" />,
              title: 'IoT Solutions',
              description: 'Building connected devices and smart systems',
              color: 'from-purple-500 to-purple-600'
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: 'Innovation',
              description: 'Award-winning approach to problem solving',
              color: 'from-yellow-500 to-yellow-600'
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`text-white mb-4 group-hover:scale-110 transition-all duration-300 w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
