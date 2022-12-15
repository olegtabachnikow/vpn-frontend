import React from 'react';
import './GiftSuccess.css';
import AppButton from '../AppButton/AppButton';

function GiftSuccess() {
  const tg = window.Telegram.WebApp;
  return (
    <section className='gift-success'>
      {' '}
      <div className='gift-success__content'>
        <h1 className='gift-success__title'>
          Ура, все готово! Подарок запакован
          <br /> — дело за малым.
        </h1>
        <p className='gift-success__text'>
          Перейдите в Telegram с robo — перешлите подарок нужному человеку.
        </p>
      </div>
      <AppButton
        text='Перейти в Telegram'
        handler={() => tg.close()}
        currentClass='orange primary wide'
      />
    </section>
  );
}

export default GiftSuccess;
