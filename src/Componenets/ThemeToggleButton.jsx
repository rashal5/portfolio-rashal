import React from 'react';
import { useTheme } from './ThemeContext';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'relative',
        padding: '10px 20px', 
        backgroundColor: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#333' : '#f0f0f0',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'fit-content', 
        margin: '0 auto',
      }}
    >
      <motion.div
        style={{
          position: 'absolute',
          height: '100%',
          width: '50%',
          backgroundColor: theme === 'light' ? '#000000' : '#FFFFFF', 
          borderRadius: '20px',
          left: theme === 'light' ? 0 : '50%', 
          transition: 'left 0.3s ease',
        }}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative', 
          zIndex: 1, 
        }}
      >
        <span style={{ fontSize: '1.5em' }}>{theme === 'light' ? <FaMoon /> : <FaSun />}</span>
        <span style={{ marginLeft: '10px', fontSize: '1em' }}>
          {theme === 'light' ? 'Dark' : 'Light'}
        </span>
      </div>
    </button>
  );
};

export default ThemeToggleButton;
