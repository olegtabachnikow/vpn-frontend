import React from 'react';
import './Main.css';
import MenuButton from '../MenuButton/MenuButton';
import glassesIcon from '../../images/smile-min.png';
import moneyIcon from '../../images/winged-money-min.png';
import loveSmileIcon from '../../images/love-smile-min.png';
import letterIcon from '../../images/letter-min.png';
import weirdSmileIcon from '../../images/look-up-smile-min.png';
import robotIcon from '../../images/robot-min.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { parseTimestamp } from '../../utils/helpers';
import { translations } from '../../utils/translations/translations';

function Main() {
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const navigate = useNavigate();

  return (
    <motion.section
      className='main'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <div className='main__button-container'>
        <MenuButton
          handler={() => navigate('/my-vpn')}
          image={glassesIcon}
          currentClass='btn-my-vpn'
          title={translations.ru.textTips.myVpn}
          text={translations.ru.textTips.tariff + currentUser.tariff}
          addText={
            currentUser.tariff === 'NOLIMIT'
              ? translations.ru.textTips.activeUntil +
                parseTimestamp(currentUser.endActiveDate)
              : translations.ru.textTips.enoughTo +
                parseTimestamp(currentUser.endDate)
          }
        />
        <MenuButton
          handler={() => navigate('/help')}
          image={weirdSmileIcon}
          currentClass='btn-not-understand'
          title={translations.ru.textTips.notUnderstand}
          text={translations.ru.textTips.notUnderstandText}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/instruction')}
          image={robotIcon}
          currentClass='btn-robot'
          title={translations.ru.textTips.instructionBtn}
          text={translations.ru.textTips.instructionsBtnText}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/referral')}
          image={loveSmileIcon}
          currentClass='btn-referral'
          title={translations.ru.textTips.referral}
          text={translations.ru.textTips.referralBtnText}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/gift')}
          image={letterIcon}
          currentClass='btn-gift'
          title={translations.ru.textTips.gift}
          text={translations.ru.textTips.giftBtnText}
          addText={null}
        />
      </div>
      <MenuButton
        handler={() => navigate('/tariffes')}
        image={moneyIcon}
        currentClass='btn-tariffes'
        title={translations.ru.textTips.tariffes}
        text={translations.ru.textTips.tariffesBtnText}
        addText={null}
      />
    </motion.section>
  );
}

export default Main;
