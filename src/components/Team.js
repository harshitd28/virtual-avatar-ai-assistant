import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Linkedin, Github, Mail } from 'lucide-react';

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers = [
    {
      name: 'Harshit Divekar',
      role: 'AI Engineer & Frontend Developer',
      bio: 'Specialized in AI/ML and creating intuitive user interfaces',
      avatar: '👨‍💻',
      linkedin: 'https://www.linkedin.com/in/harshitdivekar/',
      github: '#',
      email: 'harshit.divekar@infobeans.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Paarth Sahni',
      role: 'Backend Developer & System Architect',
      bio: 'Expert in backend development and system architecture',
      avatar: '👨‍🔧',
      linkedin: 'https://www.linkedin.com/in/paarth-sahni-a67471143/',
      github: '#',
      email: 'paarth.sahni@infobeans.com',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Hardik Ghiya',
      role: 'AI Engineer & Computer Vision',
      bio: 'Focused on computer vision and AI model development',
      avatar: '👨‍🔬',
      linkedin: 'https://www.linkedin.com/in/hardik-ghiya-547555233/',
      github: '#',
      email: 'hardik.ghiya@infobeans.com',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-b from-dark-700 to-dark-600 relative overflow-hidden">
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
            <span className="text-sm font-medium text-gray-300">Meet Our Team</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">The Minds</span>
            <br />
            <span className="text-white">Behind the Magic</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Our talented team of AI engineers and developers came together 
            to create the future of human-AI interaction.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="glass-effect rounded-2xl p-8 text-center card-hover group"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-6 text-4xl`}
              >
                {member.avatar}
              </motion.div>

              {/* Name */}
              <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>

              {/* Role */}
              <div className="inline-block px-4 py-2 bg-white/10 dark:bg-dark-700/50 rounded-full text-sm font-medium text-gray-300 mb-4">
                {member.role}
              </div>

              {/* Bio */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 dark:bg-dark-700/50 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 dark:bg-dark-700/50 rounded-full flex items-center justify-center hover:bg-gray-500/20 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-gray-300 transition-colors duration-300" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${member.email}`}
                  className="w-10 h-10 bg-white/10 dark:bg-dark-700/50 rounded-full flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 text-gray-400 hover:text-red-400 transition-colors duration-300" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-20"
        >
          <div className="glass-effect rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Team <span className="gradient-text">Highlights</span>
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { number: '3', label: 'Team Members', icon: '👥' },
                { number: '48', label: 'Hours of Work', icon: '⏰' },
                { number: '5+', label: 'Technologies', icon: '🔧' },
                { number: '∞', label: 'Possibilities', icon: '🚀' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team; 