import React from 'react';
import './TariffFit.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import FormLabel from '../FormLabel/FormLabel';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function TariffFit({ handler, value, setValue, error }) {
  const prices = useSelector((state) => state.prices);
  return (
    <TariffesTemplate
      currentClass='fit'
      buttonText='Оплата'
      handler={handler}
      error={error}
    >
      <div className='tariffes__content-fit'>
        <FormLabel
          elementValue={prices.Fix_5}
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title='5 + 10 ГБ'
          text={null}
          valueMain={`${prices.Fix_5} ₽`}
          valueSecondary='разовый платеж'
          isDiscounted={false}
        />
        <FormLabel
          elementValue={prices.Fix_10}
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title='10 + 10 ГБ'
          text={null}
          valueMain={`${prices.Fix_10} ₽`}
          valueSecondary='разовый платеж'
          isDiscounted={true}
          discountValue={
            value === '' + prices.Fix_10 ? 'Выгода 6%' : 'Рекомендуем'
          }
        />
        <FormLabel
          elementValue={prices.Fix_20}
          name='package'
          handler={(data) => setValue(data)}
          currentClass='tariff-item-fit'
          title='20 + 10 ГБ'
          text={null}
          valueMain={`${prices.Fix_20} ₽`}
          valueSecondary='разовый платеж'
          isDiscounted={true}
          discountValue={value === '' + prices.Fix_20 ? 'Выгода 17%' : null}
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
};

export default TariffFit;
