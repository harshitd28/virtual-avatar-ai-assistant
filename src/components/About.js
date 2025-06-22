import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Globe, Zap, Users } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Advanced GPT-4o language processing for natural conversations',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Globe,
      title: 'Multilingual',
      description: 'Real-time translation across multiple languages seamlessly',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'Real-time',
      description: 'Instant speech recognition and response generation',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'Human-like',
      description: 'Emotion-aware avatar with natural lip-syncing technology',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 dark:bg-dark-800/50 backdrop-blur-md rounded-full border border-white/20 dark:border-dark-700/50 mb-6"
          >
            <span className="text-sm font-medium text-gray-300">About Our Project</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Revolutionizing</span>
            <br />
            <span className="text-white">Human-AI Interaction</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Traditional AI assistants lack the human touch that makes conversations feel natural and engaging. 
            Our Virtual Avatar AI Assistant bridges this gap by combining cutting-edge speech recognition, 
            real-time translation, and advanced lip-syncing technology to create a truly immersive 
            face-to-face AI experience.
          </motion.p>
        </motion.div>

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 border-l-4 border-red-500"
          >
            <h3 className="text-2xl font-bold text-white mb-4">The Problem</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Current AI assistants are limited to text-based interactions or robotic voice responses, 
              making conversations feel impersonal and disconnected. Users crave more natural, 
              human-like interactions that include visual cues and emotional expression.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                No visual connection or facial expressions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Limited emotional intelligence and context
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                Language barriers in global communication
              </li>
            </ul>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 border-l-4 border-green-500"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Solution</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              We've developed a comprehensive AI avatar system that combines OpenAI's Realtime API 
              for speech processing, GPT-4o for intelligent responses, and Wav2Lip technology for 
              realistic lip-syncing, creating a truly human-like AI interaction experience.
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Real-time speech recognition and translation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Emotion-aware avatar with natural expressions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Seamless multilingual communication
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
              className="glass-effect rounded-xl p-6 text-center card-hover group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About; 