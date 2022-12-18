import React from 'react';
import './Referral.css';
import Popup from '../Popup/Popup';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import CopyToClipboardField from '../CopyToClipboardField/CopyToClipboardField';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

function Referral() {
  const [isReferPopupHidden, setIsReferPopupHidden] = React.useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  return (
    <motion.section
      className='referral'
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
        title={translations.ru.textTips.referral}
      />
      <div className='referral__content'>
        <div className='referral__text-box'>
          <h1 className='referral__title'>
            {translations.ru.referral.refTitle1}
            <br />
            {translations.ru.referral.refTitle2}
          </h1>
          <p className='referral__text'>
            {translations.ru.referral.refSubtitle}
          </p>
        </div>
        <div className='referral__stats'>
          <div className='referral__stat referral__stat_small'>
            <span className='referral__stat-value'>{currentUser.refUsers}</span>
            <p className='referral__stat-text'>
              {translations.ru.referral.refWidgetInvitedUsers}
            </p>
          </div>
          <div className='referral__stat referral__stat_small'>
            <span className='referral__stat-value'>
              {currentUser.refBalance + translations.ru.textTips.gb}
            </span>
            <p className='referral__stat-text'>
              {translations.ru.referral.refWidgetTrafficRef}
            </p>
          </div>
          <div className='referral__stat referral__stat_big'>
            <span className='referral__stat-value'>
              {currentUser.refUsers * 5 + translations.ru.textTips.gb}
            </span>
            <p className='referral__stat-text'>
              {translations.ru.referral.refUsersGetTraffic}
              {' <3'}
            </p>
          </div>
        </div>
        <div className='referral__button-container'>
          <p className='referral__tips'>
            {translations.ru.referral.refTipCopyLink}
          </p>
          <CopyToClipboardField
            currentClass='referral__copy-to-clipboard'
            data={currentUser.referralLink}
            gaAction='Referral'
          />
          <p className='referral__tips'>
            {translations.ru.referral.refTipUserTerms}
          </p>
        </div>
      </div>
      <Popup
        title={translations.ru.textTips.termsAndConditions}
        currentClass='popup-referral'
        isHidden={isReferPopupHidden}
        handleHide={setIsReferPopupHidden}
      >
        {
          <>
            <p className='referral__popup-text'>
              {translations.ru.referral.refPopupText1}
            </p>
            <p className='referral__popup-text'>
              {translations.ru.referral.refPopupText2}
            </p>
            <p className='referral__popup-text'>
              {translations.ru.referral.refPopupText3}
            </p>
            <p className='referral__popup-text'>
              {translations.ru.referral.refPopupText4}
            </p>
            <AppButton
              text={translations.ru.appButton.gotIt}
              currentClass='primary white margin-top bg-violet'
              handler={() => setIsReferPopupHidden(true)}
            />
          </>
        }
      </Popup>
    </motion.section>
  );
}

export default Referral;
