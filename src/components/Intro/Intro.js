import React from 'react';
import './Intro.css';
import { useNavigate } from 'react-router-dom';
import introImg from '../../images/intro_smile_0.svg';
import sector1 from '../../images/sector1.svg';
import sector2 from '../../images/sector2.svg';
import sector3 from '../../images/sector3.svg';
import sector4 from '../../images/sector4.svg';
import AppButton from '../AppButton/AppButton';
import { useSwipeable } from 'react-swipeable';
import { motion } from 'framer-motion';
import { setDirection } from '../../redux/actions/actions';

const introTextVariants = {
  visible: { opacity: 1, transition: { duration: 0.2 } },
  faded: { opacity: 0, transition: { duration: 0.2 } },
};

function Intro() {
  const [progress, setProgress] = React.useState(0);
  const [isFaded, setIsFaded] = React.useState(false);
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });
  const progressBarItems = [...Array(5).keys()];

  React.useEffect(() => {
    isFaded && setTimeout(setIsFaded, 300, false);
    progress > 4 && setProgress(4);
  }, [isFaded, progress]);

  function handleButtonClick() {
    if (progress >= 4) {
      setDirection(true);
      navigate('/instruction');
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  function handleBackButtonClick() {
    if (progress < 1) {
      return;
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
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
  function handleSwipeLeft() {
    if (progress > 3) {
      return;
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }

  return (
    <motion.section
      {...handlers}
      className='intro'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ x: '100%', opacity: 0, transition: { duration: 0.2 } }}
    >
      <button
        onClick={handleBackButtonClick}
        className={`intro__back-button ${progress < 1 && 'hidden'}`}
      >
        Назад
        <span className='intro__back-button-arrow' />
      </button>
      <div className='intro__image-container'>
        <img className='intro__image' src={introImg} alt='happy face' />
        <img
          className={`intro__image-sector ${progress === 1 && 'active'}`}
          src={sector1}
          alt='sector'
        />
        <img
          className={`intro__image-sector ${progress === 2 && 'active'}`}
          src={sector2}
          alt='sector'
        />
        <img
          className={`intro__image-sector ${progress === 3 && 'active'}`}
          src={sector3}
          alt='sector'
        />
        <img
          className={`intro__image-sector ${progress === 4 && 'active'}`}
          src={sector4}
          alt='sector'
        />
      </div>
      <motion.div
        className='intro__text-container'
        initial={{ opacity: 0 }}
        animate={isFaded ? 'faded' : 'visible'}
        variants={introTextVariants}
      >
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
              работает везде — и на рф, и на зарубежных сайтах, вне зависимости
              от того где вы находитесь.
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
                пошли еще дальше.
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
                До 10 Гб каждый месяц всем пользователям. Без ограничений. Если
                не хватит — тарифы доступны от 69 рублей.
              </p>
            </>
          ))}
      </motion.div>
      <div className='intro__progress'>
        {progressBarItems.map((el) => (
          <span
            key={el}
            className={`intro__progress-item ${progress >= el && 'active'}`}
          ></span>
        ))}
      </div>
      <AppButton
        text='Далее'
        currentClass='border-blue secondary blue'
        handler={handleButtonClick}
      />
      <AppButton
        currentClass='primary white bg-blue margin-top'
        text='Установить VPN'
        handler={() => navigate('/instruction')}
      />
    </motion.section>
  );
}

export default Intro;
