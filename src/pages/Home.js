import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center px-4 md:px-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl md:text-6xl font-bold text-lightest-slate mb-4"
      >
        Hi, I'm <span className="text-teal">Your Name</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold text-slate mb-8"
      >
        I build things for the web.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-lg md:text-xl text-slate max-w-2xl text-center mb-8"
      >
        I'm a software engineer specializing in building exceptional digital experiences.
        Currently, I'm focused on building accessible, human-centered products.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Link
          to="/contact"
          className="inline-block px-6 py-3 border-2 border-teal text-teal rounded-md hover:bg-teal/10 transition-colors duration-300"
        >
          Get In Touch
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Home; 