import React from 'react';
import './MenuLink.css';
import { Link } from 'react-router-dom';

function MenuLink({ path, image, currentClass, title, text, addText }) {
  return (
    <Link to={path} className={`menu-link ${currentClass}`}>
      <img className='menu-link__icon' src={image} alt='current icon' />
      <h2 className={`menu-link__title ${currentClass}`}>{title}</h2>
      <p className='menu-link__text'>{text}</p>
      {!!addText && <p className='menu-link__additional-text'>{addText}</p>}
    </Link>
  );
}
export default MenuLink;
