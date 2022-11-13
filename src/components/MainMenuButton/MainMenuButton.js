import React from 'react';
import './MainMenuButton.css';
import { Link } from 'react-router-dom';

function MainMenuButton({ path, image, currentClass, title, text, addText }) {
  return (
    <Link to={path} className={`main-menu-button ${currentClass}`}>
      <img className='main-menu-button__icon' src={image} alt='current icon' />
      <h2 className={`main-menu-button__title ${currentClass}`}>{title}</h2>
      <p className='main-menu-button__text'>{text}</p>
      {!!addText && (
        <p className='main-menu-button__additional-text'>{addText}</p>
      )}
    </Link>
  );
}

export default MainMenuButton;
