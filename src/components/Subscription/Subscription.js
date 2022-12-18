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
import { parseTimestamp } from '../../utils/helpers';
import { translations } from '../../utils/translations/translations';

function Subscription() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const isNolimit = currentUser.tariff === 'NOLIMIT';
  const isFree = currentUser.tariff === 'FREE';
  const direction = useSelector((state) => state.direction);
  const monthGb = currentUser.extra5gb ? 10 : 5;

  function getText() {
    switch (currentUser.tariff) {
      case 'FREE':
        return translations.ru.subscription.textFree;
      case 'FIT':
        return translations.ru.subscription.textFit;
      case 'NOLIMIT':
        return translations.ru.subscription.textNolimit;
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
      <BurgerMenu color='var(--white)' />
      <BackButton
        text={translations.ru.backButton.back}
        path={-1}
        currentClass='white'
        title={translations.ru.subscription.myTariff}
      />
      <div className='subscription__content'>
        <h2 className='subscription__subtitle'>
          {translations.ru.subscription.yourTariff}
        </h2>
        <h1 className='subscription__title'>{currentUser.tariff}</h1>
        <p className='subscription__text'>{getText()}</p>
        <div className={`subscription__widget-box ${isNolimit && 'centered'}`}>
          <div className='subscription__widget'>
            <span className='subscription__widget-text'>
              {isNolimit
                ? translations.ru.textTips.activeUntil
                : translations.ru.textTips.tariffEndDate}
            </span>
            <span className='subscription__widget-value'>
              {isNolimit
                ? parseTimestamp(currentUser.endActiveDate)
                : parseTimestamp(currentUser.endDate)}
            </span>
          </div>
          <div
            className={`subscription__widget ${
              isNolimit && 'subscription__widget_disabled'
            }`}
          >
            <span className='subscription__widget-text'>
              {translations.ru.subscription.algoRobo}
              <b>
                {!currentUser.trafficMonth && translations.ru.textTips.not}
                {translations.ru.textTips.enough}
              </b>{' '}
              {translations.ru.subscription.algoText +
                monthGb +
                translations.ru.textTips.gbReg}
            </span>
          </div>
        </div>
        <div
          className={`subscription__widget_secondary ${isNolimit && 'hidden'}`}
        >
          {isFree ? (
            <span className='subscription__widget-text_secondary'>
              {translations.ru.subscription.thisMonth}
              <b>{monthGb + translations.ru.textTips.gbReg}</b>
              {translations.ru.subscription.thisMonthEnd}
            </span>
          ) : (
            <span className='subscription__widget-text_secondary'>
              {translations.ru.subscription.toYou}
              <b>
                {translations.ru.subscription.added +
                  monthGb +
                  translations.ru.subscription.amountFreeTraff}
              </b>
              {translations.ru.subscription.restText}
            </span>
          )}
        </div>
      </div>
      <div className='subscription__button-box'>
        {isNolimit ? (
          <>
            <AppButton
              text={translations.ru.appButton.continueTariff}
              handler={() => {
                setDirection(true);
                navigate('/tariffes/nolimit');
              }}
              currentClass='primary dark-blue margin-bottom wide'
            />
            <AppButton
              text={translations.ru.appButton.giftRobo}
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
              text={translations.ru.appButton.addGb}
              handler={() => {
                setDirection(true);
                currentUser.activeUser
                  ? navigate('/tariffes/fit')
                  : navigate('/tariffes');
              }}
              currentClass='primary dark-blue margin-bottom wide'
            />
            <AppButton
              text={translations.ru.appButton.myTraffic}
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
