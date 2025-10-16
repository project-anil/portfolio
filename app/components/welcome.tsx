'use client'
import { motion } from 'motion/react';
import { useEffect } from 'react';

interface WelcomeProps {
  onEnter: () => void;
}

export function Welcome({ onEnter }: WelcomeProps) {
  useEffect(() => {
    // Auto-advance to portfolio after 3.5 seconds
    const timer = setTimeout(() => {
      onEnter();
    }, 3500);

    return () => clearTimeout(timer);
  }, [onEnter]);

  return (
    <div className="min-h-screen bg-[#0a0f1e] flex items-center justify-center relative overflow-hidden">
      {/* Minimal Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FFB400]/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <div className="inline-block">
            <div className="w-16 h-16 border-2 border-[#FFB400] rounded-lg flex items-center justify-center mx-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-[#FFB400] to-[#ff8c00] rounded" />
            </div>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl mb-6 text-white tracking-tight">
            Welcome
          </h1>
          
          <motion.div
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-[#FFB400] to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          <p className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with precision and creativity
          </p>
        </motion.div>

        {/* Loading Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFB400] rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFB400] rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.div
              className="w-1.5 h-1.5 bg-[#FFB400] rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
          </div>
          <p className="text-gray-600 text-sm">Loading portfolio...</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="mt-8 max-w-xs mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="h-0.5 bg-[#1a2332] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FFB400] to-[#ff8c00]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Skip Button (Optional) */}
        <motion.button
          onClick={onEnter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-gray-500 hover:text-[#FFB400] text-sm transition-colors duration-300"
        >
          Skip
        </motion.button>
      </div>
    </div>
  );
}
