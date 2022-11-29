import React from 'react';
import './Main.css';
import MenuButton from '../MenuButton/MenuButton';
import glassesIcon from '../../images/smile-min.png';
import moneyIcon from '../../images/winged-money-min.png';
import loveSmileIcon from '../../images/love-smile-min.png';
import letterIcon from '../../images/letter-min.png';
import weirdSmileIcon from '../../images/look-up-smile-min.png';
import robotIcon from '../../images/robot-min.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Main({ testSetter }) {
  const currentUser = useSelector((state) => state.currentUser);
  const navigate = useNavigate();
  return (
    <section className='main'>
      <div className='main__button-container'>
        <MenuButton
          handler={() => navigate('/my-vpn')}
          image={glassesIcon}
          currentClass='btn-my-vpn'
          title='Мой VPN'
          text={`Тариф: ${currentUser.tariff}`}
          addText={`${
            currentUser.tariff === 'NOLIMIT' ? 'Активен' : 'Хватит'
          } до ${currentUser.endDate}`}
        />
        <MenuButton
          handler={() => navigate('/help')}
          image={weirdSmileIcon}
          currentClass='btn-not-understand'
          title='Мне не понятно'
          text={'Возможности, FAQ, новости'}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/instruction')}
          image={robotIcon}
          currentClass='btn-robot'
          title='Ключ доступа к Outline'
          text={'Инструкция по установке'}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/referral')}
          image={loveSmileIcon}
          currentClass='btn-referral'
          title='Реферальная программа'
          text={'10+10 Гб'}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/gift')}
          image={letterIcon}
          currentClass='btn-gift'
          title='Подарить VPN'
          text={'На связи с близкими'}
          addText={null}
        />
      </div>
      <MenuButton
        handler={() => navigate('/tariffes')}
        image={moneyIcon}
        currentClass='btn-tariffes'
        title='Тарифы'
        text={'Цены, акции'}
        addText={null}
      />
      <div className='test-user-set'>
        <button onClick={() => testSetter('FREE')}>free</button>
        <button onClick={() => testSetter('FIT')}>fit</button>
        <button onClick={() => testSetter('NOLIMIT')}>nolimit</button>
      </div>
    </section>
  );
}

export default Main;
