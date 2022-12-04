import React from 'react';
import './News.css';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { useSelector } from 'react-redux';
import { setDirection } from '../../redux/actions/actions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

function News() {
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  return (
    <motion.section
      className='news'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='#fff' />
      <BackButton
        text='Назад'
        path='/help'
        currentClass='white'
        title='Новости'
      />
      <p className='news__text'>
        Данный раздел в разработке. Будут полезные лайфхаки про пользования vpn
        и robo.
      </p>
      <div className='news__button-box'>
        <AppButton
          handler={() => {
            setDirection(true);
            navigate('/possibilities');
          }}
          text='Возможности robo'
          currentClass='primary blue wide'
        />
        <AppButton
          handler={() => {
            setDirection(true);
            navigate('/values');
          }}
          text='Ценности robo'
          currentClass='primary blue margin-top wide'
        />
      </div>
    </motion.section>
  );
}

export default News;
