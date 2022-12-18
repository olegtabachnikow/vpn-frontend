import React from 'react';
import './Success.css';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import { translations } from '../../utils/translations/translations';

function Success() {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();
  return (
    <section className='success'>
      <p className='success__text'>
        {translations.ru.payment.paymentSuccessTitle}
      </p>
      <p className='success__text-secondary'>
        {translations.ru.payment.paymentSuccessText}
      </p>
      <div className='success__button-box'>
        <AppButton
          text={translations.ru.appButton.backToTelegram}
          currentClass='success__app-button success__app-button-secondary'
          handler={() => tg.close()}
        />
        <AppButton
          text={translations.ru.textTips.myVpn}
          currentClass='success__app-button margin-top'
          handler={() => navigate('/my-vpn')}
        />
      </div>
    </section>
  );
}

export default Success;
