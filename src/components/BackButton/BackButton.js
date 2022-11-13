import React from 'react';
import './BackButton.css';
import { Link } from 'react-router-dom';

function BackButton({ text, path }) {
  return (
    <Link className='back-button' to={path}>
      <span className='back-button__corner' />
      {text}
    </Link>
  );
}

export default BackButton;
