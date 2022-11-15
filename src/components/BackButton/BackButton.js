import React from 'react';
import './BackButton.css';
import { Link } from 'react-router-dom';

function BackButton({ text, path, currentClass }) {
  return (
    <Link className={`back-button ${currentClass && currentClass}`} to={path}>
      <span className='back-button__corner' />
      {text}
    </Link>
  );
}

export default BackButton;
