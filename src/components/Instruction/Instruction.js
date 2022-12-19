import React from 'react';
import './Instruction.css';
import AppButton from '../AppButton/AppButton';
import googlePlay from '../../images/googleplay.png';
import appStore from '../../images/appstore.png';
import stepOne from '../../images/instruction1-min.png';
import stepTwo from '../../images/instruction2-min.png';
import stepThree from '../../images/instruction3-min.png';
import stepFour from '../../images/instruction4-min.png';
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CopyToClipboardField from '../CopyToClipboardField/CopyToClipboardField';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { setDirection } from '../../redux/actions/actions';
import useAnalyticsEventTracker from '../../hooks/useAnanlyticsEventTracker';
import { translations } from '../../utils/translations/translations';

const variants = {
  visible: { opacity: 1, transition: { duration: 0.2 } },
  faded: { opacity: 0, transition: { duration: 0.1 } },
};
const buttonVariants = {
  visible: { y: 0, opacity: 1, transition: { duration: 0.2 } },
  hidden: {
    y: '120%',
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

function Instruction() {
  const gaEventTracker = useAnalyticsEventTracker('instruction');
  const tg = window.Telegram.WebApp;
  const [progress, setProgress] = React.useState(0);
  const [isFaded, setIsFaded] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  const currentUser = useSelector((state) => state.currentUser);
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  React.useEffect(() => {
    isFaded && setTimeout(setIsFaded, 300, false);
    progress > 2 && setProgress(4);
  }, [isFaded, progress]);

  function handleClick() {
    if (progress > 1) {
      setDirection(true);
      //currentUser.activeUser ? navigate('/') : setProgress(2);
      navigate('/');
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  React.useLayoutEffect(() => {
    progress === 2 && !currentUser.activeUser
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [progress, currentUser.activeUser]);

  function handleBackClick() {
    if (progress === 0) {
      setDirection(false);
      currentUser.activeUser ? navigate('/') : navigate('/intro');
    } else {
      setIsFaded(true);
      progress > 0 && setTimeout(setProgress, 300, (state) => --state);
    }
  }
  function handleSwipeLeft() {
    if (progress > 1) {
      return;
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  function handleSwipeRight() {
    if (progress === 0) {
      return;
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
    }
  }
  return (
    <motion.section
      {...handlers}
      className='instruction'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <button onClick={handleBackClick} className='instruction__button-top'>
        {translations.ru.backButton}
        <span className='instruction__button-corner'></span>
      </button>
      <motion.div
        className='instruction__content'
        initial={{ opacity: 0 }}
        animate={isFaded ? 'faded' : 'visible'}
        variants={variants}
      >
        {progress === 0 && (
          <>
            <p className='instruction__text'>
              {translations.ru.instruction.p1TitleBegin}
              <br />
              <span className='instruction__text_colored'>
                {translations.ru.instruction.p1TitleMiddle1}
              </span>
              {translations.ru.instruction.p1TitleMiddle2}
              <br />
              {translations.ru.instruction.p1TitleMiddle3}
              <br /> {translations.ru.instruction.p1TitleEnd}
            </p>
            <CopyToClipboardField
              currentClass='instruction__copy-to-clipboard'
              data={currentUser.link}
              gaAction='Install_copy'
            />
            <div className='instruction__text-case'>
              <p className='instruction__text'>
                {translations.ru.instruction.p2TitleBegin}
                <span className='instruction__text_colored'>
                  {' '}
                  {translations.ru.instruction.p2TitleMiddle}
                </span>
                {translations.ru.instruction.p2TitleEnd}
              </p>
              <p className='instruction__text-tip'>
                {translations.ru.instruction.p2Text}
              </p>
            </div>
            <div className='instruction__link-box'>
              <a
                href='https://play.google.com/store/apps/details?id=org.outline.android.client&hl=en_US&gl=US&pli=1'
                onClick={() =>
                  gaEventTracker(
                    'visit google play',
                    'visit outline google play '
                  )
                }
                target='_blank'
                rel='noreferrer'
              >
                <img src={googlePlay} alt='google play' />
              </a>
              <a
                href='https://apps.apple.com/us/app/outline-app/id1356177741'
                onClick={() =>
                  gaEventTracker('visit appstore', 'visit outline appstore ')
                }
                target='_blank'
                rel='noreferrer'
              >
                <img src={appStore} alt='app store' />
              </a>
            </div>
          </>
        )}
        {progress === 1 && (
          <>
            <p className='instruction__text'>
              {translations.ru.instruction.p3TitleBegin}
              <br />
              {translations.ru.instruction.p3TitleMiddle}
              <span className='instruction__text_colored'>
                {' '}
                {translations.ru.instruction.p3TitleEnd}{' '}
              </span>
            </p>
            <div className='instruction__gallery'>
              <div className='instruction__gallery-row first'>
                <img
                  className='instruction__step-image'
                  src={stepOne}
                  alt='step'
                />
                <span className='instruction__step-tooltip one'>
                  {translations.ru.instruction.step1}
                </span>
                <span className='instruction__step-rectangle one' />
                <img
                  className='instruction__step-image'
                  src={stepTwo}
                  alt='step'
                />
                <span className='instruction__step-tooltip two'>
                  {translations.ru.instruction.step2}
                </span>
                <span className='instruction__step-rectangle two' />
              </div>
              <div className='instruction__gallery-row second'>
                <img
                  className='instruction__step-image'
                  src={stepThree}
                  alt='step'
                />
                <span className='instruction__step-tooltip three'>
                  {translations.ru.instruction.step4}
                </span>
                <span className='instruction__step-rectangle three' />
                <img
                  className='instruction__step-image'
                  src={stepFour}
                  alt='step'
                />
                <span className='instruction__step-tooltip four'>
                  {translations.ru.instruction.step4}
                </span>
                <span className='instruction__step-rectangle four' />
              </div>
            </div>
          </>
        )}
        {progress === 2 && (
          <>
            <span className='instruction__title'>
              {translations.ru.instruction.p4TitleBegin}
              <br />
              {translations.ru.instruction.p4TitleEnd}
            </span>
            <p className='instruction__text'>
              {translations.ru.instruction.p4TextBegin}
              <br />
              {translations.ru.instruction.p4TextEnd}
            </p>
          </>
        )}
      </motion.div>
      <div className='instruction__button-container'>
        <motion.div
          className='instruction__button-wrapper'
          style={{ pointerEvents: progress === 2 ? 'all' : 'none' }}
          animate={progress === 2 ? 'visible' : 'hidden'}
          variants={buttonVariants}
        >
          <AppButton
            currentClass='border-blue secondary blue'
            text={translations.ru.appButton.toTelegram}
            handler={() => tg.close()}
          />
        </motion.div>
        <AppButton
          currentClass={`primary white bg-blue margin-top ${
            isDisabled && 'disabled'
          }`}
          text={`${
            progress < 2
              ? translations.ru.appButton.next
              : translations.ru.appButton.mainMenu
          }`}
          handler={handleClick}
        />
        {progress === 2 && isDisabled ? (
          <span className='instruction__tips'>
            {translations.ru.instruction.p4NotActiveUserTips}
          </span>
        ) : null}
      </div>
    </motion.section>
  );
}

export default Instruction;
