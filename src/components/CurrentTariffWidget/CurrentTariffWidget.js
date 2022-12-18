import React from 'react';
import './CurrentTariffWidget.css';
import { useSelector } from 'react-redux';
import { parseTimestamp } from '../../utils/helpers';
import { translations } from '../../utils/translations/translations';

function CurrentTariffWidget() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <span className='current-tariff-widget'>
      Ваш тариф: {currentUser.tariff}
      <br />
      {currentUser.traffic === 0
        ? translations.ru.currentTariffWidgetEnd
        : currentUser.tariff === 'NOLIMIT'
        ? translations.ru.textTips.activeUntil +
          parseTimestamp(currentUser.endActiveDate)
        : translations.ru.textTips.enoughTo +
          parseTimestamp(currentUser.endDate)}
    </span>
  );
}

export default CurrentTariffWidget;
