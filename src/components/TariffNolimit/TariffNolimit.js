import React from 'react';
import './TariffNolimit.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import FormLabel from '../FormLabel/FormLabel';
import { useSelector } from 'react-redux';
import {
  parseTimestamp,
  getProfitValue,
  getTotalDiscountedValue,
} from '../../utils/helpers';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

function TariffNolimit({ handler, error, value, setValue, setIsHidden }) {
  const currentUser = useSelector((state) => state.currentUser);
  const prices = useSelector((state) => state.prices);

  function addMonths(date, count) {
    let newDate = new Date(date);
    return newDate.setMonth(newDate.getMonth() + count);
  }

  const isNolimitOneChecked = value * 1 === prices.Nolimit_1;
  const isNolimitThreeChecked = value * 1 === prices.Nolimit_3 * 3;
  const isNolimitYearChecked = value * 1 === prices.Nolimit_12 * 12;

  return (
    <TariffesTemplate
      currentClass='nolimit'
      buttonText={translations.ru.appButton.payment}
      handler={handler}
      error={error}
      setIsHidden={setIsHidden}
    >
      <div className='tariffes__content-nolimit'>
        <FormLabel
          elementValue={prices.Nolimit_1}
          name='package'
          handler={(data) => setValue(data)}
          currentClass={`tariff-item-nolimit ${
            isNolimitOneChecked && 'tariff-plan-checked'
          }`}
          title={translations.ru.tariffes.month}
          text={
            isNolimitOneChecked
              ? translations.ru.tariffes.month1and3Text +
                parseTimestamp(addMonths(currentUser.endDate, 1))
              : null
          }
          valueMain={prices.Nolimit_1 + translations.ru.textTips.currencyMonth}
          isDiscounted={currentUser.discount ? true : false}
          currentUserDiscount={
            isNolimitOneChecked ? currentUser.discount : null
          }
        />
        <FormLabel
          elementValue={prices.Nolimit_3}
          name='package'
          handler={(data) => setValue((data * 3).toString())}
          currentClass={`tariff-item-nolimit ${
            isNolimitThreeChecked && 'tariff-plan-checked'
          }`}
          title={translations.ru.tariffes.month3}
          text={
            isNolimitThreeChecked
              ? translations.ru.tariffes.month1and3Text +
                parseTimestamp(addMonths(currentUser.endDate, 3))
              : null
          }
          valueMain={prices.Nolimit_3 + translations.ru.textTips.currencyMonth}
          valueSecondary={
            isNolimitThreeChecked
              ? getTotalDiscountedValue(
                  prices.Nolimit_3,
                  3,
                  currentUser.discount
                ) + translations.ru.textTips.currencyTotal
              : null
          }
          isDiscounted={true}
          profitValue={
            isNolimitThreeChecked
              ? translations.ru.tariffes.profit +
                getProfitValue(prices.Nolimit_1, prices.Nolimit_3, 3) +
                translations.ru.textTips.currency
              : null
          }
          currentUserDiscount={
            isNolimitThreeChecked ? currentUser.discount : null
          }
        />
        <FormLabel
          elementValue={prices.Nolimit_12}
          name='package'
          handler={(data) => setValue((data * 12).toString())}
          currentClass={`tariff-item-nolimit ${
            isNolimitYearChecked && 'tariff-plan-checked'
          }`}
          title={translations.ru.tariffes.month12}
          text={
            isNolimitYearChecked ? translations.ru.tariffes.month12Text : null
          }
          valueMain={prices.Nolimit_12 + translations.ru.textTips.currencyMonth}
          valueSecondary={
            isNolimitYearChecked
              ? getTotalDiscountedValue(
                  prices.Nolimit_12,
                  12,
                  currentUser.discount
                ) + translations.ru.textTips.currencyTotal
              : null
          }
          isDiscounted={true}
          profitValue={
            isNolimitYearChecked
              ? translations.ru.tariffes.profit +
                getProfitValue(prices.Nolimit_1, prices.Nolimit_12, 12) +
                translations.ru.textTips.currency
              : null
          }
          currentUserDiscount={
            isNolimitYearChecked ? currentUser.discount : null
          }
        />
      </div>
    </TariffesTemplate>
  );
}
TariffNolimit.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  handler: PropTypes.func.isRequired,
  setValue: PropTypes.func.isRequired,
  setIsHidden: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default TariffNolimit;
