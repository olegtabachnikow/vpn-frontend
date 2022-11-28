import React from 'react';
import './Subscription.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Subscription() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const isNolimit = currentUser.tariff === 'NOLIMIT';
  const isFree = currentUser.tariff === 'FREE';
  function getDate() {
    return currentUser.endDate.slice(0, 6) + currentUser.endDate.slice(8, 10);
  }
  function getText() {
    switch (currentUser.tariff) {
      case 'FREE':
        return 'До 10 Гб каждый месяц бесплатно';
      case 'FIT':
        return '10 ГБ бесплатно + оплата за ГБ';
      case 'NOLIMIT':
        return 'Без ограничений';
      default:
        return null;
    }
  }
  return (
    <section className='subscription'>
      <BackButton text='Назад' path={-1} currentClass='white' />
      <div className='subscription__content'>
        <h2 className='subscription__subtitle'>Ваш тариф:</h2>
        <h1 className='subscription__title'>{currentUser.tariff}</h1>
        <p className='subscription__text'>{getText()}</p>
        <div className={`subscription__widget-box ${isNolimit && 'centered'}`}>
          <div className='subscription__widget'>
            <span className='subscription__widget-text'>
              {isNolimit ? 'Активен до' : 'Рассчетная дата окончания тарифа'}
            </span>
            <span className='subscription__widget-value'>{getDate()}</span>
          </div>
          <div
            className={`subscription__widget ${
              isNolimit && 'subscription__widget_disabled'
            }`}
          >
            <span className='subscription__widget-text'>
              Алгоритм робо думает, что трафика{' '}
              <b>{!currentUser.trafficMonth && 'не'} хватит</b> до следующих
              бесплатных 10 Гб
            </span>
          </div>
        </div>
        <div
          className={`subscription__widget_secondary ${isNolimit && 'hidden'}`}
        >
          {isFree ? (
            <span className='subscription__widget-text_secondary'>
              В следующем месяце вам будет начислено <b>только 5 Гб</b>{' '}
              бесплатного трафика. Мы начисляем 10 начиная со второго месяца
              тем, кто делает хотя бы одну покупку.
            </span>
          ) : (
            <span className='subscription__widget-text_secondary'>
              В следующем месяце вам будет{' '}
              <b>начислено 10 Гб бесплатного трафика. </b>
              Спасибо, что пользуетесь robo и докупаете Гб, когда не хватает
              бесплатного трафика.
            </span>
          )}
        </div>
      </div>
      <div className='subscription__button-box'>
        {isNolimit ? (
          <>
            <AppButton
              text='Продлить тариф'
              handler={() => navigate('/tariffes/nolimit')}
              currentClass='primary dark-blue margin-bottom wide'
            />
            <AppButton
              text='Поделиться'
              handler={() => navigate('/gift')}
              currentClass='secondary white wide'
            />
          </>
        ) : (
          <>
            <AppButton
              text='Докупить гБ'
              handler={() => {
                currentUser.activeUser
                  ? navigate('/tariffes/fit')
                  : navigate('/tariffes');
              }}
              currentClass='primary dark-blue margin-bottom wide'
            />
            <AppButton
              text='Мой трафик'
              handler={() => navigate('/traffic')}
              currentClass='secondary white wide'
            />
          </>
        )}
      </div>
    </section>
  );
}

export default Subscription;
