import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import PropTypes from 'prop-types';

const sections = [
  { id: 'home', name: 'Home', number: '01', path: '/' },
  { id: 'about', name: 'About', number: '02', path: '/about' },
  { id: 'projects', name: 'Projects', number: '03', path: '/projects' },
  { id: 'experience', name: 'Experience', number: '04', path: '/experience' },
  { id: 'contact', name: 'Contact', number: '05', path: '/contact' },
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: 'easeOut',
      },
    }),
  };

  const handleMenuToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={handleMenuToggle}
        className="fixed top-4 right-4 p-2 text-slate hover:text-teal transition-colors duration-300"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <XIcon className="h-6 w-6" />
        ) : (
          <MenuIcon className="h-6 w-6" />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-navy/95 z-50"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {sections.map((section, i) => (
                <motion.div
                  key={section.id}
                  variants={itemVariants}
                  custom={i}
                  whileHover={{ scale: 1.05 }}
                >
                  <Link
                    to={section.path}
                    onClick={handleLinkClick}
                    className="flex items-center space-x-4"
                  >
                    <span className="text-xs font-mono text-teal">{section.number}</span>
                    <span
                      className={`text-lg font-mono transition-colors duration-300 ${
                        location.pathname === section.path ? 'text-teal' : 'text-slate'
                      }`}
                    >
                      {section.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

MobileNav.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ),
};

export default MobileNav; 