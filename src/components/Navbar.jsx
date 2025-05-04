import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-primary fixed drop-shadow-lg bg-opacity-90 flex justify-center items-center">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl text-secondary">
            CS.
          </h1>
          <ul className="hidden md:flex">
            <li className="hover:text-secondary transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-secondary transition duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-secondary transition duration-300">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="hover:text-secondary transition duration-300">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="hover:text-secondary transition duration-300">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <Bars3Icon className="w-5 text-secondary" />
          ) : (
            <XMarkIcon className="w-5 text-secondary" />
          )}
        </div>
      </div>

      <motion.ul
        className={!nav ? 'hidden' : 'absolute bg-primary w-full px-8'}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <li className="border-b-2 border-secondary w-full hover:text-secondary transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-secondary w-full hover:text-secondary transition duration-300">
          <Link to="/about">About</Link>
        </li>
        <li className="border-b-2 border-secondary w-full hover:text-secondary transition duration-300">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="border-b-2 border-secondary w-full hover:text-secondary transition duration-300">
          <Link to="/experience">Experience</Link>
        </li>
        <li className="border-b-2 border-secondary w-full hover:text-secondary transition duration-300">
          <Link to="/contact">Contact</Link>
        </li>
      </motion.ul>
    </div>
  );
};

export default Navbar; 