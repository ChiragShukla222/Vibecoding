import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full h-screen bg-primary">
      {/* Hero Section */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-light">
            Chirag Shukla
          </h1>
          <h2 className="text-3xl sm:text-6xl font-bold text-lighter">
            I'm a MERN Stack Developer.
          </h2>
          <p className="text-lighter py-4 max-w-[700px]">
            I specialize in building exceptional digital experiences. Currently, I'm focused on
            building responsive web applications using modern technologies.
          </p>
          <div className="flex gap-4">
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary"
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-secondary hover:border-secondary"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home; 