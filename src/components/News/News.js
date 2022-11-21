import React from 'react';
import './News.css';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

function News() {
  const navigate = useNavigate();
  return (
    <section className='news'>
      <BackButton
        text='Мне не понятно'
        path='/help'
        currentClass='back-button-news'
      />
      <p className='news__text'>
        Данный раздел в разработке. Будут полезные лайфхаки про пользования vpn
        и robo.
      </p>
      <div className='news__button-box'>
        <AppButton
          handler={() => navigate('/possibilities')}
          text='Возможности robo'
          currentClass='app-button-news'
        />
        <AppButton
          handler={() => navigate('/values')}
          text='Ценности robo'
          currentClass='app-button-news'
        />
      </div>
    </section>
  );
}

export default News;
