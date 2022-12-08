import React from 'react';
import './BurgerMenuNav.css';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import roboLogo from '../../images/intro_smile_0.svg';
import { setDirection } from '../../redux/actions/actions';
import { parseTimestamp } from '../../utils/helpers';

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
            Тариф: {currentUser.tariff}
          </span>
          <span className='burger-menu-nav__text'>
            Активен до: {parseTimestamp(currentUser.endDate)}
          </span>
          <span className='burger-menu-nav__text'>
            Текущий баланс: {currentUser.balance} рублей
          </span>
        </div>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <span className='burger__button-title'>Основные разделы</span>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <button
          onClick={() => handleClose('/')}
          className='burger__navigate-button'
        >
          Главное меню
          <span className='burger__button-corner' />
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <button
          onClick={() => handleClose('/my-vpn')}
          className='burger__navigate-button'
        >
          Мой VPN
          <span className='burger__button-corner' />
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        <button
          onClick={() => handleClose('/help')}
          className='burger__navigate-button'
        >
          Мне не понятно
          <span className='burger__button-corner' />
        </button>
      </motion.div>
      <motion.div variants={itemVariants} className='burger-item'>
        {currentUser.tariff === 'FREE' ? (
          <span className='burger-menu-nav__support-text'>
            Ответы на часто задаваемые
            <br /> вопросы в разделе{' '}
            <span
              onClick={() => {
                toggleOpen();
                setIsActive(false);
                navigate('/faq');
              }}
              className='burger-menu-nav__link'
            >
              FAQ.
            </span>
          </span>
        ) : (
          <span className='burger-menu-nav__support-text'>
            Вы всегда можете написать нам
            <br /> на почту{' '}
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

export default BurgerMenuNav;
