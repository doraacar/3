import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageCircle, Target, Calendar, ArrowRight, Zap } from 'lucide-react';
import { services } from '../data/mockData';

const iconMap = {
  Globe,
  MessageCircle,
  Target,
  Calendar
};

const Services: React.FC = () => {
  return (
    <section className="py-32 bg-black relative">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            CORE
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
              SYSTEMS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Four precision-engineered automation modules that transform business operations and maximize efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 transition-all duration-300 hover:border-cyan-400/50 digital-border"
              >
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 neon-glow">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-400 mb-6 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 mr-4 neon-glow"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className="group/btn flex items-center text-cyan-400 hover:text-white font-bold transition-colors uppercase tracking-wide">
                  <span 
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="cursor-pointer"
                  >
                    DEPLOY
                  </span>
                  <ArrowRight className="w-4 h-4 ml-3 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* System Integration Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900/30 border border-gray-800 p-12 text-center digital-border"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mx-auto mb-8 neon-glow">
            <Zap className="w-10 h-10 text-black" />
          </div>
          <h3 className="text-4xl font-black text-white mb-6 tracking-tight">
            INTEGRATED ECOSYSTEM
          </h3>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-3xl mx-auto">
            All four systems work in perfect harmony. Your website captures attention, the chatbot qualifies leads, 
            forms convert visitors, and the appointment system closes deals automatically.
          </p>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-black/50 border border-gray-700 p-6 digital-border">
              <div className="text-3xl font-black text-cyan-400 mb-2">300%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Lead Increase</div>
            </div>
            <div className="bg-black/50 border border-gray-700 p-6 digital-border">
              <div className="text-3xl font-black text-cyan-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Automation</div>
            </div>
            <div className="bg-black/50 border border-gray-700 p-6 digital-border">
              <div className="text-3xl font-black text-cyan-400 mb-2">90%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">Time Saved</div>
            </div>
            <div className="bg-black/50 border border-gray-700 p-6 digital-border">
              <div className="text-3xl font-black text-cyan-400 mb-2">150%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wide">ROI Boost</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;