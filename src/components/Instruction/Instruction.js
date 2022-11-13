import React from 'react';
import './Instruction.css';
import AppButton from '../AppButton/AppButton';
import googlePlay from '../../images/googleplay.png';
import appStore from '../../images/appstore.png';
import stepOne from '../../images/instruction1-min.png';
import stepTwo from '../../images/instruction2-min.png';
import stepThree from '../../images/instruction3-min.png';
import stepFour from '../../images/instruction4-min.png';

function Instruction() {
  const [progress, setProgress] = React.useState(5);
  const [value, setValue] = React.useState(
    'ss://Y2hhY2hhMjAtaWV0Zi1wb2x5MTMwNTp6ZVV5RmFEcFg1bzM=@20.224.3.185:25229/?outline=1'
  );
  return (
    <section className='instruction'>
      {progress === 5 && (
        <>
          <p className='instruction__text'>
            1. Скопируй свой <br />
            <span className='instruction__text_colored'>уникальный ключ</span>,
            чтобы
            <br />
            получить доступ <br />к VPN.
          </p>
          <span className='instruction__key-generator'>{value}</span>
          <p className='instruction__text'>
            2. Скачай приложение
            <span className='instruction__text_colored'> Outline </span>
            на свое устройство.
          </p>
          <p className='instruction__text-tip'>
            Это безопасно, проверено и разработано при участии Google.
          </p>
          <div className='instruction__link-box'>
            <a href='#' target='_blank' rel='noreferrer'>
              <img src={googlePlay} alt='google play' />
            </a>
            <a href='#' target='_blank' rel='noreferrer'>
              <img src={appStore} alt='app store' />
            </a>
          </div>
          <AppButton
            background={'#348FF3'}
            color='#FFF'
            text='Далее'
            border='#348FF3'
            handler={() => setProgress((state) => ++state)}
          />
        </>
      )}
      {progress === 6 && (
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
            background={'#348FF3'}
            color='#FFF'
            text='Далее'
            border='#348FF3'
            handler={() => setProgress((state) => ++state)}
          />
        </>
      )}
      {progress === 7 && (
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
              background={'#FFF'}
              color='#348FF3'
              text='Перейти в Telegram'
              border='#348FF3'
              handler={() => setProgress((state) => state)}
            />{' '}
            <AppButton
              background={'#348FF3'}
              color='#FFF'
              text='Возможности robo'
              border='#348FF3'
              handler={() => setProgress((state) => state)}
            />
          </div>
        </>
      )}
    </section>
  );
}

export default Instruction;
