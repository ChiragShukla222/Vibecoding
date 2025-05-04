import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const sections = [
  { id: 'home', name: 'Home', number: '01', path: '/' },
  { id: 'about', name: 'About', number: '02', path: '/about' },
  { id: 'projects', name: 'Projects', number: '03', path: '/projects' },
  { id: 'experience', name: 'Experience', number: '04', path: '/experience' },
  { id: 'contact', name: 'Contact', number: '05', path: '/contact' },
];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentSection = sections.find(section => section.path === currentPath);
    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 h-full w-24 bg-light-navy/5 backdrop-blur-sm z-50 hidden md:flex flex-col items-center justify-center">
      <motion.div
        className="flex flex-col items-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.path}
            className="group relative flex flex-col items-center"
          >
            <motion.span
              className={`text-xs font-mono transition-colors duration-300 ${
                activeSection === section.id ? 'text-teal' : 'text-slate'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {section.number}
            </motion.span>
            <motion.span
              className={`text-xs font-mono transition-colors duration-300 ${
                activeSection === section.id ? 'text-teal' : 'text-slate'
              }`}
              whileHover={{ scale: 1.1 }}
            >
              {section.name}
            </motion.span>
            {activeSection === section.id && (
              <motion.div
                className="absolute -left-2 w-1 h-8 bg-teal rounded-r"
                layoutId="activeSection"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};

SideNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default SideNav; 