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
      <BackButton text='Мой VPN' path='/my-vpn' currentClass='white' />
      <div className='traffic__main'>
        {isNolimit ? (
          <div className='traffic__main-content'>
            <span className='traffic__main_text'>
              Активен до {currentUser.endDate}
            </span>
            <span className='traffic__main_value nolimit'>NO LIMIT</span>
            <span className='traffic__main_text'>
              Все под контролем, потребляйте сколько хотите, у вас безлимит
            </span>
          </div>
        ) : (
          <div className='traffic__main-content'>
            <span className='traffic__main_text'>
              Осталось до {currentUser.endDate}
            </span>
            <span className='traffic__main_value'>{currentUser.traffic}</span>
            <span className='traffic__main_text'>
              Кажестся, вам {!currentUser.trafficMonth && 'не'} хватит трафика
              до конца месяца
            </span>
          </div>
        )}
        <div className='traffic__outlook'>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              В среднем в день вы тратите
            </span>
            <span className='traffic__outlook-element-value'>
              {currentUser.trafficPerDay}
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
          {currentUser.tariff === 'NOLIMIT' ? (
            <AppButton
              text='Продлить тариф'
              currentClass='primary rose wide margin-bottom'
              handler={() => navigate('/tariffes/nolimit')}
            />
          ) : (
            <>
              <AppButton
                text='Докупить Гб'
                currentClass={`primary rose wide margin-bottom ${
                  isNolimit ? 'disabled' : ''
                }`}
                handler={() => {
                  currentUser.activeUser
                    ? navigate('/tariffes/fit')
                    : navigate('/tariffes');
                }}
              />
              <div className='traffic__button-box'>
                <AppButton
                  text='Заработать'
                  currentClass='secondary white narrow'
                  handler={() => navigate('/referral')}
                />
                <AppButton
                  text='Сменить тариф'
                  currentClass='secondary white narrow'
                  handler={() => navigate('/tariffes')}
                />
              </div>
            </>
          )}
          <p className='traffic__tips'>
            Чтобы не волноваться — можете{' '}
            <span
              onClick={() => navigate('/balance')}
              className='traffic__link'
            >
              пополнить баланс
            </span>
            , и нажать автосписание по текущему тарифу.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Traffic;
