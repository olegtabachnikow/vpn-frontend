import React from 'react';
import './Referral.css';
import Popup from '../Popup/Popup';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import CopyToClipboardField from '../CopyToClipboardField/CopyToClipboardField';
import { useSelector } from 'react-redux';

function Referral() {
  const [isReferPopupHidden, setIsReferPopupHidden] = React.useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <section className='referral'>
      <BackButton
        text='Мой VPN'
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
            <span className='referral__stat-value'>
              {currentUser.refBalance} Гб
            </span>
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
          <p className='referral__tips'>
            Скопируйте ссылку и поделитесь в другом:
          </p>
          <CopyToClipboardField
            currentClass='refferal__copy-to-clipboard'
            data={currentUser.referralLink}
          />
          <p className='referral__tips'>
            Участвуя в реферальной программе, вы принимаете ее условия.
          </p>
        </div>
      </div>
      <Popup
        title='Подробные условия'
        currentClass='popup-referral'
        isHidden={isReferPopupHidden}
        handleHide={setIsReferPopupHidden}
      >
        {
          <>
            <p className='referral__popup-text'>
              1. Чтобы программа действовала — нужно поделиться ссылкой с
              другом, а ему просто перейти по ней в телеграмм.
            </p>{' '}
            <p className='referral__popup-text'>
              2. Как только приглашенный сделает первую любую покупку (от 69 р.)
              — будет начислено 20 гб, 10 вам и 10 приглашенному.
            </p>{' '}
            <p className='referral__popup-text'>
              3. Трафик за реферальную программу будет отображаться в разделях
              "Трафик" и "Реферальная программа". В разделе "Трафик" вы можете
              активировать использование бонусных гигабайтов в любой момент
              времени. Они начнут ипользоваться сразу после того, как закончится
              ваш текущий тариф.
            </p>{' '}
            <p className='referral__popup-text'>
              4. Программа действует только, если пользователь ранее не
              регистрировался в нашем сервисе. регистрация — это переход в
              телеграм на robo (запуск бота).
            </p>
            <AppButton
              text='Понятно'
              currentClass='app-button-popup-referral'
              handler={() => setIsReferPopupHidden(true)}
            />
          </>
        }
      </Popup>
    </section>
  );
}

export default Referral;
