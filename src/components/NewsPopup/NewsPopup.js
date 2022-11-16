import React from 'react';
import './NewsPopup.css';
import AppButton from '../AppButton/AppButton';
import Popup from '../Popup/Popup';

function NewsPopup({
  isHidden,
  handleValuesPopup,
  handlePossibilitiesPopup,
  handleHide,
}) {
  return (
    <Popup
      title='Новости'
      isHidden={isHidden}
      currentClass='popup-news'
      handleHide={handleHide}
    >
      <div className='news'>
        <p className='news__text'>
          Данный раздел в разработке. Будут полезные лайфхаки про пользования
          vpn и robo.
        </p>
        <div className='news__button-box'>
          <AppButton
            handler={handlePossibilitiesPopup}
            text='Возможности robo'
            currentClass='app-button-news'
          />
          <AppButton
            handler={handleValuesPopup}
            text='Ценности robo'
            currentClass='app-button-news'
          />
        </div>
      </div>
    </Popup>
  );
}

export default NewsPopup;
