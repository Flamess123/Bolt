import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Cpu, Wifi, Zap } from 'lucide-react';

const Projects: React.FC = () => {
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

  const projects = [
    {
      title: 'Smart IoT Home Automation',
      role: 'Lead Developer',
      description: 'Comprehensive home automation system using ESP32 with real-time monitoring, voice control, and mobile app integration.',
      image: 'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['ESP32', 'IoT', 'React Native', 'Firebase', 'Arduino IDE'],
      features: ['Voice Control', 'Remote Monitoring', 'Energy Management', 'Security Integration'],
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: 'Embedded Weather Station',
      role: 'Hardware & Software Engineer',
      description: 'Advanced weather monitoring system with multiple sensors, data logging, and wireless transmission capabilities.',
      image: 'https://images.pexels.com/photos/1367192/pexels-photo-1367192.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['STM32', 'C/C++', 'PCB Design', 'KiCad', 'Sensors'],
      features: ['Multi-sensor Array', 'Data Logging', 'Wireless Transmission', 'Web Dashboard'],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'VLSI Digital Signal Processor',
      role: 'Design Engineer',
      description: 'High-performance digital signal processing unit designed for real-time audio and image processing applications.',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Verilog', 'VLSI', 'MATLAB', 'FPGA', 'Digital Design'],
      features: ['Real-time Processing', 'Low Power Design', 'Parallel Architecture', 'Optimized Pipeline'],
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Smart Energy Meter',
      role: 'Full-stack Developer',
      description: 'Intelligent energy monitoring system with real-time consumption tracking, billing automation, and anomaly detection.',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Arduino', 'Java', 'IoT', 'Cloud Computing', 'Mobile App'],
      features: ['Real-time Monitoring', 'Usage Analytics', 'Bill Prediction', 'Theft Detection'],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      title: 'Automated Greenhouse System',
      role: 'IoT Developer',
      description: 'Precision agriculture solution with automated climate control, soil monitoring, and crop optimization algorithms.',
      image: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Raspberry Pi', 'Python', 'Sensors', 'Machine Learning', 'IoT'],
      features: ['Climate Control', 'Soil Analysis', 'Automated Irrigation', 'Crop Prediction'],
      icon: <Wifi className="w-6 h-6" />
    },
    {
      title: 'Embedded Security System',
      role: 'Security Engineer',
      description: 'Advanced security monitoring system with facial recognition, intrusion detection, and encrypted communication.',
      image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['OpenCV', 'Embedded Linux', 'Encryption', 'Real-time OS', 'Camera Modules'],
      features: ['Facial Recognition', 'Motion Detection', 'Encrypted Storage', 'Mobile Alerts'],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Innovative embedded systems and IoT solutions that showcase technical expertise and creative problem-solving
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4 bg-blue-600 text-white p-2 rounded-lg">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex space-x-2">
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <Github className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                      <ExternalLink className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                </div>

                <div className="text-sm text-blue-600 font-semibold mb-3">{project.role}</div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg">
            View All Projects on GitHub
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
