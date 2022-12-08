import React from 'react';
import './Popup.css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const popupVariants = {
  open: {
    y: 0,
    zIndex: 17,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    zIndex: 15,
    y: 'calc(100% - 61px)',
    transition: {
      duration: 0.2,
    },
  },
};
const overlayVariants = {
  open: {
    zIndex: 16,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    zIndex: 1,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
function Popup({ title, currentClass, children, isHidden, handleHide }) {
  return (
    <>
      <motion.div
        initial='closed'
        animate={isHidden ? 'closed' : 'open'}
        variants={overlayVariants}
        onClick={(e) => e.stopPropagation()}
        className={`popup__overlay ${!isHidden && 'active'}`}
      ></motion.div>
      <motion.section
        className={`popup ${!isHidden && 'active'} ${currentClass}`}
        initial='closed'
        animate={isHidden ? 'closed' : 'open'}
        variants={popupVariants}
      >
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
      </motion.section>
    </>
  );
}
Popup.propTypes = {
  currentClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  isHidden: PropTypes.bool.isRequired,
  handleHide: PropTypes.func.isRequired,
};
export default Popup;
