import React from 'react';
import './MenuButton.css';

function MenuButton({ image, currentClass, title, text, addText, handler }) {
  return (
    <button onClick={handler} className={`menu-button  ${currentClass}`}>
      <img className='menu-button__icon' src={image} alt='current icon' />
      <h2 className={`menu-button__title ${currentClass}`}>{title}</h2>
      <p className='menu-button__text'>{text}</p>
      {!!addText && <p className='menu-button__additional-text'>{addText}</p>}
    </button>
  );
}

export default MenuButton;
