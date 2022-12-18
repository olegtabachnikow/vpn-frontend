import React from 'react';
import './GiftSuccess.css';
import AppButton from '../AppButton/AppButton';
import { translations } from '../../utils/translations/translations';

function GiftSuccess() {
  const tg = window.Telegram.WebApp;
  return (
    <section className='gift-success'>
      {' '}
      <div className='gift-success__content'>
        <h1 className='gift-success__title'>
          {translations.ru.gift.giftSuccessTitle1}
          <br /> {translations.ru.gift.giftSuccessTitle2}
        </h1>
        <p className='gift-success__text'>
          {translations.ru.gift.giftSuccessText}
        </p>
      </div>
      <AppButton
        text={translations.ru.appButton.toTelegram}
        handler={() => tg.close()}
        currentClass='orange primary wide'
      />
    </section>
  );
}

export default GiftSuccess;
