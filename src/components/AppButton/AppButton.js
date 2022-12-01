import React from 'react';
import './AppButton.css';
import { motion } from 'framer-motion';

function AppButton({ text, handler, currentClass }) {
  return (
    <motion.button
      whileHover={{ scale: 0.9, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.2 } }}
      className={`app-button ${currentClass}`}
      onClick={handler}
      type='button'
    >
      {text}
    </motion.button>
  );
}

export default AppButton;
