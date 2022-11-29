import React from 'react';
import './BackButton.css';
import { useNavigate } from 'react-router-dom';

function BackButton({ text, path, currentClass, title }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className={`back-button ${currentClass && currentClass}`}
      to={path}
    >
      <span className='back-button__corner' />
      <span className='back-button__title'>{text}</span>
      <h1 className='back-button__section-title'>{title}</h1>
    </button>
  );
}

export default BackButton;
