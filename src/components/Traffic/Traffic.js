import React from 'react';
import './Traffic.css';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Traffic() {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const isNolimit = currentUser.tariff === 'NOLIMIT';
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
          <span className='traffic__main_value'>
            {isNolimit ? '∞' : currentUser.traffic}
          </span>
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
            <span className='traffic__outlook-element-value'>
              {currentUser.trafficMean}
            </span>
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
            currentClass={`app-button-traffic-primary ${
              !isNolimit ? 'disabled' : ''
            }`}
            handler={() => navigate('/tariffes/fit')}
          />
          <div className='traffic__button-box'>
            <AppButton
              text='Заработать'
              currentClass='app-button-traffic'
              handler={() => navigate('/referral')}
            />
            <AppButton
              text='Сменить тариф'
              currentClass='app-button-traffic'
              handler={() => navigate('/tariffes')}
            />
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
