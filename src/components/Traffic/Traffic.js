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
import { translations } from '../../utils/translations/translations';

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
      <BurgerMenu color='var(--white)' />
      <BackButton text='Назад' path={-1} currentClass='white' title='Трафик' />
      <div className='traffic__main'>
        {isNolimit ? (
          <div className='traffic__main-content'>
            <span className='traffic__main_text'>
              {translations.ru.textTips.activeUntil +
                parseTimestamp(currentUser.endActiveDate)}
            </span>
            <span className='traffic__main_value nolimit'>NOLIMIT</span>
            <span className='traffic__main_text'>
              {translations.ru.traffic.nolimitTip}
            </span>
          </div>
        ) : (
          <div className='traffic__main-content'>
            <span className='traffic__main_text'>
              {translations.ru.textTips.trafficUpdateDate +
                parseTimestamp(currentUser.endDate)}
            </span>
            <span className='traffic__main_value'>
              {currentUser.traffic + translations.ru.textTips.gb}
            </span>
            <span className='traffic__main_text'>
              {translations.ru.traffic.seemsLike}
              {!currentUser.trafficMonth && translations.ru.textTips.not}
              {translations.ru.traffic.enoghTraffic}
            </span>
          </div>
        )}
        <div className='traffic__outlook'>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              {translations.ru.traffic.averagePerDay}
            </span>
            <span className='traffic__outlook-element-value'>
              {currentUser.trafficMean + translations.ru.textTips.gb}
            </span>
          </div>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              {translations.ru.traffic.forecast}
            </span>
            <span className='traffic__outlook-element-value'>
              {currentUser.trafficForecast + translations.ru.textTips.gb}
            </span>
          </div>
        </div>
      </div>
      <div className='traffic__secondary-content'>
        {isNolimit ? (
          <AppButton
            text={translations.ru.appButton.continueTariff}
            currentClass='primary rose wide margin-bottom'
            handler={() => {
              setDirection(true);
              navigate('/tariffes/nolimit');
            }}
          />
        ) : (
          <>
            <AppButton
              text={translations.ru.appButton.addGb}
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
                text={translations.ru.appButton.earn}
                currentClass='secondary white narrow'
                handler={() => {
                  setDirection(true);
                  navigate('/referral');
                }}
              />
              <AppButton
                text={translations.ru.appButton.changeTariff}
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
          {translations.ru.traffic.dontWorry}
          <span
            onClick={() => {
              setDirection(true);
              navigate('/balance');
            }}
            className='traffic__link'
          >
            {translations.ru.traffic.addBalance}
          </span>
          {translations.ru.traffic.startAutoCharge}
        </p>
      </div>
    </motion.section>
  );
}

export default Traffic;
