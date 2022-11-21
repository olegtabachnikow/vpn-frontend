import React from 'react';
import './BackButton.css';
import { useNavigate } from 'react-router-dom';

function BackButton({ text, path, currentClass }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(path)}
      className={`back-button ${currentClass && currentClass}`}
      to={path}
    >
      <span className='back-button__corner' />
      {text}
    </button>
  );
}

export default BackButton;
