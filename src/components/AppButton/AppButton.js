import React from 'react';
import './AppButton.css';

function AppButton({ background, color, text, border, value, handler }) {
  function handleClick() {
    value >= 4 ? handler(4) : handler(++value);
  }
  return (
    <button
      className='app-button'
      onClick={handleClick}
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
