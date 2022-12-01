import React from 'react';
import './MenuButton.css';
import { motion } from 'framer-motion';

function MenuButton({ image, currentClass, title, text, addText, handler }) {
  return (
    <motion.button
      whileTap={{ scale: 0.95, transition: { duration: 0.2 } }}
      onClick={handler}
      className={`menu-button  ${currentClass}`}
    >
      <img className='menu-button__icon' src={image} alt='current icon' />
      <h2 className={`menu-button__title ${currentClass}`}>{title}</h2>
      <p className='menu-button__text'>{text}</p>
      {!!addText && <p className='menu-button__additional-text'>{addText}</p>}
    </motion.button>
  );
}

export default MenuButton;
