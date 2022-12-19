import React from 'react';
import './Help.css';
import BackButton from '../BackButton/BackButton';
import MenuButton from '../MenuButton/MenuButton';
import valuesIcon from '../../images/values.png';
import possibilitiesIcon from '../../images/possibilities.png';
import newsIcon from '../../images/news.png';
import faqIcon from '../../images/faq.png';
import noResponceIcon from '../../images/noresponce.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { parseTimestamp } from '../../utils/helpers';
import { translations } from '../../utils/translations/translations';

function Help() {
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <motion.section
      className='help'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--blue)' />
      <BackButton
        path='/'
        text={translations.ru.appButton.mainMenu}
        currentClass='wide'
        title={translations.ru.burgerMenu.menuBtn3}
      />
      <div className='help__content'>
        <MenuButton
          handler={() => navigate('/values')}
          image={valuesIcon}
          currentClass='btn-our-values'
          title={translations.ru.textTips.ourValues}
          text={translations.ru.textTips.valuesText}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/possibilities')}
          image={possibilitiesIcon}
          currentClass='btn-our-possibilities'
          title={translations.ru.textTips.possibilities}
          text={translations.ru.textTips.possibilitiesText}
        />
        <div className='help__button-box'>
          <MenuButton
            handler={() => navigate('/news')}
            image={newsIcon}
            currentClass='btn-news'
            title={translations.ru.textTips.news}
            text={translations.ru.textTips.newsText}
          />
          <div className='help__button-news'></div>
          <MenuButton
            handler={() => navigate('/faq')}
            image={faqIcon}
            currentClass='btn-faq'
            title={translations.ru.textTips.faq}
            text={translations.ru.textTips.faqText}
          />
          <MenuButton
            handler={() => navigate('/message-us')}
            image={noResponceIcon}
            currentClass='btn-no-responce'
            title={translations.ru.textTips.noResponce}
            text={translations.ru.textTips.noResponceText}
          />
        </div>
        <MenuButton
          image={valuesIcon}
          currentClass='btn-my-tariff'
          title={translations.ru.subscription.myTariff}
          text={translations.ru.textTips.tariff + currentUser.tariff}
          addText={
            currentUser.tariff === 'NOLIMIT'
              ? translations.ru.textTips.activeUntil +
                parseTimestamp(currentUser.endActiveDate)
              : translations.ru.textTips.enoughTo +
                parseTimestamp(currentUser.endDate)
          }
          handler={() => navigate('/subscription')}
        />
      </div>
    </motion.section>
  );
}

export default Help;
