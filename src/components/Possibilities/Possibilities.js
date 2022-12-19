import React from 'react';
import DataItem from '../DataItem/DataItem';
import DataList from '../DataList/DataList';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import './Possibilities.css';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { useSelector } from 'react-redux';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

function Possibilities() {
  const [index, setIndex] = React.useState(0);
  const direction = useSelector((state) => state.direction);
  React.useEffect(() => {
    setIndex(0);
  }, []);
  const navigate = useNavigate();
  return (
    <motion.section
      className='possibilities'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--white)' />
      <BackButton
        text={translations.ru.backButton}
        path={-1}
        currentClass='white moved-right'
        title={translations.ru.textTips.possibilities}
      />
      <DataList currentClass='data-list-possibilities'>
        <DataItem
          title={translations.ru.possibilities.title1}
          index={index}
          currentIndex={1}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.possibilities.text1}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.possibilities.title2}
          index={index}
          currentIndex={2}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.possibilities.text2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.possibilities.title3}
          index={index}
          currentIndex={3}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.possibilities.text3}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.possibilities.title4}
          index={index}
          currentIndex={4}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.possibilities.text4}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.possibilities.title5}
          index={index}
          currentIndex={5}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.possibilities.text5}
          </p>
        </DataItem>
      </DataList>
      <div className='possibilities__button-box'>
        <AppButton
          text={translations.ru.appButton.mainMenu}
          currentClass='secondary margin-bottom white'
          handler={() => {
            setDirection(true);
            navigate('/');
          }}
        />
        <AppButton
          text={translations.ru.appButton.chooseTariff}
          currentClass='primary rose'
          handler={() => {
            setDirection(true);
            navigate('/tariffes');
          }}
        />
      </div>
    </motion.section>
  );
}

export default Possibilities;
