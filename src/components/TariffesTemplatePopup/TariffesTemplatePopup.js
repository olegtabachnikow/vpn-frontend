import React from 'react';
import './TariffesTemplatePopup.css';
import { useNavigate } from 'react-router-dom';

function TariffesTemplatePopup({ currentClass, isHidden, setIsHidden }) {
  const navigate = useNavigate();
  return (
    <div
      className={`tariffes-template-popup ${!isHidden && 'active'}`}
      onClick={() => setIsHidden(true)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`tariffes-template-popup__info ${currentClass}`}
      >
        <button
          onClick={() => setIsHidden(true)}
          className='tariffes-template-popup__info-button'
        >
          Почему robo?
          <span
            className={`tariffes-template-popup__info-button-arrow ${currentClass}`}
          />
        </button>
        <span className='tariffes-template-popup__info-subtitle'>
          1. Гарантия возврата всегда
        </span>
        <p className='tariffes-template-popup__info-text'>
          Если заблокируют, вернем деньги.
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          2. Умный robo
        </span>
        <p className='tariffes-template-popup__info-text'>
          Доступ к рф сайтам и зарубежным — одним нажатием, и к рф из-за рубежа
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          3. robo + telegram
        </span>
        <p className='tariffes-template-popup__info-text'>
          Всегда под рукой, алгоритмы сделают vpn незаметным.
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          4. Secure with Google
        </span>
        <p className='tariffes-template-popup__info-text'>
          Безопаснее (и удобнее) некуда:)
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          5. Бесплатно до 10 гб
        </span>
        <p className='tariffes-template-popup__info-text'>
          Всем, каждый месяц, без ограничений по скорости.
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          6. Как работает рекомендация?
        </span>
        <p className='tariffes-template-popup__info-text'>
          Берем среднее потребление за 5 прошедших дней. Берем ваши оставшиеся
          Гб. Берем дату обновления бесплатного трафика. Считаем, какой пакет
          вам подойдет. Можете сами посчитать, в разделе{' '}
          <span
            onClick={() => {
              setIsHidden(true);
              navigate('/traffic');
            }}
            className='tariffes-template-popup__link'
          >
            Трафик,
          </span>{' '}
          кстати.
        </p>
      </div>
    </div>
  );
}

export default TariffesTemplatePopup;
