import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import { sendPage } from '../../utils/roboApi';
import introImg0 from '../../images/intro_smile_0.svg';
import introImg1 from '../../images/intro_smile_1.svg';
import introImg2 from '../../images/intro_smile_2.svg';
import introImg3 from '../../images/intro_smile_3.svg';
import introImg4 from '../../images/intro_smile_4.svg';
import AppButton from '../AppButton/AppButton';

function Intro() {
  const [progress, setProgress] = React.useState(0);
  const navigate = useNavigate();
  function handleButtonClick() {
    progress >= 4 ? navigate('/') : setProgress((state) => ++state);
  }

  function sendCurrentPage(page) {
    sendPage(page)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <section className='intro'>
      <div className='intro__progress'>
        <span
          className={`intro__progress-item ${progress >= 0 && 'active'}`}
        ></span>
        <span
          className={`intro__progress-item ${progress >= 1 && 'active'}`}
        ></span>
        <span
          className={`intro__progress-item ${progress >= 2 && 'active'}`}
        ></span>
        <span
          className={`intro__progress-item ${progress >= 3 && 'active'}`}
        ></span>
        <span
          className={`intro__progress-item ${progress === 4 && 'active'}`}
        ></span>
      </div>
      <div className='intro__image-container'>
        <img
          className={`${
            (progress === 0 && 'intro__image-zero') ||
            (progress === 1 && 'intro__image-one') ||
            (progress === 2 && 'intro__image-two') ||
            (progress === 3 && 'intro__image-three') ||
            (progress === 4 && 'intro__image-four')
          }`}
          src={
            (progress === 0 && introImg0) ||
            (progress === 1 && introImg1) ||
            (progress === 2 && introImg2) ||
            (progress === 3 && introImg3) ||
            (progress === 4 && introImg4)
          }
          alt='happy face'
        />
      </div>
      <div className='intro__text-container'>
        {(progress === 0 && (
          <>
            <h1 className='intro__title'>
              Одна установка — <br />
              <span className='intro__title_colored'>
                {' '}
                про VPN можно забыть
              </span>
            </h1>
            <p className='intro__text'>
              Можно забыть о выключении и включении VPN по 10 раз на дню.
              Instagram, Netflix и YouTube. Авито, Сбер и Госуслуги. Robo
              работает везде — и на рф, и на зарубежных сайтах.
            </p>
          </>
        )) ||
          (progress === 1 && (
            <>
              <h1 className='intro__title'>
                Безопасность <br />
                от
                <span className='intro__title_colored'> Google</span>
              </h1>
              <p className='intro__text'>
                Мы не устанавливаем ничего своего вам на телефон. А предлагаем
                один раз установить надежное приложение от Jigsaw (Google) —
                Outline.
              </p>
            </>
          )) ||
          (progress === 2 && (
            <>
              <h1 className='intro__title'>
                Вcтроенное <br />
                приложение <br />
                <span className='intro__title_colored'> прямо в Telegram</span>
              </h1>
              <p className='intro__text'>
                Не нужно искать приложения и что-то настраивать. Встроенное
                приложение в телеграмм всегда под рукой, а алгоритмы robo
                сообщат о важном прямо в чате.
              </p>
            </>
          )) ||
          (progress === 3 && (
            <>
              <h1 className='intro__title'>
                100% гарантия <br />
                <span className='intro__title_colored'> возврата </span> всегда
              </h1>
              <p className='intro__text'>
                А не первые 7 или 30 дней как у ... но, вероятно, возврат не
                потребуется. Наши технологии не заблокировали даже в Китае. А мы
                придумали даже кое-что еще.
              </p>
            </>
          )) ||
          (progress === 4 && (
            <>
              <h1 className='intro__title'>
                Бесплатно <br />
                <span className='intro__title_colored'> каждый месяц</span>
              </h1>
              <p className='intro__text'>
                10 Гб каждый месяц всем пользователям. Без ограничений. Если не
                хватит — тарифы доступны от 69 рублей.
              </p>
            </>
          ))}
      </div>
      <AppButton
        background={'transparent'}
        color='#348FF3'
        text='Далее'
        border='#348FF3'
        handler={handleButtonClick}
      />
      <AppButton
        background={'#348FF3'}
        color='#FFF'
        text='Попробовать VPN'
        border='#348FF3'
        handler={null}
      />
    </section>
  );
}

export default Intro;
