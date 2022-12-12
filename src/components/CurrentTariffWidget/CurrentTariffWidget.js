import React from 'react';
import './CurrentTariffWidget.css';
import { useSelector } from 'react-redux';
import { parseTimestamp } from '../../utils/helpers';

function CurrentTariffWidget() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <span className='current-tariff-widget'>
      Ваш тариф: {currentUser.tariff}
      <br />
      {currentUser.traffic === 0
        ? 'Ваш трафик закончился'
        : currentUser.tariff === 'NOLIMIT'
        ? 'Активен до ' + parseTimestamp(currentUser.endActiveDate)
        : 'Хватит до ' + parseTimestamp(currentUser.endDate)}
    </span>
  );
}

export default CurrentTariffWidget;
