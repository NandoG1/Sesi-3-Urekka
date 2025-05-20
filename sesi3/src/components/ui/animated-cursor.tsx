'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseover', () => setLinkHovered(true));
        el.addEventListener('mouseout', () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    return () => {
      removeEventListeners();
    };
  }, []);

  // Hide the default cursor
  useEffect(() => {
    document.body.style.cursor = 'none';
    
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  const cursorVariants = {
    default: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(14, 165, 233, 0.2)',
      border: isDark ? '2px solid rgba(255, 255, 255, 0.5)' : '2px solid rgba(14, 165, 233, 0.5)',
    },
    clicked: {
      x: position.x - 16,
      y: position.y - 16,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(14, 165, 233, 0.4)',
      border: isDark ? '2px solid rgba(255, 255, 255, 0.8)' : '2px solid rgba(14, 165, 233, 0.8)',
      scale: 0.8,
    },
    hovered: {
      x: position.x - 24,
      y: position.y - 24,
      backgroundColor: 'transparent',
      border: isDark ? '3px solid rgba(255, 255, 255, 0.5)' : '3px solid rgba(14, 165, 233, 0.5)',
      height: 48,
      width: 48,
    },
  };

  const trailingDotVariants = {
    default: {
      x: position.x - 4,
      y: position.y - 4,
      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(14, 165, 233, 0.8)',
    },
    clicked: {
      x: position.x - 4,
      y: position.y - 4,
      backgroundColor: isDark ? '#ffffff' : '#0ea5e9',
      scale: 1.2,
    },
  };

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="cursor-main fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
        variants={cursorVariants}
        animate={
          hidden ? 'hidden' : clicked ? 'clicked' : linkHovered ? 'hovered' : 'default'
        }
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{ opacity: hidden ? 0 : 1 }}
      />

      {/* Trailing dot */}
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
        variants={trailingDotVariants}
        animate={clicked ? 'clicked' : 'default'}
        transition={{
          type: 'spring',
          stiffness: 1500,
          damping: 35,
        }}
        style={{ opacity: hidden ? 0 : 1 }}
      />

      {/* Trailing particles */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="cursor-trail fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[9998]"
          style={{
            opacity: hidden ? 0 : 0.5 - i * 0.1,
            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(14, 165, 233, 0.5)',
          }}
          animate={{
            x: position.x - 2,
            y: position.y - 2,
          }}
          transition={{
            type: 'spring',
            stiffness: 500 - i * 80,
            damping: 25 - i * 2,
            mass: 0.5,
            delay: 0.02 * i,
          }}
        />
      ))}
    </>
  );
}
