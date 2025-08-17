import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const LeadCapture: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init("-Zci59EcngiqkpflN");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formRef.current) {
      emailjs.sendForm("service_zentry", "template_zentry", formRef.current)
        .then(() => alert("Form başarıyla gönderildi ✅"))
        .catch((err) => alert("Bir hata oluştu: " + err));
    }
  };

  return (
    <section id="contact" className="py-32 bg-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20 -z-10"></div>
      
      <div className="max-w-4xl mx-auto px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            INITIATE
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
              CONTACT
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            Transmit your mission parameters for custom automation system deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 bg-gray-900/30 backdrop-blur-sm border border-gray-800 p-10 digital-border"
        >
          <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-8">
              <label htmlFor="fullName" className="block text-white font-bold mb-3 uppercase tracking-wide text-sm">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="from_name"
                required
                className="w-full px-4 py-4 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors font-light focus:bg-gray-900"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="email" className="block text-white font-bold mb-3 uppercase tracking-wide text-sm">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="reply_to"
                required
                className="w-full px-4 py-4 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors font-light focus:bg-gray-900"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-10">
              <label htmlFor="message" className="block text-white font-bold mb-3 uppercase tracking-wide text-sm">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full px-4 py-4 bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none font-light focus:bg-gray-900"
                placeholder="Tell us about your project requirements..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black py-4 px-8 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 neon-glow uppercase tracking-wide"
            >
              SEND MESSAGE
              <Send className="w-5 h-5" />
            </motion.button>
          </form>

        </motion.div>
      </div>
    </section>
  );
};

export default LeadCapture;