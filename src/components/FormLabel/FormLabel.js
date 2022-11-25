import React from 'react';
import './FormLabel.css';

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
}) {
  return (
    <label className={`form-label ${currentClass}`}>
      <input
        onChange={(e) => handler(e.target.value)}
        className='form-label__radio-input'
        type='radio'
        name={name}
        value={elementValue}
        defaultChecked={defaultChecked}
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
        <span className='form-label__discount-box'>{discountValue}</span>
      ) : null}
    </label>
  );
}

export default FormLabel;
