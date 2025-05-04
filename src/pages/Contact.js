import { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen py-20 px-4 md:px-8"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-lightest-slate mb-8"
      >
        Get In Touch
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-lg text-slate mb-8 max-w-2xl"
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-2xl"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-mono text-teal mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-light-navy border border-slate/20 rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:border-teal transition-colors duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-mono text-teal mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-light-navy border border-slate/20 rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:border-teal transition-colors duration-300"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-mono text-teal mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full bg-light-navy border border-slate/20 rounded-md px-4 py-2 text-lightest-slate focus:outline-none focus:border-teal transition-colors duration-300"
            required
          />
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-teal text-navy rounded-md font-mono hover:bg-teal-tint transition-colors duration-300"
        >
          Send Message
        </motion.button>
      </motion.form>
      <div className="mt-12 flex justify-center space-x-6">
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
  );
};

Contact.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  }),
};

export default Contact; 