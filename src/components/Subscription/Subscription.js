import React from 'react';
import './Subscription.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Subscription() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  function getDate() {
    return currentUser.endDate.slice(0, 6) + currentUser.endDate.slice(8, 10);
  }
  function getText() {
    switch (currentUser.tariff) {
      case 'FREE':
        return 'До 10 Гб каждый месяц бесплатно';
      case 'FIX':
        return '10 ГБ бесплатно + оплата за ГБ';
      case 'NOLIMIT':
        return 'Без ограничений';
      default:
        return null;
    }
  }
  return (
    <section className='subscription'>
      <BackButton
        text='Назад'
        path={-1}
        currentClass='back-button-subscription'
      />
      <div className='subscription__content'>
        <h2 className='subscription__subtitle'>Ваш тариф:</h2>
        <h1 className='subscription__title'>{currentUser.tariff}</h1>
        <p className='subscription__text'>{getText()}</p>
        <div className='subscription__widget-box'>
          <div className='subscription__widget'>
            <span className='subscription__widget-text'>
              Рассчетная дата окончания тарифа
            </span>
            <span className='subscription__widget-value'>{getDate()}</span>
          </div>
          <div
            className={`subscription__widget ${
              currentUser.tariff === 'NOLIMIT' &&
              'subscription__widget_disabled'
            }`}
          >
            <span className='subscription__widget-text'>
              Алгоритм робо думает, что трафика{' '}
              <b>{!currentUser.trafficMonth && 'не'} хватит</b> до следующих
              бесплатных 10 Гб
            </span>
          </div>
        </div>
      </div>
      <div className='subscription__button-box'>
        <AppButton
          text='Докупить гБ'
          handler={() => null}
          currentClass='app-button-subscription_main'
        />
        <AppButton
          text='Мой трафик'
          handler={() => navigate('/traffic')}
          currentClass='app-button-subscription_secondary'
        />
      </div>
    </section>
  );
}

export default Subscription;
