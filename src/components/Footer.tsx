import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram,
} from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      'Website Design',
      'AI Chatbot Integration',
      'Lead Generation',
      'Marketing Automation',
      'Custom Development',
      'System Integration'
    ],
    company: [
      'About Protocol',
      'Mission Team',
      'Case Archives',
      'Careers',
      'Research Lab',
      'Contact Hub'
    ],
    resources: [
      'System Tools',
      'Code Templates',
      'Tech Guides',
      'Training Modules',
      'Support Portal',
      'Documentation'
    ],
    legal: [
      'Privacy Protocol',
      'Terms of Service',
      'Data Policy',
      'Security Standards'
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/vuenty', label: 'Instagram' }
  ];

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10 border-b border-gray-800">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="text-2xl font-black text-white tracking-tight">VUENTY</span>
              </div>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed font-light">
                Advanced automation systems engineered for maximum efficiency. 
                We deploy intelligent solutions that transform business operations through precision technology.
              </p>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-white mb-6 uppercase tracking-wide">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-white mb-6 uppercase tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-white mb-6 uppercase tracking-wide">RESOURCES</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="font-black text-white mb-6 uppercase tracking-wide">LEGAL</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center gap-6 mt-16 pt-12 border-t border-gray-800"
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-purple-500 border border-gray-700 hover:border-transparent flex items-center justify-center transition-all duration-300 group digital-border"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5 text-gray-400 group-hover:text-black" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 relative z-10">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 font-light">
              © 2025 VUENTY. ALL SYSTEMS OPERATIONAL.
            </p>
            <p className="text-sm text-gray-400 font-light">
              ENGINEERED FOR MAXIMUM EFFICIENCY.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;