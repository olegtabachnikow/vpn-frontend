import React from 'react';
import './Popup.css';

function Popup({ title, currentClass, children }) {
  const [isHidden, setIsHidden] = React.useState(true);
  return (
    <>
      <div className={`popup__overlay ${!isHidden && 'active'}`}></div>
      <section
        onClick={() => setIsHidden((state) => !state)}
        className={`popup ${!isHidden && 'active'} ${currentClass}`}
      >
        <span className='popup__line'></span>
        <p className={`popup__title ${!isHidden && 'active'}`}>{title}</p>
        <div className={`${isHidden && 'popup__text-container_hidden'}`}>
          {children}
        </div>
      </section>
    </>
  );
}

export default Popup;
