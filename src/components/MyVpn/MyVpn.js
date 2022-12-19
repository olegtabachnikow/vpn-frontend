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
import { translations } from '../../utils/translations/translations';

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
      <BurgerMenu color='var(--blue)' />
      <BackButton
        path='/'
        text={translations.ru.appButton.mainMenu}
        currentClass=''
        title={translations.ru.textTips.myVpn}
      />
      <div className='my-vpn__button-container'>
        <MenuButton
          handler={() => navigate('/balance')}
          image={balanceIcon}
          currentClass='btn-balance'
          title={translations.ru.textTips.balance}
          text={translations.ru.textTips.balanceText}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/referral')}
          image={referralIcon}
          currentClass='btn-referrals'
          title={translations.ru.textTips.referral}
          text={translations.ru.textTips.referralBtnText}
          addText={null}
        />
        <MenuButton
          image={trafficIcon}
          handler={() => navigate('/traffic')}
          currentClass='btn-traffic'
          title={translations.ru.textTips.traffic}
          text={translations.ru.textTips.trafficText}
          addText={null}
        />
        <MenuButton
          image={optionsIcon}
          handler={() => navigate('/options')}
          currentClass='btn-options'
          title={translations.ru.textTips.options}
          text={translations.ru.textTips.optionsText}
          addText={null}
        />
        <MenuButton
          image={supportIcon}
          handler={() => navigate('/support')}
          currentClass='btn-support'
          title={translations.ru.textTips.support}
          text={translations.ru.textTips.supportText}
          addText={null}
        />
      </div>
      <MenuButton
        image={happySmile}
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
    </motion.section>
  );
}

export default MyVpn;
