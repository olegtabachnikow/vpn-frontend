import React from 'react';
import './AppButton.css';

function AppButton({ background, color, text, border, handler }) {
  return (
    <button
      className='app-button'
      onClick={handler}
      style={{
        backgroundColor: `${background}`,
        color: `${color}`,
        border: `1px solid ${border}`,
      }}
      type='button'
    >
      {text}
    </button>
  );
}

export default AppButton;
