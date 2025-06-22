import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mic, 
  Brain, 
  Globe, 
  Video, 
  Code, 
  Database,
  Zap,
  Shield,
  Cpu
} from 'lucide-react';

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const technologies = [
    {
      name: 'Whisper',
      category: 'Speech-to-Text',
      description: 'OpenAI\'s advanced speech recognition model for accurate transcription',
      icon: Mic,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time processing', 'Multi-language support', 'High accuracy']
    },
    {
      name: 'GPT-4o',
      category: 'Language Processing',
      description: 'State-of-the-art language model for intelligent conversation',
      icon: Brain,
      color: 'from-green-500 to-emerald-500',
      features: ['Natural conversations', 'Context awareness', 'Multilingual understanding']
    },
    {
      name: 'OpenAI Realtime API',
      category: 'Translation & TTS',
      description: 'Real-time translation and text-to-speech capabilities',
      icon: Globe,
      color: 'from-yellow-500 to-orange-500',
      features: ['Instant translation', 'Natural voice synthesis', 'Low latency']
    },
    {
      name: 'Wav2Lip',
      category: 'Lip Sync',
      description: 'Advanced lip-syncing technology for realistic avatar animation',
      icon: Video,
      color: 'from-purple-500 to-pink-500',
      features: ['Precise lip sync', 'Real-time processing', 'Natural expressions']
    },
    {
      name: 'React',
      category: 'Frontend',
      description: 'Modern React framework for responsive user interface',
      icon: Code,
      color: 'from-indigo-500 to-blue-500',
      features: ['Component-based', 'Responsive design', 'Modern UI/UX']
    },
    {
      name: 'FastAPI',
      category: 'Backend',
      description: 'High-performance Python framework for API development',
      icon: Cpu,
      color: 'from-red-500 to-rose-500',
      features: ['Fast performance', 'Async support', 'Auto documentation']
    },
    {
      name: 'VideoSDK',
      category: 'WebRTC',
      description: 'Real-time communication platform for video streaming',
      icon: Zap,
      color: 'from-teal-500 to-cyan-500',
      features: ['Low latency', 'High quality', 'Scalable']
    },
    {
      name: 'WebRTC',
      category: 'Communication',
      description: 'Peer-to-peer communication for real-time audio/video',
      icon: Shield,
      color: 'from-violet-500 to-purple-500',
      features: ['P2P connection', 'Secure communication', 'Real-time streaming']
    }
  ];

  return (
    <section id="tech" className="section-padding bg-gradient-to-b from-dark-800 to-dark-700 relative overflow-hidden">
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
            <span className="text-sm font-medium text-gray-300">Technology Stack</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Powered by</span>
            <br />
            <span className="text-white">Cutting-Edge Tech</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our Virtual Avatar AI Assistant leverages the latest advancements in AI, 
            speech processing, and real-time communication to deliver an unparalleled experience.
          </motion.p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="glass-effect rounded-xl p-6 card-hover group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>

              {/* Category Badge */}
              <div className="inline-block px-3 py-1 bg-white/10 dark:bg-dark-700/50 rounded-full text-xs font-medium text-gray-300 mb-3">
                {tech.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {tech.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-gray-500">
                    <span className={`w-1.5 h-1.5 bg-gradient-to-r ${tech.color} rounded-full mr-2`}></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              System <span className="gradient-text">Architecture</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Frontend Layer',
                  description: 'React-based UI with real-time video streaming',
                  tech: ['React', 'VideoSDK', 'WebRTC'],
                  color: 'from-blue-500 to-cyan-500'
                },
                {
                  title: 'AI Processing Layer',
                  description: 'Speech recognition, translation, and response generation',
                  tech: ['Whisper', 'GPT-4o', 'OpenAI API'],
                  color: 'from-green-500 to-emerald-500'
                },
                {
                  title: 'Avatar Layer',
                  description: 'Lip-syncing and facial animation technology',
                  tech: ['Wav2Lip', 'Video Processing', 'Real-time Sync'],
                  color: 'from-purple-500 to-pink-500'
                }
              ].map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${layer.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Database className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">{layer.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{layer.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {layer.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-white/10 dark:bg-dark-700/50 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack; 