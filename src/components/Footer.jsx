import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-20 bg-tertiary flex items-center justify-center"
    >
      <div className="text-center">
        <p className="text-lighter">
          © {new Date().getFullYear()} Chirag Shukla. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer; 