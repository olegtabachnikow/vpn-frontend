import React from 'react';
import './TariffesTemplatePopup.css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const popupVariants = {
  open: { opacity: 1, transition: { duration: 0.2 } },
  closed: { opacity: 0 },
};

function TariffesTemplatePopup({
  currentClass,
  isHidden,
  setIsHidden,
  buttonText,
  children,
}) {
  return (
    <motion.div
      initial='closed'
      animate={isHidden ? 'closed' : 'open'}
      variants={popupVariants}
      className={`tariffes-template-popup ${!isHidden && 'active'}`}
      onClick={() => setIsHidden(true)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`tariffes-template-popup__info ${currentClass}`}
      >
        <button
          onClick={() => setIsHidden(true)}
          className='tariffes-template-popup__info-button'
        >
          {buttonText}
          <span
            className={`tariffes-template-popup__info-button-arrow ${currentClass}`}
          />
        </button>
        {children}
      </div>
    </motion.div>
  );
}
TariffesTemplatePopup.propTypes = {
  currentClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  setIsHidden: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
};

export default TariffesTemplatePopup;
