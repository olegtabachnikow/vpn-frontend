import React from 'react';
import DataItem from '../DataItem/DataItem';
import DataList from '../DataList/DataList';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import './Faq.css';
import BackButton from '../BackButton/BackButton';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { useSelector } from 'react-redux';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

function Faq() {
  const [index, setIndex] = React.useState(0);
  const direction = useSelector((state) => state.direction);
  React.useEffect(() => {
    setIndex(0);
  }, []);
  const navigate = useNavigate();
  return (
    <motion.section
      className='faq'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--white)' />
      <BackButton
        text={translations.ru.backButton.back}
        path={-1}
        currentClass='white moved-right'
        title={translations.ru.textTips.faq}
      />
      <DataList currentClass='data-list-faq'>
        <DataItem
          title={translations.ru.faq.title1}
          index={index}
          currentIndex={1}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.faq.text1normal1}
            <b>{translations.ru.faq.text1bold1}</b>
            {translations.ru.faq.text1normal2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title2}
          index={index}
          currentIndex={2}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            <b>{translations.ru.faq.text2bold1}</b>
            {translations.ru.faq.text2normal1}
            <b>{translations.ru.faq.text2bold2}</b>
            {translations.ru.faq.text2normal2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title3}
          index={index}
          currentIndex={3}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.faq.text3normal1}
            <b>{translations.ru.faq.text3bold1}</b>
            {translations.ru.faq.text3normal2}
            <b>{translations.ru.faq.text3bold2}</b>
            {translations.ru.faq.text3normal3}
            <b>{translations.ru.faq.text3bold3}</b>
            {translations.ru.faq.text3normal4}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title4}
          index={index}
          currentIndex={4}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.faq.text4normal1}
            <br />
            {translations.ru.faq.text4normal2}
            <span
              onClick={() => window.open('mailto:care@getrobovpn.com')}
              className='data-item__link'
            >
              care@getrobovpn.com
            </span>
            {translations.ru.faq.text4normal3}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title5}
          index={index}
          currentIndex={5}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.faq.text5normal1}
            <b>{translations.ru.faq.text5bold1}</b>
            {translations.ru.faq.text5normal2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title6}
          index={index}
          currentIndex={6}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.faq.text6}
            <span
              onClick={() => {
                setDirection(true);
                navigate('/possibilities');
              }}
              className='data-item__link'
            >
              {translations.ru.faq.text6link}
            </span>
            ).
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title7}
          index={index}
          currentIndex={7}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            <b>{translations.ru.faq.text7bold1}</b>
            {translations.ru.faq.text7normal1}
            <b>{translations.ru.faq.text7bold2}</b>
            {translations.ru.faq.text7normal2}
            <b>{translations.ru.faq.text7bold3}</b>
            {translations.ru.faq.text7normal3}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title8}
          index={index}
          currentIndex={8}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            <b>{translations.ru.faq.text8bold1}</b>
            {translations.ru.faq.text8normal1}
            <b>{translations.ru.faq.text8bold2}</b>
            {translations.ru.faq.text8normal2}
          </p>
        </DataItem>
        <DataItem
          title={translations.ru.faq.title9}
          index={index}
          currentIndex={9}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            {translations.ru.faq.text9normal1}
            <span
              className='data-item__link'
              onClick={() => window.open('mailto:collab@getrobovpn.com')}
            >
              collab@getrobovpn.com
            </span>
            <br />
            {translations.ru.faq.text9normal2}
            <span
              className='data-item__link'
              onClick={() => window.open('mailto:care@getrobovpn.com')}
            >
              care@getrobovpn.com
            </span>
            {translations.ru.faq.text9normal3}
          </p>
        </DataItem>
      </DataList>
      <div className='faq__button-box'>
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
          currentClass='primary violet'
          handler={() => {
            setDirection(true);
            navigate('/tariffes');
          }}
        />
      </div>
    </motion.section>
  );
}

export default Faq;
