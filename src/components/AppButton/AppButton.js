import React from 'react';
import './AppButton.css';

function AppButton({ text, handler, currentClass }) {
  return (
    <button
      className={`app-button ${currentClass}`}
      onClick={handler}
      type='button'
    >
      {text}
    </button>
  );
}

export default AppButton;
