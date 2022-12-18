import React from 'react';
import './TariffesTemplate.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import CurrentTariffWidget from '../CurrentTariffWidget/CurrentTariffWidget';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

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
        text={translations.ru.backButton.back}
        title={translations.ru.textTips.tariff + currentClass.toUpperCase()}
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
            {translations.ru.tariffes.tariffPopupTitleFree}
            <span
              className={`tariffes-template__content-button-arrow ${currentClass}`}
            />
          </button>
        ) : null}
        <button
          className={`tariffes-template__content-button ${currentClass}`}
          onClick={() => setIsHidden(false)}
        >
          {translations.ru.tariffes.tariffPopupTitleRobo}
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
              {translations.ru.tariffes.tariffPopupTitleReccomend}
              <span
                className={`tariffes-template__content-button-arrow ${currentClass}`}
              />
            </button>
            <button
              className={`tariffes-template__content-button ${currentClass}`}
              onClick={() => setIsGbHidden(false)}
            >
              {translations.ru.tariffes.tariffPopupTitle10gbAbout}
              <span
                className={`tariffes-template__content-button-arrow ${currentClass}`}
              />
            </button>
          </>
        ) : null}
        <span className='tariffes__error'>{error}</span>
        {currentClass === 'free' ? (
          <AppButton
            text={translations.ru.appButton.addGb}
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
