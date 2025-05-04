import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setNav(!nav);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="text-2xl font-mono text-green">
              CS.
            </Link>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="nav-link relative">
                <span className="text-sm font-mono">01.</span> Home
              </Link>
              <Link to="/about" className="nav-link relative">
                <span className="text-sm font-mono">02.</span> About
              </Link>
              <Link to="/projects" className="nav-link relative">
                <span className="text-sm font-mono">03.</span> Projects
              </Link>
              <Link to="/experience" className="nav-link relative">
                <span className="text-sm font-mono">04.</span> Experience
              </Link>
              <Link to="/contact" className="nav-link relative">
                <span className="text-sm font-mono">05.</span> Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={handleClick}
              className="text-slate hover:text-green transition-colors duration-300"
            >
              {!nav ? (
                <Bars3Icon className="h-6 w-6" />
              ) : (
                <XMarkIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`md:hidden fixed inset-0 bg-navy/90 backdrop-blur-sm ${
          nav ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: nav ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <Link
            to="/"
            className="text-2xl font-mono text-green hover:text-lightest-slate"
            onClick={() => setNav(false)}
          >
            <span className="text-sm">01.</span> Home
          </Link>
          <Link
            to="/about"
            className="text-2xl font-mono text-green hover:text-lightest-slate"
            onClick={() => setNav(false)}
          >
            <span className="text-sm">02.</span> About
          </Link>
          <Link
            to="/projects"
            className="text-2xl font-mono text-green hover:text-lightest-slate"
            onClick={() => setNav(false)}
          >
            <span className="text-sm">03.</span> Projects
          </Link>
          <Link
            to="/experience"
            className="text-2xl font-mono text-green hover:text-lightest-slate"
            onClick={() => setNav(false)}
          >
            <span className="text-sm">04.</span> Experience
          </Link>
          <Link
            to="/contact"
            className="text-2xl font-mono text-green hover:text-lightest-slate"
            onClick={() => setNav(false)}
          >
            <span className="text-sm">05.</span> Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            onClick={() => setNav(false)}
          >
            Resume
          </a>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 