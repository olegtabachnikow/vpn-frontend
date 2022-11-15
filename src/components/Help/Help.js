import React from 'react';
import './Help.css';
import BackButton from '../BackButton/BackButton';
import MenuButton from '../MenuButton/MenuButton';
import valuesIcon from '../../images/values.png';
import possibilitiesIcon from '../../images/possibilities.png';
import newsIcon from '../../images/news.png';
import faqIcon from '../../images/faq.png';
import noResponceIcon from '../../images/noresponce.png';
import DataList from '../DataList/DataList';
import DataItem from '../DataItem/DataItem';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';

function Help() {
  const [isValuesPopupHidden, setIsValuesPopupHidden] = React.useState(true);
  const [isPossibilitiesPopupHidden, setIsPossibilitiesPopupHidden] =
    React.useState(true);
  const [isNewsPopupHidden, setIsNewsPopupHidden] = React.useState(true);
  const [isFaqPopupHidden, setIsFaqPopupHidden] = React.useState(true);
  function closeAllPopups() {
    setIsValuesPopupHidden(true);
    setIsPossibilitiesPopupHidden(true);
    setIsNewsPopupHidden(true);
    setIsFaqPopupHidden(true);
  }
  return (
    <section className='help'>
      <BackButton
        path='/my-vpn'
        text='Мне не понятно'
        currentClass='back-button-help'
      />
      <div className='help__content'>
        <MenuButton
          handler={() => setIsValuesPopupHidden(false)}
          image={valuesIcon}
          currentClass='btn-our-values'
          title='Наши ценности'
          text='Зачем robo'
          addText={null}
        />
        <MenuButton
          handler={() => null}
          image={possibilitiesIcon}
          currentClass='btn-our-possibilities'
          title='Возможности'
          text='Топ-5 причин почему именно robo'
        />
        <div className='help__button-box'>
          <MenuButton
            handler={() => null}
            image={newsIcon}
            currentClass='btn-news'
            title='Новости'
            text='Обновления от robo'
          />
          <div className='help__button-news'></div>
          <MenuButton
            handler={() => null}
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
      </div>
      <Popup
        title=''
        isCurrentHidden={isValuesPopupHidden}
        currentClass='popup-values'
        onClose={closeAllPopups}
      >
        <DataList
          currentClass='data-list-values'
          component={
            <AppButton
              text='Хочу попробовать'
              currentClass='app-button-values'
            />
          }
        >
          <DataItem title='Устойчивость к блокировкам'>
            <p className='data-item__text'>
              Мы считаем, свобода главная причина развития человека. А ее
              ущемление — ведет в противоположную сторону. Поэтому, в первую
              очередь, задача robo не дать себя заблокировать, и, вместе с тем,
              — доступ к свободе в интернете. В том числе поэтому мы даем
              гарантию на <b>100% возврат </b>
              не на первые 7 или 30 дней, как большинство сервисов. А{' '}
              <b> на весь период пользования robo</b>.
            </p>
          </DataItem>
          <DataItem title='Доступно всем'>
            <p className='data-item__text'>
              Исходя из главной для нас ценности — свободы — мы верим, что
              предоставляя экстра возможности для наших пользователей наперед...
              это приведет к большему совместному развитию в будущем.{' '}
              <b> Поэтому мы даем базовый бесплатный трафик всем </b>(10
              Гб/мес), и верим, что со временем свободный доступ в интернет
              станет для наших бесплатных пользователей ценнее любых платных
              тарифов.
            </p>
          </DataItem>
          <DataItem title='Соединение'>
            <p className='data-item__text'>
              <b>В идеале мы бы хотели, чтобы вы не замечали, что есть</b>{' '}
              вообще какие-то блокировки или <b>ограничения в интернете</b>. Не
              замечали, что есть robo. Уже сейчас для этого многое делаем:
              автоматизация скорости на серверах — не контролируем ничего
              руками, и как только у нас появляется больше пользователей —
              сервера сами увеличивают свою мощность. и еще много всего.
            </p>
          </DataItem>
          <DataItem title='Удобство'>
            <p className='data-item__text'>
              Это синоним слову сервис для нас.{' '}
              <b>Мы не хотим, чтобы вы запаривались вообще...</b>и как было
              сказано, думали об ограничениях и впн. <b>Поэтому</b> многое в
              robo <b>автоматизировано</b>. от алгоритов распределения трафика и
              работы на локальных, и зарубежных ресурсах одновременно (сбер,
              госуслуги и netflix, instagram) до автоматического подбора лучшей
              локации и встроенного приложения прямо в телеграм.
            </p>
          </DataItem>
          <DataItem title='Безопасность'>
            <p className='data-item__text'>
              Мы решили выбрать решение, чтоб у вас совсем не было сомнений.
              Примерно...<b>безопаснее некуда</b>. мы не устанавливаем ничего
              своего вам на телефон. а предлагаем один раз установить надежное
              приложение от jigsaw (<b>Google</b>) — outline. Данные в outline
              зашифрованы так, что <b>всем массонам мира вас не взломать</b> (не
              то что wi-fi в starbucks). Коммуникация с нами остается лишь на
              уровне телеграм.
            </p>
          </DataItem>
        </DataList>
      </Popup>
    </section>
  );
}

export default Help;
