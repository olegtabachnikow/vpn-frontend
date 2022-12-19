import React from 'react';
import DataItem from '../DataItem/DataItem';
import DataList from '../DataList/DataList';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import './Values.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { useSelector } from 'react-redux';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

function Values() {
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    setIndex(0);
  }, []);
  return (
    <motion.section
      className='values'
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
        title={translations.ru.textTips.values}
      />
      <DataList currentClass='data-list-values'>
        <DataItem
          title={translations.ru.values.title1}
          index={index}
          currentIndex={1}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.values.text1Normal1}
            <b>{translations.ru.values.text1Bold1}</b>
            {translations.ru.values.text1Normal2}
            <b>{translations.ru.values.text1Bold2}</b>.
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.values.title2}
          index={index}
          currentIndex={2}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.values.text2Normal1}
            <b>{translations.ru.values.text2Bold}</b>
            {translations.ru.values.text2Normal2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.values.title3}
          index={index}
          currentIndex={3}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            <b>{translations.ru.values.text3Bold1}</b>
            {translations.ru.values.text3Normal1}
            <b>{translations.ru.values.text3Bold2}</b>
            {translations.ru.values.text3Normal2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.values.title4}
          index={index}
          currentIndex={4}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.values.text4Normal1}
            <b>{translations.ru.values.text4Bold1}</b>
            {translations.ru.values.text4Normal2}
            <b>{translations.ru.values.text4Bold2}</b>
            {translations.ru.values.text4Normal3}
            <b>{translations.ru.values.text4Bold3}</b>
            {translations.ru.values.text4Normal4}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.values.title5}
          index={index}
          currentIndex={5}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.values.text5Normal1}
            <b>{translations.ru.values.text5Bold1}</b>
            {translations.ru.values.text5Normal2}
            <b>{translations.ru.values.text5Bold2}</b>
            {translations.ru.values.text5Normal3}
            <b>{translations.ru.values.text5Bold3}</b>
            {translations.ru.values.text5Normal4}
          </p>
        </DataItem>
      </DataList>
      <div className='values__button-box'>
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
          currentClass='primary orange'
          handler={() => {
            setDirection(true);
            navigate('/tariffes');
          }}
        />
      </div>
    </motion.section>
  );
}

export default Values;
