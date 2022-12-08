import React from 'react';
import './AppButton.css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function AppButton({ text, handler, currentClass }) {
  return (
    <motion.button
      whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
      className={`app-button ${currentClass}`}
      onClick={handler}
      type='button'
    >
      {text}
    </motion.button>
  );
}
AppButton.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  currentClass: PropTypes.string.isRequired,
};
export default AppButton;
