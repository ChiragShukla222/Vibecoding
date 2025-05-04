import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.section
      className="min-h-screen flex items-center justify-center px-8 py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-bold text-lightest-slate mb-4">
            Get In Touch
          </h2>
          <p className="text-slate mb-8 max-w-lg mx-auto">
            I'm currently looking for new opportunities, whether that's a full-time position or freelance work. If you have a project that you want to get started, think you need my help with something, or just want to say hi, feel free to reach out!
          </p>

          <motion.a
            href="mailto:your.email@example.com"
            className="inline-block border border-teal text-teal px-6 py-3 rounded hover:bg-teal-tint/10 transition-colors duration-300 mb-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Say Hello
          </motion.a>

          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <FaGithub size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-teal transition-colors duration-300"
              whileHover={{ y: -5 }}
            >
              <FaTwitter size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact; 