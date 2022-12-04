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
      <BurgerMenu color='#fff' />
      <BackButton
        text='Назад'
        path={-1}
        currentClass='white moved-right'
        title='Ценности'
      />
      <DataList currentClass='data-list-values'>
        <DataItem
          title='Устойчивость к блокировкам'
          index={index}
          currentIndex={1}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Мы считаем, свобода главная причина развития человека. А ее
            ущемление — ведет в противоположную сторону. Поэтому, в первую
            очередь, задача robo не дать себя заблокировать, и, вместе с тем, —
            доступ к свободе в интернете. В том числе поэтому мы даем гарантию
            на <b>100% возврат </b>
            не на первые 7 или 30 дней, как большинство сервисов. А{' '}
            <b> на весь период пользования robo</b>.
          </p>
        </DataItem>
        <DataItem
          title='Доступно всем'
          index={index}
          currentIndex={2}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Исходя из главной для нас ценности — свободы — мы верим, что
            предоставляя экстра возможности для наших пользователей наперед...
            это приведет к большему совместному развитию в будущем.{' '}
            <b> Поэтому мы даем базовый бесплатный трафик всем </b>
            (10 Гб/мес), и верим, что со временем свободный доступ в интернет
            станет для наших бесплатных пользователей ценнее любых платных
            тарифов.
          </p>
        </DataItem>
        <DataItem
          title='Соединение'
          index={index}
          currentIndex={3}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            <b>В идеале мы бы хотели, чтобы вы не замечали, что есть</b> вообще
            какие-то блокировки или <b>ограничения в интернете</b>. Не замечали,
            что есть robo. Уже сейчас для этого многое делаем: автоматизация
            скорости на серверах — не контролируем ничего руками, и как только у
            нас появляется больше пользователей — сервера сами увеличивают свою
            мощность.
          </p>
        </DataItem>
        <DataItem
          title='Удобство'
          index={index}
          currentIndex={4}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Это синоним слову сервис для нас.{' '}
            <b>Мы не хотим, чтобы вы запаривались вообще...</b>и как было
            сказано, думали об ограничениях и впн. <b>Поэтому</b> многое в robo{' '}
            <b>автоматизировано</b>. от алгоритов распределения трафика и работы
            на локальных, и зарубежных ресурсах одновременно (сбер, госуслуги и
            netflix, instagram) до автоматического подбора лучшей локации и
            встроенного приложения прямо в телеграм.
          </p>
        </DataItem>
        <DataItem
          title='Безопасность'
          index={index}
          currentIndex={5}
          setIndex={setIndex}
        >
          <p className='data-item__text'>
            Мы решили выбрать решение, чтоб у вас совсем не было сомнений.
            Примерно...<b>безопаснее некуда</b>. мы не устанавливаем ничего
            своего вам на телефон. а предлагаем один раз установить надежное
            приложение от jigsaw (<b>Google</b>) — outline. Данные в outline
            зашифрованы так, что <b>всем массонам мира вас не взломать</b> (не
            то что wi-fi в starbucks). Коммуникация с нами остается лишь на
            уровне Telegram.
          </p>
        </DataItem>
      </DataList>
      <div className='values__button-box'>
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
