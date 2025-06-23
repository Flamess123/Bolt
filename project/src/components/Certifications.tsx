import React, { useEffect, useRef, useState } from 'react';
import { Award, BookOpen, ExternalLink, Download, Star, Trophy, Target, TrendingUp } from 'lucide-react';

const Certifications: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Introduction to Modern Application Development',
      provider: 'NPTEL - IIT Madras',
      date: '2024',
      score: '78%',
      status: 'Elite',
      category: 'software',
      description: 'Comprehensive course covering modern web development frameworks, databases, and application architecture with hands-on projects.',
      skills: ['Web Development', 'Database Design', 'Application Architecture', 'Modern Frameworks'],
      color: 'from-blue-500 to-blue-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 3
    },
    {
      title: 'The Joy of Computing using Python',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      score: '85%',
      status: 'Elite',
      category: 'programming',
      description: 'Advanced Python programming concepts, algorithms, and computational thinking with practical problem-solving approaches.',
      skills: ['Python Programming', 'Algorithms', 'Data Structures', 'Problem Solving'],
      color: 'from-green-500 to-green-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 4
    },
    {
      title: 'Programming, Data Structures and Algorithms using Python',
      provider: 'NPTEL - IIT Madras',
      date: '2024',
      score: '82%',
      status: 'Elite',
      category: 'programming',
      description: 'In-depth study of data structures, algorithms, and their implementation in Python with complexity analysis.',
      skills: ['Data Structures', 'Algorithms', 'Python', 'Complexity Analysis'],
      color: 'from-purple-500 to-purple-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 5
    },
    {
      title: 'Introduction to Internet of Things',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      score: '79%',
      status: 'Elite',
      category: 'iot',
      description: 'Comprehensive introduction to IoT concepts, protocols, and applications with real-world implementation projects.',
      skills: ['IoT Protocols', 'Sensor Networks', 'Cloud Integration', 'Smart Systems'],
      color: 'from-teal-500 to-teal-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 3
    },
    {
      title: 'Digital Circuits',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      score: '76%',
      status: 'Elite',
      category: 'hardware',
      description: 'Fundamental concepts of digital logic design and circuit implementation with simulation exercises.',
      skills: ['Digital Logic', 'Circuit Design', 'Boolean Algebra', 'Logic Gates'],
      color: 'from-indigo-500 to-indigo-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 4
    },
    {
      title: 'Embedded System Design with ARM',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      score: '81%',
      status: 'Elite',
      category: 'embedded',
      description: 'Advanced embedded systems design using ARM microcontrollers with practical hardware interfacing projects.',
      skills: ['ARM Architecture', 'Embedded C', 'Real-time Systems', 'Hardware Interfacing'],
      color: 'from-red-500 to-red-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 6
    },
    {
      title: 'Computer Organization and Architecture',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      score: '77%',
      status: 'Elite',
      category: 'hardware',
      description: 'Detailed study of computer architecture, memory systems, and processor design with performance optimization.',
      skills: ['Computer Architecture', 'Memory Systems', 'Processor Design', 'Performance Analysis'],
      color: 'from-orange-500 to-orange-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 3
    },
    {
      title: 'Microprocessors and Microcontrollers',
      provider: 'NPTEL - IIT Kharagpur',
      date: '2024',
      score: '83%',
      status: 'Elite',
      category: 'embedded',
      description: 'Comprehensive study of microprocessor and microcontroller systems with assembly programming and interfacing.',
      skills: ['Microprocessors', 'Microcontrollers', 'Assembly Programming', 'Interfacing'],
      color: 'from-pink-500 to-pink-600',
      icon: <BookOpen className="w-6 h-6" />,
      duration: '12 weeks',
      projects: 5
    }
  ];

  const categories = [
    { id: 'all', name: 'All Certifications', count: certifications.length },
    { id: 'embedded', name: 'Embedded Systems', count: certifications.filter(cert => cert.category === 'embedded').length },
    { id: 'iot', name: 'IoT & Networks', count: certifications.filter(cert => cert.category === 'iot').length },
    { id: 'programming', name: 'Programming', count: certifications.filter(cert => cert.category === 'programming').length },
    { id: 'hardware', name: 'Hardware Design', count: certifications.filter(cert => cert.category === 'hardware').length },
    { id: 'software', name: 'Software Development', count: certifications.filter(cert => cert.category === 'software').length }
  ];

  const filteredCertifications = selectedCategory === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === selectedCategory);

  const averageScore = Math.round(
    certifications.reduce((sum, cert) => sum + parseInt(cert.score), 0) / certifications.length
  );

  const totalProjects = certifications.reduce((sum, cert) => sum + cert.projects, 0);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional <span className="text-blue-600">Certifications</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Elite certifications from premier Indian institutes (IIT Madras & IIT Kharagpur) demonstrating mastery in embedded systems, IoT, and advanced programming
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Certification Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: certifications.length, label: 'Elite Certifications', icon: <Award className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
            { number: `${averageScore}%`, label: 'Average Score', icon: <Target className="w-6 h-6" />, color: 'from-green-500 to-green-600' },
            { number: totalProjects, label: 'Practical Projects', icon: <Trophy className="w-6 h-6" />, color: 'from-yellow-500 to-yellow-600' },
            { number: '96', label: 'Study Hours', icon: <TrendingUp className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center group"
            >
              <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center text-white mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map((cert, index) => (
            <div
              key={`${cert.title}-${index}`}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150 + 700}ms` }}
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${cert.color} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-2 rounded-lg">
                      {cert.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">{cert.date}</div>
                      <div className="font-bold text-lg">{cert.score}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 leading-tight">{cert.title}</h3>
                  <p className="text-sm opacity-90">{cert.provider}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Elite Certification
                  </span>
                  <div className="text-xs text-gray-500">
                    {cert.duration} • {cert.projects} projects
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Skills Mastered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center text-sm group-hover:scale-105">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Certificate
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-2 rounded-lg transition-colors duration-300 hover:scale-110">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold mb-2">100%</h3>
                <p className="text-blue-100">Elite Status Achievement Rate</p>
                <p className="text-sm text-blue-200 mt-1">All certifications earned with Elite status</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">IIT</h3>
                <p className="text-blue-100">Premier Institute Credentials</p>
                <p className="text-sm text-blue-200 mt-1">From India's top technical institutes</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">2024</h3>
                <p className="text-blue-100">Latest Technology Stack</p>
                <p className="text-sm text-blue-200 mt-1">Current industry-relevant skills</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Commitment to Excellence in Embedded Systems
            </h3>
            <p className="text-gray-600 mb-6">
              These elite certifications from IIT Madras and IIT Kharagpur represent rigorous academic achievement 
              and practical expertise in cutting-edge technologies. Each certification involved comprehensive coursework, 
              hands-on projects, and stringent examinations, ensuring deep understanding and practical application skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                See Applied Knowledge
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Discuss Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
