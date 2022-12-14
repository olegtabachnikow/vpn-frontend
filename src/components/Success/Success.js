import React from 'react';
import './Success.css';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';

function Success() {
  const tg = window.Telegram.WebApp;
  const navigate = useNavigate();
  return (
    <section className='success'>
      <p className='success__text'>
        Оплата прошла успешно! Теперь ты можешь настроить свой впн и следить за{' '}
        <u>оставшимся трафиком</u> в разделе <u>«мой впн»</u>.
      </p>
      <p className='success__text-secondary'>
        Ты можешь довериться нашему <u>алгоритму настройки</u>, или все сделать
        самостоятельно.
      </p>
      <div className='success__button-box'>
        <AppButton
          text='Назад в Telegram'
          currentClass='success__app-button success__app-button-secondary'
          handler={() => tg.close()}
        />
        <AppButton
          text='Мой ВПН'
          currentClass='success__app-button margin-top'
          handler={() => navigate('/my-vpn')}
        />
      </div>
    </section>
  );
}

export default Success;
