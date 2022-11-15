import React from 'react';
import './Traffic.css';
import AppButton from '../AppButton/AppButton';

function Traffic() {
  return (
    <section className='traffic'>
      <div className='traffic__main'>
        <div className='traffic__main-content'>
          <span className='traffic__main_text'>Осталось до 30.09.2022</span>
          <span className='traffic__main_value'>6,5 гБ</span>
          <span className='traffic__main_text'>
            Кажестся, вам не хватит трафика до конца месяца
          </span>
        </div>
        <div className='traffic__outlook'>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              В среднем в день вы тратите
            </span>
            <span className='traffic__outlook-element-value'>0,5 гБ</span>
          </div>
          <div className='traffic__outlook-element'>
            <span className='traffic__outlook-element-text'>
              Ваше прогнозное потребление трафика в месяц
            </span>
            <span className='traffic__outlook-element-value'>15 гБ</span>
          </div>
        </div>
        <div className='traffic__secondary-content'>
          <AppButton
            text='Докупить Гб'
            currentClass='app-button-traffic-primary'
          />
          <div className='traffic__button-box'>
            <AppButton text='Заработать' currentClass='app-button-traffic' />
            <AppButton text='Сменить тариф' currentClass='app-button-traffic' />
          </div>
          <p className='traffic__tips'>
            Чтобы не волноваться — можете пополнить баланс, и нажать
            автосписание по текущему тарифу.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Traffic;
