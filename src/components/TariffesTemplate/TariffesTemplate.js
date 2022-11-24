import React from 'react';
import './TariffesTemplate.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';

function TariffesTemplate({
  currentClass,
  buttonText,
  handler,
  children,
  error,
}) {
  return (
    <section className={`tariffes-template ${currentClass}`}>
      <BackButton
        text='Тарифы'
        path={-1}
        currentClass='back-button-tariffes-template'
      />
      <div className='tariffes-template__content'>{children}</div>
      <div className={`tariffes-template__info ${currentClass}`}>
        <h2 className='tariffes-template__info-title'>Почему robo?</h2>
        <span className='tariffes-template__info-subtitle'>
          1. Гарантия возврата всегда
        </span>
        <p className='tariffes-template__info-text'>
          Если заблокируют, вернем деньги.
        </p>
        <span className='tariffes-template__info-subtitle'>2. Умный robo</span>
        <p className='tariffes-template__info-text'>
          Доступ к рф сайтам и зарубежным — одним нажатием, и к рф из-за рубежа
        </p>
        <span className='tariffes-template__info-subtitle'>
          3. robo + telegram
        </span>
        <p className='tariffes-template__info-text'>
          Всегда под рукой, алгоритмы сделают vpn незаметным.
        </p>
        <span className='tariffes-template__info-subtitle'>
          4. Secure with Google
        </span>
        <p className='tariffes-template__info-text'>
          Безопаснее (и удобнее) некуда:)
        </p>
        <span className='tariffes-template__info-subtitle'>
          5. Бесплатно до 10 гб
        </span>
        <p className='tariffes-template__info-text'>
          Всем, каждый месяц, без ограничений по скорости.
        </p>
      </div>
      <span className='tariffes__error'>{error}</span>
      <AppButton
        text={buttonText}
        handler={handler}
        currentClass={currentClass}
      />
    </section>
  );
}

export default TariffesTemplate;
