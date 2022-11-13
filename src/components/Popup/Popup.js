import React from 'react';
import './Popup.css';

function Popup({ title, className, children }) {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <>
      <div className={`popup__overlay ${!isHidden && 'active'}`}></div>
      <section
        onClick={() => setIsHidden((state) => !state)}
        className={`popup ${!isHidden && 'active'} ${className}`}
      >
        <span className='popup__line'></span>
        <p className={`popup__title ${!isHidden && 'active'}`}>{title}</p>
        {!isHidden && <>{children}</>}
      </section>
    </>
  );
}

export default Popup;
