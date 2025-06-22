import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Play, Users, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToDemo = () => {
    document.querySelector('#demo').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTeam = () => {
    document.querySelector('#team').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ float: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ float: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-accent-500/20 to-primary-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ float: [0, -15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 dark:bg-dark-800/50 backdrop-blur-md rounded-full border border-white/20 dark:border-dark-700/50 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium text-gray-300">AI Hackathon Project</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Virtual Avatar</span>
            <br />
            <span className="text-white">AI Translator</span>
          </motion.h1>

          {/* Subtitle with Type Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8"
          >
            Translate languages in real-time —
            <br />
            <TypeAnimation
              sequence={[
                'face-to-face.',
                2000,
                'in any language.',
                2000,
                'instantly.',
                2000,
                'with clarity.',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="gradient-text font-semibold"
              repeat={Infinity}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the future of global communication. Our state-of-the-art virtual avatar listens, understands, and translates speech in real-time, providing a seamless face-to-face translation experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToDemo}
              className="button-primary flex items-center space-x-2 group"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Try Demo</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTeam}
              className="button-secondary flex items-center space-x-2 group"
            >
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Meet the Team</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: 'Real-time', label: 'Speech Processing' },
              { number: 'GPT-4o', label: 'Powered AI' },
              { number: 'Multilingual', label: 'Translation' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 