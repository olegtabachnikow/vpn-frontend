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
      <BurgerMenu color='#fff' />
      <BackButton
        text='Назад'
        path={-1}
        currentClass='white moved-right'
        title='Возможности'
      />
      <DataList currentClass='data-list-possibilities'>
        <DataItem
          title='Умный robo'
          index={index}
          currentIndex={1}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Одна установка, и про впн можно забыть. instagram, netflix и
            youtube. авито, сбер и госуслуги. Robo работает везде — и на рф, и
            на зарубежных сайтах. Можно забыть о выключении и включении vpn по
            10 раз на дню. Так же не важно, где вы находитесь в рф или зарубежом
            — алгоритмы robo откроют доступ к нужным ресурсам.
          </p>
        </DataItem>
        <DataItem
          title='Безопасность от Google'
          index={index}
          currentIndex={2}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Мы не устанавливаем ничего своего вам на телефон. А предлагаем один
            раз установить надежное приложение от jigsaw (google) — outline.
            Данные зашифрованы так, что всем массонам мира вас не взломать.
          </p>
        </DataItem>
        <DataItem
          title='Встроенное приложение прямо в Telegram'
          index={index}
          currentIndex={3}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Не нужно искать приложения и что-то настраивать. Встроенное
            приложение в телеграм всегда под рукой, а алгоритмы robo сообщат о
            важном прямо в чате в телеграм.
          </p>
        </DataItem>
        <DataItem
          title='100% гарантия возврата всегда'
          index={index}
          currentIndex={4}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Наша главная задача сделать так, чтобы у вас был всегда доступ в
            свободный интернет. И мы в ответе за свои слова, если впн перестанет
            работать и мы не сможем в течение дня предоставить вам работающий
            доступ к сервису — вернем деньги.
          </p>
        </DataItem>
        <DataItem
          title='10 Гб каждый месяц бесплатно'
          index={index}
          currentIndex={5}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Дарим 10 гигабайтов на тарифах FREE и FIX каждый месяц, так же можно
            заработать 20 гб просто за приглашение — 10 гб вам и 10 гб
            приглашенному.
          </p>
        </DataItem>
      </DataList>
      <div className='possibilities__button-box'>
        <AppButton
          text='Главное меню'
          currentClass='secondary margin-bottom white'
          handler={() => {
            setDirection(true);
            navigate('/');
          }}
        />
        <AppButton
          text='Выбрать тариф'
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
