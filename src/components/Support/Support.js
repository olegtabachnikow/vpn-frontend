import React from 'react';
import './Support.css';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

function Support() {
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  const currentUser = useSelector((state) => state.currentUser);
  const isNoLimit = currentUser.tariff === 'NOLIMIT';
  return (
    <motion.section
      className='support'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--white)' />
      <BackButton
        text={translations.ru.textTips.myVpn}
        path='/my-vpn'
        currentClass='white'
        title={translations.ru.textTips.support}
      />
      <div className='support__text-container'>
        {isNoLimit ? (
          <>
            <p className='support__text'>
              {translations.ru.support.supportNolimitText}
            </p>
            <p className='support__text'>
              {translations.ru.support.supportToFaq}
              <span onClick={() => navigate('/faq')} className='support__link'>
                {translations.ru.support.faq}
              </span>
            </p>
          </>
        ) : (
          <>
            <p className='support__text'>
              {translations.ru.support.supportFreeText1}
            </p>
            <p className='support__text'>
              {translations.ru.support.supportFreeText2}
            </p>
          </>
        )}
      </div>
      <div className='support__button-box'>
        {!isNoLimit && (
          <>
            <AppButton
              text={translations.ru.appButton.allTariffes}
              currentClass='primary blue wide'
              handler={() => {
                setDirection(true);
                navigate('/tariffes');
              }}
            />
            <AppButton
              text={translations.ru.support.faq}
              currentClass='primary blue wide margin-top'
              handler={() => {
                setDirection(true);
                navigate('/faq');
              }}
            />
          </>
        )}
        <AppButton
          text={
            isNoLimit
              ? translations.ru.support.callOperator
              : translations.ru.support.supportChat
          }
          currentClass={`primary blue wide margin-top ${
            !isNoLimit ? 'support-disabled' : ''
          }`}
          handler={() => (window.location.href = 'https://t.me/getrobovpn_bot')}
        />
      </div>
    </motion.section>
  );
}

export default Support;
