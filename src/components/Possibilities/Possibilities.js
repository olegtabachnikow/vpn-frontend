import React from 'react';
import DataItem from '../DataItem/DataItem';
import DataList from '../DataList/DataList';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import './Possibilities.css';

function Possibilities() {
  const navigate = useNavigate();
  return (
    <section className='possibilities'>
      <BackButton
        text='Мне не понятно'
        path='/help'
        currentClass='back-button-possibilities'
      />
      <DataList
        currentClass='data-list-possibilities'
        component={
          <AppButton
            text='Выбрать тариф'
            currentClass='app-button-possibilities'
            handler={() => navigate('/tariffes')}
          />
        }
      >
        <DataItem title='Умный robo'>
          <p className='data-item__text'>
            Одна установка, и про впн можно забыть. instagram, netflix и
            youtube. авито, сбер и госуслуги. Robo работает везде — и на рф, и
            на зарубежных сайтах. Можно забыть о выключении и включении vpn по
            10 раз на дню. Так же не важно, где вы находитесь в рф или зарубежом
            — алгоритмы robo откроют доступ к нужным ресурсам.
          </p>
        </DataItem>
        <DataItem title='Безопасность от Google '>
          <p className='data-item__text'>
            Мы не устанавливаем ничего своего вам на телефон. А предлагаем один
            раз установить надежное приложение от jigsaw (google) — outline.
            Данные зашифрованы так, что всем массонам мира вас не взломать.
          </p>
        </DataItem>
        <DataItem title='Встроенное приложение прямо в Telegram'>
          <p className='data-item__text'>
            Не нужно искать приложения и что-то настраивать. Встроенное
            приложение в телеграм всегда под рукой, а алгоритмы robo сообщат о
            важном прямо в чате в телеграм.
          </p>
        </DataItem>
        <DataItem title='100% гарантия возврата всегда '>
          <p className='data-item__text'>
            Наша главная задача сделать так, чтобы у вас был всегда доступ в
            свободный интернет. И мы в ответе за свои слова, если впн перестанет
            работать и мы не сможем в течение дня предоставить вам работающий
            доступ к сервису — вернем деньги.
          </p>
        </DataItem>
        <DataItem title='10 Гб каждый месяц бесплатно'>
          <p className='data-item__text'>
            Дарим 10 гигабайтов на тарифах FREE и FIX каждый месяц, так же можно
            заработать 20 гб просто за приглашение — 10 гб вам и 10 гб
            приглашенному.
          </p>
        </DataItem>
      </DataList>
      <AppButton text='Выбрать тариф' currentClass='app-button-possibilities' />
    </section>
  );
}

export default Possibilities;
