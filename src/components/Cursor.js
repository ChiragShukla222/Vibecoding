import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseenter', mouseEnter);
    window.addEventListener('mouseleave', mouseLeave);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseenter', mouseEnter);
      window.removeEventListener('mouseleave', mouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'A' || target.tagName === 'BUTTON') {
        setCursorVariant('link');
      } else if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      width: 16,
      height: 16,
      backgroundColor: 'var(--teal)',
      mixBlendMode: 'difference',
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      width: 24,
      height: 24,
      backgroundColor: 'var(--teal)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
      },
    },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      width: 32,
      height: 32,
      backgroundColor: 'var(--teal)',
      mixBlendMode: 'difference',
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 28,
      },
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      variants={variants}
      animate={cursorVariant}
      initial="default"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    />
  );
};

export default Cursor; 