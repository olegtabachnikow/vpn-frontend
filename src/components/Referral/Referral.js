import React from 'react';
import './Referral.css';
import Popup from '../Popup/Popup';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';

function Referral() {
  return (
    <section className='referral'>
      <BackButton
        text='Реферальная программа'
        path={-1}
        currentClass='back-button-referral'
      />
      <div className='referral__content'>
        <div className='referral__text-box'>
          <h1 className='referral__title'>
            10 гб вам — <br />
            10 гб другу, <br /> просто за <br />
            приглашение.
          </h1>
          <p className='referral__text'>
            Не нужно ждать от моря... <br /> оплаты, 5 человек просто
            <br /> установили robo, вы
            <br />
            заработали 50 гб.{' '}
          </p>
        </div>
        <div className='referral__stats'>
          <div className='referral__stat referral__stat_small'>
            <span className='referral__stat-value'>1</span>
            <p className='referral__stat-text'>
              количество приглашенных пользователей
            </p>
          </div>
          <div className='referral__stat referral__stat_small'>
            <span className='referral__stat-value'>20 Гб</span>
            <p className='referral__stat-text'>
              кол-во заработанных Гб на реферальной программе
            </p>
          </div>
          <div className='referral__stat referral__stat_big'>
            <span className='referral__stat-value'>10 Гб</span>
            <p className='referral__stat-text'>
              такой объем свободной информации получили друзья благодаря вам{' '}
              {'<3'}
            </p>
          </div>
        </div>
        <div className='referral__button-container'>
          <AppButton
            text='Пригласить друга'
            currentClass='app-button-referral'
          />
          <p className='referral__tips'>
            Участвуя в реферальной программе, вы принимаете ее условия.
          </p>
        </div>
      </div>
      <Popup title='Подробные условия' currentClass='popup-referral'>
        {
          <>
            <p>
              1. Чтобы программа действовала — нужно поделиться ссылкой с
              другом, а ему просто перейти по ней в телеграмм.
            </p>{' '}
            <p>
              2. При первой оплата от приглашенного человека — вам начисляться
              50% от размера первой покупки. другу же будет применена скидка 50%
              на любую первую покупку.
            </p>{' '}
            <p>
              3. Деньги полученные от реферальной программы возможно потратить
              на дальнейшие покупки в робо только для себя.
            </p>{' '}
            <p>
              4. Программа действует только, если пользователь ранее не
              регистрировался в нашем сервисе. регистрация — это переход в
              телеграм на robo (запуск бота).
            </p>
          </>
        }
      </Popup>
    </section>
  );
}

export default Referral;
