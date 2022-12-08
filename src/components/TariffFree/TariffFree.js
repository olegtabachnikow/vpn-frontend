import React from 'react';
import './TariffFree.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import { useNavigate } from 'react-router-dom';
import { setDirection } from '../../redux/actions/actions';

function TariffFree() {
  const navigate = useNavigate();
  return (
    <TariffesTemplate
      currentClass='free'
      buttonText='Пригласить друга'
      handler={() => {
        setDirection(true);
        navigate('/referral');
      }}
    >
      <div className='tariffes__free-content'>
        <h1 className='tariffes__free-title'>5+5=10</h1>
        <div className='tariffes__free-widgets'>
          <div className='tariffes__free-widget_small'>
            <h2 className='tariffes__free-widget-title'>5 Гб</h2>
            <span className='tariffes__free-widget-text'>
              Каждый месяц на тарифах FREE/FIT
            </span>
          </div>
          <div className='tariffes__free-widget_small'>
            <h2 className='tariffes__free-widget-title'>5 Гб</h2>
            <span className='tariffes__free-widget-text'>
              В первый месяц, и со второго, если есть хотя бы одна покупка
            </span>
          </div>
        </div>
      </div>
    </TariffesTemplate>
  );
}

export default TariffFree;
