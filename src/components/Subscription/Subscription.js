import React from 'react';
import './Subscription.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function Subscription() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const isNolimit = currentUser.tariff === 'NOLIMIT';
  const isFree = currentUser.tariff === 'FREE';
  const direction = useSelector((state) => state.direction);
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
    <motion.section
      className='subscription'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='#fff' />
      <BackButton
        text='Назад'
        path={-1}
        currentClass='white'
        title='Мой тариф'
      />
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
              handler={() => {
                setDirection(true);
                navigate('/tariffes/nolimit');
              }}
              currentClass='primary dark-blue margin-bottom wide'
            />
            <AppButton
              text='Подарить Robo'
              handler={() => {
                setDirection(true);
                navigate('/gift');
              }}
              currentClass='secondary white wide'
            />
          </>
        ) : (
          <>
            <AppButton
              text='Пополнить гБ'
              handler={() => {
                setDirection(true);
                currentUser.activeUser
                  ? navigate('/tariffes/fit')
                  : navigate('/tariffes');
              }}
              currentClass='primary dark-blue margin-bottom wide'
            />
            <AppButton
              text='Мой трафик'
              handler={() => {
                setDirection(true);
                navigate('/traffic');
              }}
              currentClass='secondary white wide'
            />
          </>
        )}
      </div>
    </motion.section>
  );
}

export default Subscription;
