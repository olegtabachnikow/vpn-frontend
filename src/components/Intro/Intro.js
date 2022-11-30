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
import * as introMarkup from '../../utils/text-index-markup';

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
    isFaded && setTimeout(setIsFaded, 400, false);
    progress > 4 && setProgress(4);
  }, [isFaded, progress]);

  function handleButtonClick() {
    if (progress >= 4) {
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
      animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
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
      <div
        className='intro__text-container'
        style={{ opacity: isFaded ? 0 : 1 }}
      >
        {(progress === 0 && introMarkup.textOne) ||
          (progress === 1 && introMarkup.textTwo) ||
          (progress === 2 && introMarkup.textThree) ||
          (progress === 3 && introMarkup.textFour) ||
          (progress === 4 && introMarkup.textFive)}
      </div>
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
