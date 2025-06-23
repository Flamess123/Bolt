import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Ready to collaborate on innovative embedded systems projects? Let's discuss how we can create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-8">
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  title: 'Email',
                  content: 'seshadrisakthivel43@gmail.com',
                  link: 'mailto:seshadrisakthivel43@gmail.com'
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  title: 'Phone',
                  content: '+91 9842606549',
                  link: 'tel:+919842606549'
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  title: 'Location',
                  content: 'Tamil Nadu, India',
                  link: null
                }
              ].map((contact) => (
                <div
                  key={contact.title}
                  className="flex items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{contact.title}</h4>
                    {contact.link ? (
                      <a
                        href={contact.link}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        {contact.content}
                      </a>
                    ) : (
                      <p className="text-gray-600">{contact.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/seshadris43"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl text-white hover:from-blue-700 hover:to-blue-800 transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/seshadris96"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-3 rounded-xl text-white hover:from-gray-900 hover:to-black transform hover:scale-110 transition-all duration-300 shadow-lg"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project ideas or collaboration opportunities..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
