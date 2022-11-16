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
import Popup from '../Popup/Popup';
import Balance from '../Balance/Balance';
import Traffic from '../Traffic/Traffic';
import Support from '../Support/Support';

function MyVpn() {
  const [isBalansePopupHidden, setIsBalansePopupHidden] = React.useState(true);
  const [isTrafficPopupHidden, setIsTrafficPopupHidden] = React.useState(true);
  const [isSupportPopupHidden, setIsSupportPopupHidden] = React.useState(true);

  function closeAllPopups() {
    setIsBalansePopupHidden(true);
    setIsTrafficPopupHidden(true);
    setIsSupportPopupHidden(true);
  }

  React.useEffect(() => {
    closeAllPopups();
  }, []);

  return (
    <section className='my-vpn'>
      <BackButton path='/' text='Мой VPN' currentClass='btn-my-vpn' />
      <div className='my-vpn__button-container'>
        <MenuButton
          handler={() => setIsBalansePopupHidden(false)}
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
          handler={() => setIsTrafficPopupHidden(false)}
          currentClass='btn-traffic'
          title='Трафик'
          text={'Оставшиеся Гб'}
          addText={null}
        />
        <MenuButton
          image={supportIcon}
          handler={() => setIsSupportPopupHidden(false)}
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
      <Popup
        title='Баланс'
        isHidden={isBalansePopupHidden}
        currentClass='popup-balance'
        handleHide={setIsBalansePopupHidden}
      >
        <Balance />
      </Popup>
      <Popup
        title='Трафик'
        isHidden={isTrafficPopupHidden}
        currentClass='popup-traffic'
        handleHide={setIsTrafficPopupHidden}
      >
        <Traffic />
      </Popup>
      <Popup
        title='Саппорт'
        isHidden={isSupportPopupHidden}
        currentClass='popup-support'
        handleHide={setIsSupportPopupHidden}
      >
        <Support />
      </Popup>
    </section>
  );
}

export default MyVpn;
