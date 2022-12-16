import React from 'react';
import './TariffNolimit.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import FormLabel from '../FormLabel/FormLabel';
import { useSelector } from 'react-redux';
import { parseTimestamp } from '../../utils/helpers';
import PropTypes from 'prop-types';

function TariffNolimit({ handler, error, value, setValue, setIsHidden }) {
  const currentUser = useSelector((state) => state.currentUser);
  const prices = useSelector((state) => state.prices);

  function addMonths(date, count) {
    let newDate = new Date(date);
    return newDate.setMonth(newDate.getMonth() + count);
  }
  const getProfitValue = (main, secondary, count) =>
    main * count - secondary * count;
  const isNolimitOneChecked = value * 1 === prices.Nolimit_1;
  const isNolimitThreeChecked = value * 1 === prices.Nolimit_3 * 3;
  const isNolimitYearChecked = value * 1 === prices.Nolimit_12 * 12;

  function getTotalDiscountedValue(plan, months) {
    if (currentUser.discount) {
      return Math.round(
        plan * months - ((plan * months) / 100) * currentUser.discount
      );
    } else {
      return Math.round(plan * months);
    }
  }

  return (
    <TariffesTemplate
      currentClass='nolimit'
      buttonText='Оплата'
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
          title='Месяц'
          text={
            isNolimitOneChecked
              ? `Забудь про ограничения до ${parseTimestamp(
                  addMonths(currentUser.endDate, 1)
                )}`
              : null
          }
          valueMain={`${prices.Nolimit_1} ₽/мес`}
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
          title='3 месяца'
          text={
            isNolimitThreeChecked
              ? `Забудь про ограничения до ${parseTimestamp(
                  addMonths(currentUser.endDate, 3)
                )}`
              : null
          }
          valueMain={`${prices.Nolimit_3} ₽/мес`}
          valueSecondary={
            isNolimitThreeChecked
              ? `${getTotalDiscountedValue(prices.Nolimit_3, 3)}₽ всего`
              : null
          }
          isDiscounted={true}
          profitValue={
            isNolimitThreeChecked
              ? `Выгода ${getProfitValue(
                  prices.Nolimit_1,
                  prices.Nolimit_3,
                  3
                )}₽`
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
          title='12 месяцев'
          text={
            isNolimitYearChecked ? 'Год матрицы без ограничений, Нео' : null
          }
          valueMain={`${prices.Nolimit_12} ₽/мес`}
          valueSecondary={
            isNolimitYearChecked
              ? `${getTotalDiscountedValue(prices.Nolimit_12, 12)}₽ всего`
              : null
          }
          isDiscounted={true}
          profitValue={
            isNolimitYearChecked
              ? `Выгода ${getProfitValue(
                  prices.Nolimit_1,
                  prices.Nolimit_12,
                  12
                )}₽`
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
