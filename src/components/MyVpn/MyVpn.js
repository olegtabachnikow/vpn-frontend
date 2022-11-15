import React from 'react';
import './MyVpn.css';
import MenuButton from '../MenuButton/MenuButton';
import MenuLink from '../MenuLink/MenuLink';
import BackButton from '../BackButton/BackButton';
import balanceIcon from '../../images/balance.png';
import trafficIcon from '../../images/traffic.png';
import referralIcon from '../../images/referral.png';
import supportIcon from '../../images/support.png';
import opetionsIcon from '../../images/options.png';

function MyVpn() {
  return (
    <section className='my-vpn'>
      <BackButton path='/' text='Мой VPN' currentClass='btn-my-vpn' />
      <div className='my-vpn__button-container'>
        <MenuButton
          image={balanceIcon}
          currentClass='btn-balance'
          title='Баланс'
          text={'Пополнить или потратить'}
          addText={null}
        />
        <MenuLink
          path='/referral'
          image={referralIcon}
          currentClass='btn-referrals'
          title='Реферальная
          программа'
          text={'10+10 Гб'}
          addText={null}
        />
        <MenuButton
          image={trafficIcon}
          currentClass='btn-traffic'
          title='Трафик'
          text={'Оставшиеся Гб'}
          addText={null}
        />
        <MenuButton
          image={supportIcon}
          currentClass='btn-support'
          title='Саппорт'
          text={'Напишите нам'}
          addText={null}
        />
      </div>
      <MenuButton
        image={opetionsIcon}
        currentClass='btn-options'
        title='Настройки подписки'
        text={'Тариф: NO LIMIT'}
        addText={'Активен до 20.12.22'}
      />
    </section>
  );
}

export default MyVpn;
