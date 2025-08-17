import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const AutoChatbot: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVoiceflowLoaded, setIsVoiceflowLoaded] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showPopupAnimation, setShowPopupAnimation] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(false);

  useEffect(() => {
    // Initial page load popup animation (3 second delay)
    const initialPopupTimer = setTimeout(() => {
      if (!isDismissed) {
        setShowInitialPopup(true);
        // Hide initial popup after 4 seconds
        setTimeout(() => {
          setShowInitialPopup(false);
        }, 4000);
      }
    }, 3000);

    // Load Voiceflow chat widget script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true; // Performance optimization
    script.innerHTML = `
      (function(d, t) {
          var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
          v.onload = function() {
            window.voiceflow.chat.load({
              verify: { projectID: '683b4d229ea212a7c30fd04c' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production',
              voice: {
                url: "https://runtime-api.voiceflow.com"
              }
            });
          }
          v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
      })(document, 'script');
    `;
    document.head.appendChild(script);

    // Check if Voiceflow is loaded and show chatbot after 3 seconds
    const checkVoiceflowAndShow = () => {
      if ((window as any).voiceflowLoaded && !isDismissed) {
        setIsVoiceflowLoaded(true);
        setTimeout(() => {
          setIsVisible(true);
          // Show popup animation after chatbot becomes visible
          setTimeout(() => {
            setShowPopupAnimation(true);
            // Hide popup animation after 5 seconds
            setTimeout(() => {
              setShowPopupAnimation(false);
            }, 5000);
          }, 500);
        }, 3000); // 3 second delay
      } else if (!isDismissed) {
        // Keep checking every 500ms until Voiceflow is loaded
        setTimeout(checkVoiceflowAndShow, 500);
      }
    };

    // Start checking after a short delay to ensure page is loaded
    setTimeout(checkVoiceflowAndShow, 100);

    // Cleanup function
    return () => {
      clearTimeout(initialPopupTimer);
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [isDismissed]);

  const handleOpenChat = () => {
    // Open Voiceflow chat
    if ((window as any).voiceflow?.chat?.open) {
      (window as any).voiceflow.chat.open();
    }
    setIsVisible(false);
    setShowInitialPopup(false);
  };

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    setShowPopupAnimation(false);
    setShowInitialPopup(false);
  };

  // Respect user's motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      x: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: prefersReducedMotion ? 0.1 : 0.4
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      x: 20,
      transition: {
        duration: prefersReducedMotion ? 0.1 : 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {/* Initial Page Load Popup */}
      {showInitialPopup && !isDismissed && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 50 }}
          transition={{ 
            type: "spring", 
            stiffness: 300, 
            damping: 25,
            duration: prefersReducedMotion ? 0.1 : 0.6 
          }}
          className="fixed bottom-6 right-6 z-50 chatbot-initial-popup"
        >
          <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-1 rounded-2xl shadow-2xl">
            <div className="bg-black rounded-2xl p-6 relative overflow-hidden max-w-sm">
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 animate-pulse"></div>
              
              {/* Close button */}
              <button
                onClick={handleDismiss}
                className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200 z-10"
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center neon-glow"
                  >
                    <MessageCircle className="w-6 h-6 text-black" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Welcome to VUENTY!</h3>
                    <p className="text-gray-400 text-sm">AI Assistant Ready</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  🚀 Ready to transform your business with intelligent automation? 
                  Our AI assistant is here to help you get started!
                </p>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleOpenChat}
                    className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 neon-glow"
                  >
                    Chat Now
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDismiss}
                    className="px-4 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 rounded-lg text-sm transition-all duration-300"
                  >
                    Maybe Later
                  </motion.button>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-30"></div>
            </div>
          </div>
        </motion.div>
      )}

      {isVisible && isVoiceflowLoaded && (
        <>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={animationVariants}
            className={`fixed bottom-6 right-6 z-50 ${showPopupAnimation ? 'chatbot-popup-glow' : ''}`}
          >
            <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-1 rounded-2xl shadow-2xl performance-optimized">
              <div className="bg-black rounded-2xl p-6 relative overflow-hidden">
                {/* Animated background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 animate-pulse performance-optimized"></div>
                
                {/* Close button */}
                <button
                  onClick={handleDismiss}
                  className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors duration-200 z-10"
                  aria-label="Close chatbot"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Content */}
                <div className="relative z-10 max-w-xs">
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center neon-glow"
                    >
                      <MessageCircle className="w-6 h-6 text-black" />
                    </motion.div>
                    <div>
                      <h3 className="text-white font-bold text-lg">VUENTY AI</h3>
                      <p className="text-gray-400 text-sm">Assistant Online</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Ready to deploy your automation systems? I'm here to help you get started with intelligent solutions.
                  </p>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleOpenChat}
                      className="flex-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 neon-glow"
                    >
                      START CHAT
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDismiss}
                      className="px-4 py-2 border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 rounded-lg text-sm transition-all duration-300"
                    >
                      Later
                    </motion.button>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-purple-500 rounded-full opacity-30"></div>
              </div>
            </div>
          </motion.div>

          {/* Popup Animation Overlay */}
          <AnimatePresence>
            {showPopupAnimation && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="fixed bottom-24 right-6 z-40 pointer-events-none"
              >
                <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-4 py-2 rounded-lg font-bold text-sm shadow-2xl popup-bounce">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Need help? Chat with our AI!</span>
                  </div>
                  {/* Arrow pointing to chatbot */}
                  <div className="absolute -bottom-2 right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-cyan-400"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default AutoChatbot;