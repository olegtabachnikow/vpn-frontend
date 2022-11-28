import React from 'react';
import './MyVpn.css';
import MenuButton from '../MenuButton/MenuButton';
import BackButton from '../BackButton/BackButton';
import balanceIcon from '../../images/balance.png';
import trafficIcon from '../../images/traffic.png';
import referralIcon from '../../images/referral.png';
import supportIcon from '../../images/support.png';
import happySmile from '../../images/values.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function MyVpn() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);

  return (
    <section className='my-vpn'>
      <BackButton path='/' text='Главное меню' currentClass='' />
      <div className='my-vpn__button-container'>
        <MenuButton
          handler={() => navigate('/balance')}
          image={balanceIcon}
          currentClass='btn-balance'
          title='Баланс'
          text={'Пополнить или потратить'}
          addText={null}
        />
        <MenuButton
          handler={() => navigate('/referral')}
          image={referralIcon}
          currentClass='btn-referrals'
          title='Реферальная
          программа'
          text={'10+10 Гб'}
          addText={null}
        />
        <MenuButton
          image={trafficIcon}
          handler={() => navigate('/traffic')}
          currentClass='btn-traffic'
          title='Трафик'
          text={'Оставшиеся Гб'}
          addText={null}
        />
        <MenuButton
          image={supportIcon}
          handler={() => navigate('/support')}
          currentClass='btn-support'
          title='Саппорт'
          text={'Напишите нам'}
          addText={null}
        />
      </div>
      <MenuButton
        image={happySmile}
        currentClass='btn-options'
        title='Мой тариф'
        text={`Тариф: ${currentUser.tariff}`}
        addText={`Активен до ${currentUser.endDate}`}
        handler={() => navigate('/subscription')}
      />
    </section>
  );
}

export default MyVpn;
