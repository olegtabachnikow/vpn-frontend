import React from 'react';
import './Traffic.css';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import { useSelector } from 'react-redux';

function Traffic() {
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <section className='traffic'>
      <BackButton
        text='Мой VPN'
        path='/my-vpn'
        currentClass='back-button-traffic'
      />
      <div className='traffic__main'>
        <div className='traffic__main-content'>
          <span className='traffic__main_text'>
            Осталось до {currentUser.endDate}
          </span>
          <span className='traffic__main_value'>{currentUser.traffic}</span>
          <span className='traffic__main_text'>
            Кажестся, вам {!currentUser.trafficMonth && 'не'} хватит трафика до
            конца месяца
          </span>
        </div>
        <div className='traffic__outlook'>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              В среднем в день вы тратите
            </span>
            <span className='traffic__outlook-element-value'>0,5 гБ</span>
          </div>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              Ваше прогнозное потребление трафика в месяц
            </span>
            <span className='traffic__outlook-element-value'>
              {currentUser.trafficForecast}
            </span>
          </div>
        </div>
        <div className='traffic__secondary-content'>
          <AppButton
            text='Докупить Гб'
            currentClass='app-button-traffic-primary'
          />
          <div className='traffic__button-box'>
            <AppButton text='Заработать' currentClass='app-button-traffic' />
            <AppButton text='Сменить тариф' currentClass='app-button-traffic' />
          </div>
          <p className='traffic__tips'>
            Чтобы не волноваться — можете пополнить баланс, и нажать
            автосписание по текущему тарифу.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Traffic;
