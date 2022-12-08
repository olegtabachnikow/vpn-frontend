import React from 'react';
import './BackButton.css';
import { useNavigate } from 'react-router-dom';
import { setDirection } from '../../redux/actions/actions';
import PropTypes from 'prop-types';

function BackButton({ text, path, currentClass, title }) {
  const navigate = useNavigate();
  function handleClick() {
    setDirection(false);
    navigate(path);
  }
  return (
    <button
      onClick={handleClick}
      className={`back-button ${currentClass && currentClass}`}
      to={path}
    >
      <span className='back-button__corner' />
      <span className='back-button__title'>{text}</span>
      <h1 className='back-button__section-title'>{title}</h1>
    </button>
  );
}
BackButton.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  currentClass: PropTypes.string.isRequired,
  title: PropTypes.string,
};
export default BackButton;
