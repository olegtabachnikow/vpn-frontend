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

function Instruction() {
  const tg = window.Telegram.WebApp;
  const [progress, setProgress] = React.useState(0);
  const [isFaded, setIsFaded] = React.useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  React.useEffect(() => {
    isFaded && setTimeout(setIsFaded, 400, false);
  }, [isFaded]);

  function handleClick() {
    setIsFaded(true);
    if (progress > 1) {
      navigate('/');
    } else {
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  function handleBackClick() {
    setIsFaded(true);
    progress === 0 && currentUser.activeUser
      ? navigate('/')
      : navigate('/intro');
    progress >= 1 && setTimeout(setProgress, 300, (state) => --state);
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
    <section {...handlers} className='instruction'>
      <button
        onClick={handleBackClick}
        className={`instruction__button-top ${progress === 0 && 'hidden'}`}
      >
        Назад
        <span className='instruction__button-corner'></span>
      </button>
      <div className={`instruction__content ${isFaded && 'faded'}`}>
        {progress === 0 && (
          <>
            <p className='instruction__text'>
              1. Скопируй свой <br />
              <span className='instruction__text_colored'>уникальный ключ</span>
              , чтобы
              <br />
              получить доступ <br />к VPN.
            </p>
            <CopyToClipboardField
              currentClass='instruction__copy-to-clipboard'
              data={currentUser.link}
            />
            <div>
              <p className='instruction__text'>
                2. Скачай приложение
                <span className='instruction__text_colored'> Outline </span>
                на свое устройство.
              </p>
              <p className='instruction__text-tip'>
                Это безопасно, проверено и разработано при участии Google.
              </p>
            </div>
            <div className='instruction__link-box'>
              <a
                href='https://play.google.com/store/apps/details?id=org.outline.android.client&hl=en_US&gl=US&pli=1'
                target='_blank'
                rel='noreferrer'
              >
                <img src={googlePlay} alt='google play' />
              </a>
              <a
                href='https://apps.apple.com/us/app/outline-app/id1356177741'
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
              3. Вставь ключ <br />в приложение
              <span className='instruction__text_colored'> Outline </span>.
            </p>
            <div className='instruction__gallery'>
              <div className='instruction__gallery-row first'>
                <img
                  className='instruction__step-image'
                  src={stepOne}
                  alt='step'
                />
                <span className='instruction__step-tooltip one'>1ый шаг</span>
                <span className='instruction__step-rectangle one' />
                <img
                  className='instruction__step-image'
                  src={stepTwo}
                  alt='step'
                />
                <span className='instruction__step-tooltip two'>2ой шаг</span>
                <span className='instruction__step-rectangle two' />
              </div>
              <div className='instruction__gallery-row second'>
                <img
                  className='instruction__step-image'
                  src={stepThree}
                  alt='step'
                />
                <span className='instruction__step-tooltip three'>3ий шаг</span>
                <span className='instruction__step-rectangle three' />
                <img
                  className='instruction__step-image'
                  src={stepFour}
                  alt='step'
                />
                <span className='instruction__step-tooltip four'>4ый шаг</span>
                <span className='instruction__step-rectangle four' />
              </div>
            </div>
          </>
        )}
        {progress === 2 && (
          <>
            <span className='instruction__title'>
              Отлично! <br />
              Все работает!
            </span>
            <p className='instruction__text'>
              Можете свернуть приложение — его всегда можно найти <br /> в
              Telegram-чате с robo.
            </p>
          </>
        )}
      </div>
      <div className='instruction__button-container'>
        <AppButton
          currentClass={`border-blue secondary blue hidden ${
            progress === 2 && 'not-hidden'
          }`}
          text='Перейти в Telegram'
          handler={() => tg.close()}
        />
        <AppButton
          currentClass={`primary white bg-blue margin-top ${
            progress === 2 && !currentUser.activeUser && 'disabled'
          }`}
          text={`${progress < 2 ? 'Далее' : 'Главное меню'}`}
          handler={() => (progress < 2 ? handleClick() : navigate('/'))}
        />
      </div>
    </section>
  );
}

export default Instruction;
