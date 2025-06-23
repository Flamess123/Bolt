import React, { useEffect, useRef, useState } from 'react';
import {
  Award,
  Trophy,
  AlignCenterVertical as Certificate,
  Star,
  Target,
  ExternalLink,
  Eye,
  X,
} from 'lucide-react';
import type { Achievement } from '../data/achievements';
import { achievements } from '../data/achievements';


const Achievements: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAchievement(null);
    document.body.style.overflow = 'unset';
  };


  // Calculate stats based on actual achievements
  const competitionAwards = achievements.filter(a => a.type === 'award').length;
  const certifications = achievements.filter(a => a.type === 'certification').length;
  const averageScore = Math.round(
    achievements.filter(a => a.score).reduce((sum, cert) => sum + parseInt(cert.score), 0) / 
    achievements.filter(a => a.score).length
  );

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Achievements & <span className="text-yellow-400">Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Competition victories, elite certifications, and technical excellence in embedded systems and electric vehicle technologies
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Achievement Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {[
            { number: competitionAwards, label: 'Competition Awards', icon: <Trophy className="w-6 h-6" />, color: 'from-yellow-500 to-yellow-600' },
            { number: certifications, label: 'Elite NPTEL Certifications', icon: <Certificate className="w-6 h-6" />, color: 'from-blue-500 to-blue-600' },
            { number: `${averageScore}%`, label: 'Average Elite Score', icon: <Target className="w-6 h-6" />, color: 'from-green-500 to-green-600' },
            { number: '100%', label: 'Elite Status Rate', icon: <Star className="w-6 h-6" />, color: 'from-purple-500 to-purple-600' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`text-yellow-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300`}>{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid - Project Style */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={`achievement-${index}`}
              className={`bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 group cursor-pointer ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => openModal(achievement)}
            >
              {/* Achievement Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                
                {/* Type Badge */}
                <div className={`absolute top-4 left-4 px-4 py-2 rounded-full font-bold text-sm shadow-lg ${
                  achievement.type === 'award' 
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                }`}>
                  {achievement.type === 'award' ? achievement.prize : 'Elite Certified'}
                </div>
                
                {/* Icon */}
                <div className={`absolute top-4 right-4 p-3 bg-gradient-to-br ${achievement.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {achievement.icon}
                </div>
                
                {/* View Details */}
                <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Eye className="w-5 h-5" />
                </div>
                
                {/* Date */}
                <div className="absolute bottom-4 left-4 text-yellow-400 font-bold text-lg">
                  {achievement.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  {achievement.score && (
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {achievement.score}
                    </div>
                  )}
                </div>

                <div className="text-lg text-gray-300 mb-3 font-medium">
                  {achievement.description}
                </div>
                
                <div className="text-blue-300 font-medium mb-4">
                  {achievement.organization}
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {achievement.details}
                </p>

                {/* Technologies/Skills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {(achievement.technologies || achievement.skills).slice(0, 4).map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100/10 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {(achievement.technologies || achievement.skills).length > 4 && (
                    <span className="bg-blue-100/10 border border-blue-400/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                      +{(achievement.technologies || achievement.skills).length - 4} more
                    </span>
                  )}
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-white">{achievement.duration}</div>
                    <div className="text-xs text-gray-400">Duration</div>
                  </div>
                  <div className="bg-white/5 p-3 rounded-lg text-center">
                    <div className="text-lg font-bold text-white">
                      {achievement.projects || achievement.teamSize || achievement.participants}
                    </div>
                    <div className="text-xs text-gray-400">
                      {achievement.projects ? 'Projects' : achievement.teamSize ? 'Team Size' : 'Participants'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Summary */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-8 rounded-2xl text-black">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-3xl font-bold mb-2">Competition</h3>
                <p className="text-black/80 font-semibold">Winner in EV Technology</p>
                <p className="text-sm text-black/70 mt-1">1st & 2nd prizes in battery optimization</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">Elite</h3>
                <p className="text-black/80 font-semibold">100% Elite Status</p>
                <p className="text-sm text-black/70 mt-1">All NPTEL certifications with Elite status</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">IIT</h3>
                <p className="text-black/80 font-semibold">Premier Credentials</p>
                <p className="text-sm text-black/70 mt-1">From India's top technical institutes</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-300 mb-6 text-lg">
            These achievements demonstrate excellence in both competitive innovation and academic rigor in embedded systems and EV technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Detailed Certifications
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transform hover:scale-105 transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedAchievement && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="relative">
              <img
                src={selectedAchievement.certificateImage}
                alt={selectedAchievement.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className={`absolute bottom-4 left-4 p-3 bg-gradient-to-br ${selectedAchievement.color} rounded-lg text-white`}>
                {selectedAchievement.icon}
              </div>
              {selectedAchievement.prize && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-full font-bold shadow-lg">
                  {selectedAchievement.prize}
                </div>
              )}
              {selectedAchievement.score && (
                <div className="absolute top-4 right-16 bg-green-500 text-white px-4 py-2 rounded-full font-bold">
                  {selectedAchievement.score}
                </div>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedAchievement.title}</h2>
                  <p className="text-xl text-gray-300 mb-2">{selectedAchievement.description}</p>
                  <p className="text-blue-300 font-medium">{selectedAchievement.organization}</p>
                </div>
                <div className="text-right">
                  <div className="text-yellow-400 font-bold text-lg">{selectedAchievement.date}</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                    selectedAchievement.type === 'certification' ? 'bg-blue-500/20 text-blue-300' :
                    selectedAchievement.type === 'award' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-gray-500/20 text-gray-300'
                  }`}>
                    {selectedAchievement.category || selectedAchievement.type.charAt(0).toUpperCase() + selectedAchievement.type.slice(1)}
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Achievement Details</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-gray-300 mb-2">{selectedAchievement.details}</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="font-semibold text-yellow-400 mb-2">Impact:</h4>
                      <p className="text-gray-300">{selectedAchievement.impact}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-white">{selectedAchievement.duration}</div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-white">
                          {selectedAchievement.projects || selectedAchievement.teamSize || selectedAchievement.participants}
                        </div>
                        <div className="text-sm text-gray-400">
                          {selectedAchievement.projects ? 'Projects' : selectedAchievement.teamSize ? 'Team Size' : 'Participants'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Skills & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {(selectedAchievement.skills || selectedAchievement.technologies || []).map((skill: string, index: number) => (
                      <span
                        key={index}
                        className="bg-white/10 border border-white/20 text-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-white/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 space-y-3">
                    <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black py-3 px-6 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 mr-2" />
                      {selectedAchievement.type === 'award' ? 'View Award Certificate' : 'View Certificate'}
                    </button>
                    <button className="w-full border-2 border-white/30 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                      <Award className="w-5 h-5 mr-2" />
                      Download Credential
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
