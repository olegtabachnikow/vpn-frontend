import React from 'react';
import './TariffesTemplate.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import CurrentTariffWidget from '../CurrentTariffWidget/CurrentTariffWidget';
import PropTypes from 'prop-types';

function TariffesTemplate({
  currentClass,
  buttonText,
  handler,
  children,
  error,
  setIsFreeInfoHidden,
  setIsHidden,
  setIsRecommendHidden,
  setIsGbHidden,
}) {
  const navigate = useNavigate();
  return (
    <section className={`tariffes-template ${currentClass}`}>
      <BackButton
        text='Назад'
        title={'Тариф: ' + currentClass.toUpperCase()}
        path={-1}
        currentClass='back-button-tariffes-template'
      />
      <CurrentTariffWidget />
      <div className='tariffes-template__content'>{children}</div>
      <div className='tariffes-template__content-secondary'>
        {currentClass === 'free' ? (
          <button
            className={`tariffes-template__content-button ${currentClass}`}
            onClick={() => setIsFreeInfoHidden(false)}
          >
            А у меня...5 или 10 Гб?{' '}
            <span
              className={`tariffes-template__content-button-arrow ${currentClass}`}
            />
          </button>
        ) : null}
        <button
          className={`tariffes-template__content-button ${currentClass}`}
          onClick={() => setIsHidden(false)}
        >
          Почему robo?{' '}
          <span
            className={`tariffes-template__content-button-arrow ${currentClass}`}
          />
        </button>
        {currentClass === 'fit' ? (
          <>
            <button
              className={`tariffes-template__content-button ${currentClass}`}
              onClick={() => setIsRecommendHidden(false)}
            >
              «Рекомендуем» — это?{' '}
              <span
                className={`tariffes-template__content-button-arrow ${currentClass}`}
              />
            </button>
            <button
              className={`tariffes-template__content-button ${currentClass}`}
              onClick={() => setIsGbHidden(false)}
            >
              «+ 10 Гб» — это?{' '}
              <span
                className={`tariffes-template__content-button-arrow ${currentClass}`}
              />
            </button>
          </>
        ) : null}
        <span className='tariffes__error'>{error}</span>
        {currentClass === 'free' ? (
          <AppButton
            text='Пополнить Гб'
            handler={() => navigate('/tariffes/fit')}
            currentClass={`${currentClass} margin-bottom`}
          />
        ) : null}
        <AppButton
          text={buttonText}
          handler={handler}
          currentClass={currentClass}
        />
      </div>
    </section>
  );
}
TariffesTemplate.propTypes = {
  currentClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  error: PropTypes.string,
  setIsFreeInfoHidden: PropTypes.func,
  setIsHidden: PropTypes.func.isRequired,
  setIsRecommendHidden: PropTypes.func,
  setIsGbHidden: PropTypes.func,
};
export default TariffesTemplate;
