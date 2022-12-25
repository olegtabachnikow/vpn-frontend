import React from 'react';
import './TariffFit.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import FormLabel from '../FormLabel/FormLabel';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

function TariffFit({
  handler,
  value,
  setValue,
  error,
  setIsHidden,
  setIsGbHidden,
  setIsRecommendHidden,
}) {
  const prices = useSelector((state) => state.prices);
  const currentUser = useSelector((state) => state.currentUser);

  return (
    <TariffesTemplate
      currentClass='fit'
      buttonText={translations.ru.appButton.payment}
      handler={handler}
      error={error}
      setIsHidden={setIsHidden}
      setIsGbHidden={setIsGbHidden}
      setIsRecommendHidden={setIsRecommendHidden}
    >
      <div className='tariffes__content-fit'>
        <FormLabel
          elementValue={prices.Fix_5}
          tariffName='Fix_5'
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title={`5 + 10 ${translations.ru.textTips.gbReg.toUpperCase()}`}
          text={null}
          valueMain={prices.Fix_5 + translations.ru.textTips.currency}
          valueSecondary={translations.ru.tariffes.singlePayment}
          isDiscounted={currentUser.discount ? true : false}
          currentUserDiscount={
            value * 1 === prices.Fix_5 ? currentUser.discount : null
          }
        />
        <FormLabel
          elementValue={prices.Fix_10}
          tariffName='Fix_10'
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title={`10 + 10 ${translations.ru.textTips.gbReg.toUpperCase()}`}
          text={null}
          valueMain={prices.Fix_10 + translations.ru.textTips.currency}
          valueSecondary={translations.ru.tariffes.singlePayment}
          profitValue={
            value * 1 === prices.Fix_10
              ? translations.ru.tariffes.profit + '6%'
              : null
          }
          isRecommended={true}
          isDiscounted={true}
          currentUserDiscount={
            value * 1 === prices.Fix_10 ? currentUser.discount : null
          }
        />
        <FormLabel
          elementValue={prices.Fix_20}
          tariffName='Fix_20'
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title={`20 + 10 ${translations.ru.textTips.gbReg.toUpperCase()}`}
          text={null}
          valueMain={prices.Fix_20 + translations.ru.textTips.currency}
          valueSecondary={translations.ru.tariffes.singlePayment}
          isDiscounted={true}
          profitValue={
            value * 1 === prices.Fix_20
              ? translations.ru.tariffes.profit + '17%'
              : null
          }
          currentUserDiscount={
            value * 1 === prices.Fix_20 ? currentUser.discount : null
          }
        />
      </div>
    </TariffesTemplate>
  );
}
TariffFit.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handler: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string,
  setIsHidden: PropTypes.func.isRequired,
  setIsRecommendHidden: PropTypes.func,
  setIsGbHidden: PropTypes.func,
};

export default TariffFit;
