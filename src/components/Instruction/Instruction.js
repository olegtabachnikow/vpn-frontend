import React from 'react';
import './Instruction.css';
import AppButton from '../AppButton/AppButton';
import googlePlay from '../../images/googleplay.png';
import appStore from '../../images/appstore.png';
import stepOne from '../../images/instruction1-min.png';
import stepTwo from '../../images/instruction2-min.png';
import stepThree from '../../images/instruction3-min.png';
import stepFour from '../../images/instruction4-min.png';
import copyIcon from '../../images/copy.png';
import copiedIcon from '../../images/check.png';

function Instruction() {
  const [progress, setProgress] = React.useState(0);
  const [isCopied, setIsCopied] = React.useState(false);
  const [value, setValue] = React.useState(
    'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6ZVV5RmFEcFg1bzM=@20.224.3.185:25229/?outline=1'
  );
  function copyToClipboard() {
    setIsCopied(true);
    navigator.clipboard.writeText(value);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }
  return (
    <section className='instruction'>
      {progress === 0 && (
        <>
          <p className='instruction__text'>
            1. Скопируй свой <br />
            <span className='instruction__text_colored'>уникальный ключ</span>,
            чтобы
            <br />
            получить доступ <br />к VPN.
          </p>
          <div onClick={copyToClipboard} className='instruction__key-generator'>
            <span className='instruction__key'>{value}</span>
            {
              <img
                className='instruction__copy-icon'
                src={!isCopied ? copyIcon : copiedIcon}
                alt='copy'
              />
            }
          </div>
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
          <AppButton
            currentClass='app-button-instruction-primary'
            text='Далее'
            handler={() => setProgress((state) => ++state)}
          />
        </>
      )}
      {progress === 1 && (
        <>
          <p className='instruction__text'>
            3. Вставь ключ <br />в приложение
            <span className='instruction__text_colored'> Outline </span>
            <br />
            по инструкции.
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
          <AppButton
            currentClass='app-button-instruction-primary'
            text='Далее'
            handler={() => setProgress((state) => ++state)}
          />
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
          <div className='instruction__button-container'>
            <AppButton
              currentClass='app-button-instruction-secondary'
              text='Перейти в Telegram'
              handler={() => setProgress((state) => state)}
            />{' '}
            <AppButton
              currentClass='app-button-instruction-primary'
              text='Возможности robo'
              handler={() => setProgress((state) => state)}
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Instruction;
