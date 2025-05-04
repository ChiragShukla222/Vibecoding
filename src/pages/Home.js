import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Home = () => {
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
      className="min-h-screen flex items-center justify-center px-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-4">
            Hi, I'm <span className="text-teal">Your Name</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-slate mb-8">
            I build things for the web.
          </h2>
          <p className="text-lg text-slate max-w-lg mb-8">
            I'm a software engineer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <Link
            to="/about"
            className="inline-block border border-teal text-teal px-6 py-3 rounded hover:bg-teal-tint/10 transition-colors duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home; 