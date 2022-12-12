import React from 'react';
import './FormLabel.css';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

function FormLabel({
  elementValue,
  handler,
  name,
  currentClass,
  title,
  text,
  valueMain,
  valueSecondary,
  isDiscounted,
  discountValue,
  defaultChecked,
  disabled,
}) {
  const isRecommended = discountValue === 'Рекомендуем';
  return (
    <motion.label
      className={`form-label ${currentClass} ${isRecommended && 'recomended'}`}
      whileTap={{ scale: 0.95 }}
    >
      <input
        onChange={(e) => handler(e.target.value)}
        className='form-label__radio-input'
        type='radio'
        name={name}
        value={elementValue}
        defaultChecked={defaultChecked}
        disabled={disabled ? true : false}
      />
      <div className='form-label__content'>
        <div className='form-label__text-box'>
          <p
            className={`form-label__title ${
              !!text && 'form-label__title_moved'
            }`}
          >
            {title}
          </p>
          {text && <span className='form-label__text-secondary'>{text}</span>}
        </div>
        <div className='form-label__value'>
          {valueMain && (
            <span
              className={`form-label__value-main form-label__value-main-${currentClass}`}
            >
              {valueMain}
            </span>
          )}
          {valueSecondary && (
            <span className='form-label__value-secondary'>
              {valueSecondary}
            </span>
          )}
        </div>
      </div>
      {isDiscounted && discountValue ? (
        <span
          className={`form-label__discount-box ${
            isRecommended && 'recomended'
          }`}
        >
          {discountValue}
        </span>
      ) : null}
    </motion.label>
  );
}
FormLabel.propTypes = {
  currentClass: PropTypes.string.isRequired,
  elementValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  valueMain: PropTypes.string,
  valueSecondary: PropTypes.string,
  isDiscounted: PropTypes.bool,
  discountValue: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default FormLabel;
