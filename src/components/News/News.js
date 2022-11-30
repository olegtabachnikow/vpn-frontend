import React from 'react';
import './News.css';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import { motion } from 'framer-motion';

function News() {
  const navigate = useNavigate();
  return (
    <motion.section
      className='news'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
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
          handler={() => navigate('/possibilities')}
          text='Возможности robo'
          currentClass='primary blue wide'
        />
        <AppButton
          handler={() => navigate('/values')}
          text='Ценности robo'
          currentClass='primary blue margin-top wide'
        />
      </div>
    </motion.section>
  );
}

export default News;
