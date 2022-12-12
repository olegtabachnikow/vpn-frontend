import React from 'react';
import './MyVpn.css';
import MenuButton from '../MenuButton/MenuButton';
import BackButton from '../BackButton/BackButton';
import balanceIcon from '../../images/balance.png';
import trafficIcon from '../../images/traffic.png';
import referralIcon from '../../images/referral.png';
import supportIcon from '../../images/support.png';
import happySmile from '../../images/values.png';
import optionsIcon from '../../images/options-icon.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { parseTimestamp } from '../../utils/helpers';

function MyVpn() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  return (
    <motion.section
      className='my-vpn'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.2, delay: 0.2 },
      }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='#348ff3' />
      <BackButton
        path='/'
        text='Главное меню'
        currentClass=''
        title='Мой VPN'
      />
      <div className='my-vpn__button-container'>
        <MenuButton
          handler={() => navigate('/balance')}
          image={balanceIcon}
          currentClass='btn-balance'
          title='Баланс'
          text={'Пополнить или потратить'}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/referral')}
          image={referralIcon}
          currentClass='btn-referrals'
          title='Реферальная
          программа'
          text={'10+10 Гб'}
          addText={null}
        />
        <MenuButton
          image={trafficIcon}
          handler={() => navigate('/traffic')}
          currentClass='btn-traffic'
          title='Трафик'
          text={'Оставшиеся Гб'}
          addText={null}
        />
        <MenuButton
          image={optionsIcon}
          handler={() => navigate('/options')}
          currentClass='btn-options'
          title='Настроить'
          text={'Настроить вручную'}
          addText={null}
        />
        <MenuButton
          image={supportIcon}
          handler={() => navigate('/support')}
          currentClass='btn-support'
          title='Саппорт'
          text={'Напишите нам'}
          addText={null}
        />
      </div>
      <MenuButton
        image={happySmile}
        currentClass='btn-my-tariff'
        title='Мой тариф'
        text={`Тариф: ${currentUser.tariff}`}
        addText={
          currentUser.tariff === 'NOLIMIT'
            ? 'Активен до ' + parseTimestamp(currentUser.endActiveDate)
            : 'Хватит до ' + parseTimestamp(currentUser.endDate)
        }
        handler={() => navigate('/subscription')}
      />
    </motion.section>
  );
}

export default MyVpn;
