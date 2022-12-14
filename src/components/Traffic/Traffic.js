import React from 'react';
import './Traffic.css';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { parseTimestamp } from '../../utils/helpers';

function Traffic() {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const isNolimit = currentUser.tariff === 'NOLIMIT';
  const direction = useSelector((state) => state.direction);

  return (
    <motion.section
      className='traffic'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='#fff' />
      <BackButton text='Назад' path={-1} currentClass='white' title='Трафик' />
      <div className='traffic__main'>
        {isNolimit ? (
          <div className='traffic__main-content'>
            <span className='traffic__main_text'>
              Активен до {parseTimestamp(currentUser.endActiveDate)}
            </span>
            <span className='traffic__main_value nolimit'>NOLIMIT</span>
            <span className='traffic__main_text'>
              Все под контролем, потребляйте сколько хотите, у вас безлимит
            </span>
          </div>
        ) : (
          <div className='traffic__main-content'>
            <span className='traffic__main_text'>
              Осталось до {parseTimestamp(currentUser.endDate)}
            </span>
            <span className='traffic__main_value'>
              {currentUser.traffic} гБ
            </span>
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
              {currentUser.trafficPerDay} гБ
            </span>
          </div>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              Ваше прогнозное потребление трафика в месяц
            </span>
            <span className='traffic__outlook-element-value'>
              {currentUser.trafficForecast} гБ
            </span>
          </div>
        </div>
      </div>
      <div className='traffic__secondary-content'>
        {isNolimit ? (
          <AppButton
            text='Продлить тариф'
            currentClass='primary rose wide margin-bottom'
            handler={() => {
              setDirection(true);
              navigate('/tariffes/nolimit');
            }}
          />
        ) : (
          <>
            <AppButton
              text='Пополнить Гб'
              currentClass={`primary rose wide margin-bottom ${
                isNolimit ? 'disabled' : ''
              }`}
              handler={() => {
                setDirection(true);
                currentUser.activeUser
                  ? navigate('/tariffes/fit')
                  : navigate('/tariffes');
              }}
            />
            <div className='traffic__button-box'>
              <AppButton
                text='Заработать'
                currentClass='secondary white narrow'
                handler={() => {
                  setDirection(true);
                  navigate('/referral');
                }}
              />
              <AppButton
                text='Сменить тариф'
                currentClass='secondary white narrow'
                handler={() => {
                  setDirection(true);
                  navigate('/tariffes');
                }}
              />
            </div>
          </>
        )}
        <p className='traffic__tips'>
          Чтобы не волноваться — можете{' '}
          <span
            onClick={() => {
              setDirection(true);
              navigate('/balance');
            }}
            className='traffic__link'
          >
            пополнить баланс
          </span>
          , и нажать автосписание по текущему тарифу.
        </p>
      </div>
    </motion.section>
  );
}

export default Traffic;
