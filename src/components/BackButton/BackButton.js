import React from 'react';
import './BackButton.css';
import { useNavigate } from 'react-router-dom';
import { setDirection, setRedirect } from '../../redux/actions/actions';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

function BackButton({ text, path, currentClass, title }) {
  const isRedirected = useSelector((state) => state.isRedirected);
  const navigate = useNavigate();
  function handleClick() {
    setDirection(false);
    navigate(isRedirected ? '/' : path);
    isRedirected && setRedirect(false);
  }
  return (
    <button
      onClick={handleClick}
      className={`back-button ${currentClass && currentClass}`}
      to={isRedirected ? '/' : path}
    >
      <span className='back-button__corner' />
      <span className='back-button__title'>
        {isRedirected ? translations.ru.appButton.mainMenu : text}
      </span>
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
