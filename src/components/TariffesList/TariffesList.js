import React from 'react';
import './TariffesList.css';
import CurrentTariffWidget from '../CurrentTariffWidget/CurrentTariffWidget';
import FormLabel from '../FormLabel/FormLabel';
import AppButton from '../AppButton/AppButton';
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDirection } from '../../redux/actions/actions';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

function TariffesList({ value, setValue, error, handleError }) {
  const [isTariffPopupHidden, setIsTariffPopupHidden] = React.useState(true);
  const navigate = useNavigate();
  const prices = useSelector((state) => state.prices);

  function handleChooseClick() {
    if (value.length) {
      setDirection(true);
      navigate(`/tariffes/${value}`);
    } else {
      handleError(translations.ru.tariffes.errorTariff);
    }
  }
  return (
    <>
      <CurrentTariffWidget />
      <div className='tariffes-list'>
        <FormLabel
          elementValue='free'
          name='tariff'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-free'
          title='FREE'
          text={translations.ru.tariffesList.tariffesListFree}
          valueMain={null}
          isDiscounted={false}
        />
        <FormLabel
          elementValue='fit'
          name='tariff'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title='FIT'
          text={translations.ru.tariffesList.tariffesListFit}
          valueMain={
            translations.ru.textTips.from +
            prices.Fix_5 +
            translations.ru.textTips.currency
          }
          isDiscounted={false}
        />
        <FormLabel
          elementValue='nolimit'
          name='tariff'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-nolimit'
          title='NOLIMIT'
          text={translations.ru.tariffesList.tariffesListNolimit}
          valueMain={
            translations.ru.textTips.from +
            prices.Nolimit_12 +
            translations.ru.textTips.currency
          }
          isDiscounted={false}
        />
        <Popup
          title={translations.ru.textTips.termsAndConditions}
          currentClass='popup-tariff'
          isHidden={isTariffPopupHidden}
          handleHide={setIsTariffPopupHidden}
        >
          {
            <>
              <div className='tariffes__popup-overlay' />
              <div className='tariffes__popup-container'>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA1}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA2}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA3}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA4}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA5}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA6}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA7}
                </p>
                <p className='tariffes__popup-text'>
                  {translations.ru.tariffesList.tariffesListPopupA8}
                </p>
              </div>
              <AppButton
                text={translations.ru.appButton.gotIt}
                currentClass='margin-top bg-blue primary white'
                handler={() => setIsTariffPopupHidden(true)}
              />
            </>
          }
        </Popup>
      </div>
      <div className='tariffes__content-secondary'>
        <span className='tariffes__error'>{error}</span>
        <div className='tariffes__button-box'>
          <AppButton
            text={translations.ru.appButton.choose}
            currentClass='primary white bg-blue'
            handler={handleChooseClick}
          />
        </div>
        <span className='tariffes__tips'>
          {translations.ru.tariffesList.tariffesListTips}
        </span>
      </div>
    </>
  );
}
TariffesList.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  handleError: PropTypes.func.isRequired,
};
export default TariffesList;
