import React from 'react';
import './Help.css';
import BackButton from '../BackButton/BackButton';
import MenuButton from '../MenuButton/MenuButton';
import valuesIcon from '../../images/values.png';
import possibilitiesIcon from '../../images/possibilities.png';
import newsIcon from '../../images/news.png';
import faqIcon from '../../images/faq.png';
import noResponceIcon from '../../images/noresponce.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Help() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <section className='help'>
      <BackButton path='/' text='Главное меню' currentClass='' />
      <div className='help__content'>
        <MenuButton
          handler={() => navigate('/values')}
          image={valuesIcon}
          currentClass='btn-our-values'
          title='Наши ценности'
          text='Зачем robo'
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/possibilities')}
          image={possibilitiesIcon}
          currentClass='btn-our-possibilities'
          title='Возможности'
          text='Топ-5 причин почему именно robo'
        />
        <div className='help__button-box'>
          <MenuButton
            handler={() => navigate('/news')}
            image={newsIcon}
            currentClass='btn-news'
            title='Новости'
            text='Обновления от robo'
          />
          <div className='help__button-news'></div>
          <MenuButton
            handler={() => navigate('/faq')}
            image={faqIcon}
            currentClass='btn-faq'
            title='FAQ'
            text='Ответы на вопросы'
          />
          <MenuButton
            handler={() => null}
            image={noResponceIcon}
            currentClass='btn-no-responce'
            title='Нет ответа?'
            text='Напишите нам!'
          />
        </div>
        <MenuButton
          image={valuesIcon}
          currentClass='btn-my-tariff'
          title='Мой тариф'
          text={`Тариф: ${currentUser.tariff}`}
          addText={`Активен до ${currentUser.endDate}`}
          handler={() => navigate('/subscription')}
        />
      </div>
    </section>
  );
}

export default Help;
