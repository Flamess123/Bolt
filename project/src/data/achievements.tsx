import React from 'react';
import {
  Trophy,
  AlignCenterVertical as Certificate,
} from 'lucide-react';

export interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
  organization: string;
  date: string;
  type: string;
  color: string;
  details: string;
  impact: string;
  image: string;
  certificateImage: string;
  skills?: string[];
  technologies?: string[];
  duration: string;
  projects?: number;
  prize?: string;
  category: string;
  teamSize?: string;
  participants?: string;
  score?: string;
}

export const achievements: Achievement[] = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: '1st Prize - Hackathon Winner',
      description: 'Intelligent Heat Management and Fault Detection On EV Batteries',
      organization: 'Kongunadu College',
      date: '2024',
      type: 'award',
      color: 'from-emerald-500 to-green-600',
      details: 'First place winner for developing an intelligent system for EV battery monitoring and fault detection using advanced embedded systems and AI integration',
      impact: 'Showcased advanced embedded systems skills and AI integration for automotive applications, demonstrating innovation in sustainable transportation technology',
      image: 'https://images.pexels.com/photos/159201/circuit-circuit-board-resistor-computer-159201.jpeg?auto=compress&cs=tinysrgb&w=800',
      certificateImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      skills: ['AI/ML Integration', 'Fault Detection', 'Embedded Systems', 'IoT Sensors', 'Real-time Monitoring', 'Team Leadership', 'Battery Management Systems'],
      duration: '48 hours',
      projects: 1,
      prize: '🥇 1st Prize',
      category: 'Hackathon Competition',
      teamSize: '4 members',
      technologies: ['Arduino', 'Python', 'TensorFlow', 'IoT Sensors', 'Mobile App']
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: '2nd Prize - Paper Presentation',
      description: 'EV Battery Thermodynamic Optimization System',
      organization: 'KSR College',
      date: '2024',
      type: 'award',
      color: 'from-yellow-500 to-orange-500',
      details: 'Secured 2nd position for innovative research on electric vehicle battery thermal management and optimization techniques',
      impact: 'Demonstrated expertise in sustainable energy solutions and thermal optimization techniques for next-generation electric vehicles',
      image: 'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=800',
      certificateImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      skills: ['Thermal Management', 'EV Technology', 'Battery Systems', 'Research & Development', 'Technical Presentation', 'MATLAB Simulation'],
      duration: '6 months research',
      projects: 1,
      prize: '🥈 2nd Prize',
      category: 'Research & Innovation',
      teamSize: '2 members',
      technologies: ['MATLAB', 'Simulink', 'Thermal Analysis', 'Battery Modeling', 'Optimization Algorithms']
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: 'NPTEL Elite Certification',
      description: 'Introduction to Modern Application Development',
      organization: 'IIT Madras',
      date: '2024',
      type: 'certification',
      color: 'from-blue-500 to-blue-600',
      details: 'Elite status with 78% score - Top 5% of participants in comprehensive full-stack development course',
      impact: 'Mastered full-stack development principles and modern frameworks for building scalable web applications',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      certificateImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      skills: ['React', 'Node.js', 'Database Design', 'API Development', 'Full-stack Development'],
      duration: '12 weeks',
      projects: 3,
      score: '78%',
      category: 'Professional Certification',
      participants: '50,000+',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'REST APIs']
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: 'NPTEL Elite Certification',
      description: 'The Joy of Computing using Python',
      organization: 'IIT Kharagpur',
      date: '2024',
      type: 'certification',
      color: 'from-green-500 to-green-600',
      details: 'Elite status with 85% score - Highest scoring certification demonstrating advanced Python programming skills',
      impact: 'Advanced Python programming and algorithmic thinking skills for computational problem solving',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      certificateImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      skills: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving', 'Computational Thinking'],
      duration: '12 weeks',
      projects: 4,
      score: '85%',
      category: 'Professional Certification',
      participants: '45,000+',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'Algorithm Design', 'Data Analysis']
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: 'NPTEL Elite Certification',
      description: 'Embedded System Design with ARM',
      organization: 'IIT Kharagpur',
      date: '2024',
      type: 'certification',
      color: 'from-red-500 to-red-600',
      details: 'Elite status with 81% score - ARM architecture specialization with hands-on embedded programming',
      impact: 'Advanced embedded systems design and real-time programming expertise for ARM-based microcontrollers',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      certificateImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      skills: ['ARM Architecture', 'Embedded C', 'Real-time Systems', 'Hardware Interfacing', 'Microcontroller Programming'],
      duration: '12 weeks',
      projects: 6,
      score: '81%',
      category: 'Professional Certification',
      participants: '30,000+',
      technologies: ['ARM Cortex', 'Embedded C', 'Keil uVision', 'Hardware Debugging', 'Real-time OS']
    },
    {
      icon: <Certificate className="w-8 h-8" />,
      title: 'NPTEL Elite Certification',
      description: 'Microprocessors and Microcontrollers',
      organization: 'IIT Kharagpur',
      date: '2024',
      type: 'certification',
      color: 'from-pink-500 to-pink-600',
      details: 'Elite status with 83% score - Comprehensive microcontroller programming and interfacing expertise',
      impact: 'Comprehensive knowledge of embedded system programming and microcontroller applications',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=800',
      certificateImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
      skills: ['Microprocessors', 'Microcontrollers', 'Assembly Programming', 'Interfacing', '8051 Programming'],
      duration: '12 weeks',
      projects: 5,
      score: '83%',
      category: 'Professional Certification',
      participants: '35,000+',
      technologies: ['8051', 'Assembly Language', 'Interfacing Circuits', 'Embedded Programming', 'Hardware Design']
    }
];

