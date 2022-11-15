import React from 'react';
import './Main.css';
import MenuLink from '../MenuLink/MenuLink';
import glassesIcon from '../../images/smile-min.png';
import moneyIcon from '../../images/winged-money-min.png';
import loveSmileIcon from '../../images/love-smile-min.png';
import letterIcon from '../../images/letter-min.png';
import weirdSmileIcon from '../../images/look-up-smile-min.png';
import robotIcon from '../../images/robot-min.png';

function Main() {
  return (
    <section className='main'>
      <div className='main__button-container'>
        <MenuLink
          path='/my-vpn'
          image={glassesIcon}
          currentClass='btn-my-vpn'
          title='Мой VPM'
          text={'Тариф: NO LIMIT'}
          addText={'Активен до 20.12.22'}
        />
        <MenuLink
          path='/help'
          image={weirdSmileIcon}
          currentClass='btn-not-understand'
          title='Мне не
        понятно'
          text={'Возможности, FAQ, новости'}
          addText={null}
        />
        <MenuLink
          path='/'
          image={moneyIcon}
          currentClass='btn-tariffes'
          title='Тарифы'
          text={'Цены, акции'}
          addText={null}
        />
        <MenuLink
          path='/referral'
          image={loveSmileIcon}
          currentClass='btn-referral'
          title='Реферальная
        программа'
          text={'10+10 Гб'}
          addText={null}
        />
        <MenuLink
          path='/gift'
          image={letterIcon}
          currentClass='btn-gift'
          title='Подарить
        VPN'
          text={'На связи с близкими'}
          addText={null}
        />
      </div>
      <MenuLink
        path='/instruction'
        image={robotIcon}
        currentClass='btn-robot'
        title='Ключ доступа к Outline'
        text={'Инструкция по установке'}
        addText={null}
      />
    </section>
  );
}

export default Main;
