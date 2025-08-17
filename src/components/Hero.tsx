import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap } from 'lucide-react';
import Spline from '@splinetool/react-spline';

interface HeroProps {
  onViewExamples: () => void;
}

const Hero: React.FC<HeroProps> = ({ onViewExamples }) => {
  // Ultra aggressive watermark removal
  useEffect(() => {
    const removeWatermark = () => {
      try {
        // Method 1: Target bottom-right positioned elements (common watermark position)
        const styles = [
          'div[style*="position: absolute"][style*="bottom: 16px"][style*="right: 16px"]',
          'div[style*="position: fixed"][style*="bottom: 16px"][style*="right: 16px"]',
          'div[style*="position: absolute"][style*="bottom: 20px"][style*="right: 20px"]',
          'div[style*="position: fixed"][style*="bottom: 20px"][style*="right: 20px"]',
          'a[href*="spline.design"]',
          'div[style*="bottom"][style*="right"]'
        ];
        
        styles.forEach(selector => {
          document.querySelectorAll(selector).forEach(el => {
            (el as HTMLElement).style.display = 'none !important';
          });
        });

        // Method 2: Nuclear approach - remove all elements with spline text
        document.querySelectorAll('*').forEach(el => {
          const element = el as HTMLElement;
          const text = element.textContent?.toLowerCase() || '';
          if (text === 'built with spline' || 
              (text.includes('spline') && (text.includes('built') || text.includes('made')))) {
            element.style.display = 'none !important';
            element.style.visibility = 'hidden !important';
            element.style.opacity = '0 !important';
            element.remove();
          }
        });

        // Method 3: Hide all canvas siblings aggressively
        document.querySelectorAll('canvas').forEach(canvas => {
          let sibling = canvas.nextElementSibling;
          while (sibling) {
            const nextSibling = sibling.nextElementSibling;
            (sibling as HTMLElement).style.display = 'none !important';
            sibling = nextSibling;
          }
        });

        // Method 4: CSS overlay to cover bottom-right area
        const overlay = document.createElement('div');
        overlay.style.cssText = `
          position: fixed !important;
          bottom: 0 !important;
          right: 0 !important;
          width: 200px !important;
          height: 60px !important;
          background: transparent !important;
          z-index: 9999 !important;
          pointer-events: none !important;
        `;
        overlay.id = 'spline-watermark-blocker';
        
        // Remove existing overlay first
        const existingOverlay = document.getElementById('spline-watermark-blocker');
        if (existingOverlay) existingOverlay.remove();
        
        document.body.appendChild(overlay);

      } catch (error) {
        console.log('Watermark removal attempt completed');
      }
    };

    // Run immediately and repeatedly
    removeWatermark();
    const intervals = [100, 500, 1000, 2000, 3000, 5000, 8000];
    intervals.forEach(delay => {
      setTimeout(removeWatermark, delay);
    });

    // Continuous monitoring
    const interval = setInterval(removeWatermark, 1000);
    setTimeout(() => clearInterval(interval), 30000);

    // Observer for dynamic changes
    const observer = new MutationObserver(removeWatermark);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    });

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      
      {/* Spline 3D Scene with additional styling to hide watermarks */}
      <div className="absolute inset-0 z-0 watermark-hidden">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center bg-black">
            <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin neon-glow"></div>
          </div>
        }>
          <Spline 
            scene="https://prod.spline.design/0XYs0pGRc5YhE4q0/scene.splinecode"
            className="w-full h-full object-cover"
          />
        </Suspense>
      </div>

      {/* Minimal overlay */}
      <div className="absolute inset-0 bg-black/20 z-5"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* ZENTRY Brand Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <h1 className="text-7xl md:text-9xl font-black text-white tracking-tight neon-text">
                VUENTY
              </h1>
            </div>
            
            {/* Primary Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-2xl md:text-3xl font-light text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text mb-2"
            >
              REDEFINE WHAT'S POSSIBLE
            </motion.div>
            
            {/* Secondary Slogan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-gray-400 font-light tracking-wide"
            >
              WHERE INNOVATION MEETS AUTOMATION
            </motion.div>
          </motion.div>

          {/* Additional Slogans */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="text-cyan-400 font-black text-lg mb-2 uppercase tracking-wide">PRECISION</div>
              <div className="text-gray-400 text-sm font-light">Every system engineered for maximum efficiency</div>
            </div>
            <div className="text-center">
              <div className="text-purple-400 font-black text-lg mb-2 uppercase tracking-wide">INTELLIGENCE</div>
              <div className="text-gray-400 text-sm font-light">AI-powered solutions that adapt and evolve</div>
            </div>
            <div className="text-center">
              <div className="text-cyan-400 font-black text-lg mb-2 uppercase tracking-wide">RESULTS</div>
              <div className="text-gray-400 text-sm font-light">Measurable growth through automation</div>
            </div>
          </motion.div>

          {/* Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="pt-12 flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onViewExamples}
              className="hero-button bg-gray-900/50 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold transition-all duration-300 uppercase tracking-wide"
            >
              VIEW EXAMPLES
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hero-button bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold transition-all duration-300 neon-glow uppercase tracking-wide"
            >
              CONTACT US
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Floating Tech Elements */}
        <motion.div
          className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full neon-glow"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-16 w-1 h-16 bg-gradient-to-t from-purple-500 to-transparent"
          animate={{ 
            height: [64, 80, 64],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Additional floating elements */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 border border-cyan-400 rotate-45"
          animate={{ 
            rotate: [45, 225, 45],
            opacity: [0.4, 1, 0.4]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;