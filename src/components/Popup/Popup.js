import React from 'react';
import './Popup.css';

function Popup({ title, currentClass, children, isHidden, handleHide }) {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`popup__overlay ${!isHidden && 'active'}`}
      ></div>
      <section className={`popup ${!isHidden && 'active'} ${currentClass}`}>
        {!!title.length && (
          <button
            onClick={() => handleHide((state) => !state)}
            className='popup__top-button'
          >
            <span
              className={`popup__button-icon ${
                !isHidden && 'active'
              } popup__button-icon-${currentClass}`}
            />
            <p className={`popup__title ${!isHidden && 'active'}`}>{title}</p>
          </button>
        )}
        <div
          className={`popup__content ${
            isHidden && 'popup__text-container_hidden'
          }`}
        >
          {children}
        </div>
      </section>
    </>
  );
}

export default Popup;
