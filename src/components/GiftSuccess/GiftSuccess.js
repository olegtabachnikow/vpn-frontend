import React from 'react';
import './GiftSuccess.css';
import AppButton from '../AppButton/AppButton';

function GiftSuccess() {
  const tg = window.Telegram.WebApp;
  return (
    <section className='gift-success'>
      {' '}
      <AppButton
        text='Перейти в Telegram'
        handler={() => tg.close()}
        currentClass='orange primary'
      />
    </section>
  );
}

export default GiftSuccess;
