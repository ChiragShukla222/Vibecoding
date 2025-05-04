import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const sections = [
  { id: 'home', name: 'Home', number: '01', path: '/' },
  { id: 'about', name: 'About', number: '02', path: '/about' },
  { id: 'projects', name: 'Projects', number: '03', path: '/projects' },
  { id: 'experience', name: 'Experience', number: '04', path: '/experience' },
  { id: 'contact', name: 'Contact', number: '05', path: '/contact' },
];

const SideNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(currentScroll < 100 || currentScroll < window.previousScroll);
      window.previousScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <motion.nav
      className="fixed right-8 top-1/2 -translate-y-1/2 hidden md:block"
      variants={navVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <div className="flex flex-col items-end space-y-4">
        {sections.map((section, i) => (
          <motion.div
            key={section.id}
            className="group flex items-center space-x-2"
            variants={itemVariants}
            custom={i}
            whileHover={{ x: -5 }}
          >
            <Link
              to={section.path}
              className="flex items-center space-x-2"
            >
              <span className="text-xs font-mono text-teal">{section.number}</span>
              <span
                className={`text-sm font-mono transition-colors duration-300 ${
                  location.pathname === section.path ? 'text-teal' : 'text-slate'
                }`}
              >
                {section.name}
              </span>
              <div
                className={`h-px w-8 transition-colors duration-300 ${
                  location.pathname === section.path ? 'bg-teal' : 'bg-slate/20'
                }`}
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
};

export default SideNav; 