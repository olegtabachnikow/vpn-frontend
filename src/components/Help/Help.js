import React from 'react';
import './Help.css';
import BackButton from '../BackButton/BackButton';
import MenuButton from '../MenuButton/MenuButton';
import valuesIcon from '../../images/values.png';
import possibilitiesIcon from '../../images/possibilities.png';
import newsIcon from '../../images/news.png';
import faqIcon from '../../images/faq.png';
import noResponceIcon from '../../images/noresponce.png';
import OurValues from '../OurValues/OurValues';
import OurPossibilities from '../OurPossibilities/OurPossibilities';
import OurFaq from '../OurFaq/OurFaq';
import NewsPopup from '../NewsPopup/NewsPopup';

function Help() {
  const [isValuesPopupHidden, setIsValuesPopupHidden] = React.useState(true);
  const [isPossibilitiesPopupHidden, setIsPossibilitiesPopupHidden] =
    React.useState(true);
  const [isNewsPopupHidden, setIsNewsPopupHidden] = React.useState(true);
  const [isFaqPopupHidden, setIsFaqPopupHidden] = React.useState(true);

  React.useEffect(() => {
    closeAllPopups();
  }, []);

  function closeAllPopups() {
    setIsValuesPopupHidden(true);
    setIsPossibilitiesPopupHidden(true);
    setIsNewsPopupHidden(true);
    setIsFaqPopupHidden(true);
  }
  function relocateToPossibilities() {
    closeAllPopups();
    setTimeout(() => setIsPossibilitiesPopupHidden(false), 1000);
  }
  function relocateToValues() {
    closeAllPopups();
    setTimeout(() => setIsValuesPopupHidden(false), 1000);
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
          handler={() => setIsPossibilitiesPopupHidden(false)}
          image={possibilitiesIcon}
          currentClass='btn-our-possibilities'
          title='Возможности'
          text='Топ-5 причин почему именно robo'
        />
        <div className='help__button-box'>
          <MenuButton
            handler={() => setIsNewsPopupHidden(false)}
            image={newsIcon}
            currentClass='btn-news'
            title='Новости'
            text='Обновления от robo'
          />
          <div className='help__button-news'></div>
          <MenuButton
            handler={() => setIsFaqPopupHidden(false)}
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
      <OurValues
        isHidden={isValuesPopupHidden}
        handleHide={setIsValuesPopupHidden}
      />
      <OurPossibilities
        isHidden={isPossibilitiesPopupHidden}
        handleHide={setIsPossibilitiesPopupHidden}
      />
      <OurFaq
        isHidden={isFaqPopupHidden}
        handleHide={setIsFaqPopupHidden}
        handler={relocateToPossibilities}
      />
      <NewsPopup
        isHidden={isNewsPopupHidden}
        handleValuesPopup={relocateToValues}
        handlePossibilitiesPopup={relocateToPossibilities}
        handleHide={setIsNewsPopupHidden}
      />
    </section>
  );
}

export default Help;
