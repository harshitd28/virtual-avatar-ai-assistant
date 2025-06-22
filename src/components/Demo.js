import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mic, Brain, Globe, Volume2, Video, ArrowRight } from 'lucide-react';

const Demo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workflowSteps = [
    {
      icon: Mic,
      title: 'Speak',
      description: 'User speaks naturally',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Transcribe',
      description: 'Whisper converts speech to text',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Translate',
      description: 'GPT-4o processes & translates',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Volume2,
      title: 'Respond',
      description: 'Avatar delivers translated speech',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="demo" className="section-padding bg-gradient-to-b from-dark-900 to-dark-800 relative overflow-hidden">
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
            <span className="text-sm font-medium text-gray-300">Live Demo</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">See It</span>
            <br />
            <span className="text-white">In Action</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the seamless flow from speech to intelligent response with our 
            real-time AI avatar technology. Watch how natural conversations become possible.
          </motion.p>
        </motion.div>

        {/* Demo Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-700 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for demo video */}
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <Video className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Demo Video Coming Soon</h3>
                <p className="text-gray-400 mb-6">
                  Watch our Virtual Avatar AI Assistant in action with real-time speech processing
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="button-primary"
                >
                  Request Demo Access
                </motion.button>
              </div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-clip-border animate-gradient"></div>
            </div>
          </div>
        </motion.div>

        {/* Workflow Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            How It <span className="gradient-text">Works</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-4 lg:gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 + index * 0.1, duration: 0.6 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="glass-effect rounded-xl p-6 text-center card-hover group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>

                {/* Arrow (except for last item) */}
                {index < workflowSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 transform -translate-y-1/2 z-10"
                  >
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* User Journey */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Complete <span className="gradient-text">User Journey</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '01', title: 'Start Conversation', desc: 'User initiates chat with avatar' },
                { step: '02', title: 'Natural Speech', desc: 'Speak naturally in any language' },
                { step: '03', title: 'AI Processing', desc: 'Real-time recognition & translation' },
                { step: '04', title: 'Avatar Response', desc: 'Avatar delivers translated speech' },
              ].map((journey, index) => (
                <motion.div
                  key={journey.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">{journey.step}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{journey.title}</h4>
                  <p className="text-gray-400 text-sm">{journey.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Demo; 