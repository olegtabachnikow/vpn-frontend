import React from 'react';
import './BurgerMenuNav.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import roboLogo from '../../images/intro_smile_0.svg';
import { setDirection } from '../../redux/actions/actions';
import { parseTimestamp } from '../../utils/helpers';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function BurgerMenuNav({ toggleOpen, setIsActive }) {
  const navigate = useNavigate();
  function handleClose(path) {
    setDirection(true);
    setIsActive(false);
    toggleOpen();
    setTimeout(navigate, 700, path);
  }
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <motion.ul className='burger-menu-nav' variants={variants}>
      <motion.div variants={itemVariants} className='burger-item__user'>
        <div className='burger-menu-nav__userdata'>
          <div className='burger-menu-nav__current-user'>
            <span>{currentUser.userName}</span>
            <img className='burger-menu-nav__image' src={roboLogo} alt='robo' />
          </div>
          <span className='burger-menu-nav__text'>
            {translations.ru.textTips.tariff + currentUser.tariff}
          </span>
          <span className='burger-menu-nav__text'>
            {currentUser.tariff === 'NOLIMIT'
              ? translations.ru.textTips.activeUntil +
                parseTimestamp(currentUser.endDate)
              : translations.ru.textTips.enoughTo +
                parseTimestamp(currentUser.endDate)}
          </span>
          <span className='burger-menu-nav__text'>
            {translations.ru.textTips.currentBalance +
              currentUser.balance +
              translations.ru.textTips.currencyText}
          </span>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <span className='burger__button-title'>
          {translations.ru.burgerMenu.menuTitle}
        </span>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <button
          onClick={() => handleClose('/')}
          className='burger__navigate-button'
        >
          {translations.ru.burgerMenu.menuBtn1}
          <span className='burger__button-corner' />
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <button
          onClick={() => handleClose('/my-vpn')}
          className='burger__navigate-button'
        >
          {translations.ru.burgerMenu.menuBtn2}
          <span className='burger__button-corner' />
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <button
          onClick={() => handleClose('/help')}
          className='burger__navigate-button'
        >
          {translations.ru.burgerMenu.menuBtn3}
          <span className='burger__button-corner' />
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        {currentUser.tariff === 'FREE' ? (
          <span className='burger-menu-nav__support-text'>
            {translations.ru.burgerMenu.menuFaqText1}
            <br /> {translations.ru.burgerMenu.menuFaqText2}
            <span
              onClick={() => {
                toggleOpen();
                setIsActive(false);
                navigate('/faq');
              }}
              className='burger-menu-nav__link'
            >
              {translations.ru.burgerMenu.menuFaqText3}
            </span>
          </span>
        ) : (
          <span className='burger-menu-nav__support-text'>
            {translations.ru.burgerMenu.menuSupportTip1}
            <br /> {translations.ru.burgerMenu.menuSupportTip2}
            <span
              onClick={() => {
                toggleOpen();
                setIsActive(false);
                window.open('mailto:care@getrobovpn.com');
              }}
              className='burger-menu-nav__link'
            >
              care@getrobovpn.com.
            </span>
          </span>
        )}
      </motion.div>
    </motion.ul>
  );
}

BurgerMenuNav.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  setIsActive: PropTypes.func.isRequired,
};
export default BurgerMenuNav;
