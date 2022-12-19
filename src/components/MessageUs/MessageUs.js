import React from 'react';
import './MessageUs.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { useSelector } from 'react-redux';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

function MessageUs() {
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  return (
    <motion.section
      className='message-us'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--white)' />
      <BackButton
        path='/help'
        text={translations.ru.backButton.back}
        currentClass='white'
        title={translations.ru.textTips.supportText}
      />
      <p className='message-us__text_main'>{translations.ru.messageUs.title}</p>
      <p className='message-us__text_secondary'>
        {translations.ru.messageUs.text}
        <span
          onClick={() => window.open('mailto:care@getrobovpn.com')}
          className='message-us__link'
        >
          care@getrobovpn.com.
        </span>
      </p>
      <AppButton
        text={translations.ru.appButton.allTariffes}
        handler={() => {
          setDirection(true);
          navigate('/tariffes');
        }}
        currentClass='orange primary'
      />
    </motion.section>
  );
}

export default MessageUs;
