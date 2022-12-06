import React from 'react';
import './TariffesTemplate.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import TariffesTemplatePopup from '../TariffesTemplatePopup/TariffesTemplatePopup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function TariffesTemplate({
  currentClass,
  buttonText,
  handler,
  children,
  error,
}) {
  const [isHidden, setIsHidden] = React.useState(true);
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);
  return (
    <section className={`tariffes-template ${currentClass}`}>
      <BackButton
        text='Назад'
        title={'Тариф: ' + currentClass.toUpperCase()}
        path={-1}
        currentClass='back-button-tariffes-template'
      />
      {currentClass === 'free' && currentUser.tariff === 'NOLIMIT' ? (
        <span className='tariffes-list__current-title'>
          Ваш тариф: {currentUser.tariff}
          <br />
          {currentUser.tariff === 'NOLIMIT'
            ? 'Активен до ' + currentUser.endDate
            : null}
        </span>
      ) : null}
      {currentClass === 'nolimit' ? (
        <span className='tariffes-list__current-title'>
          Ваш тариф: {currentUser.tariff}
          <br />
          {currentUser.tariff === 'NOLIMIT'
            ? 'Активен до ' + currentUser.endDate
            : null}
          {currentUser.tariff === 'FIT'
            ? 'Хватит до ' + currentUser.endDate
            : null}
        </span>
      ) : null}
      <div className='tariffes-template__content'>{children}</div>
      <div className='tariffes-template__content-secondary'>
        <button
          className={`tariffes-template__content-button ${currentClass} ${
            isHidden ? '' : 'hidden'
          }`}
          onClick={() => setIsHidden(false)}
        >
          Почему robo?{' '}
          <span
            className={`tariffes-template__content-button-arrow ${currentClass}`}
          />
        </button>
        <TariffesTemplatePopup
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          currentClass={currentClass}
        />
        <span className='tariffes__error'>{error}</span>
        {currentClass === 'free' ? (
          <AppButton
            text='Пополнить Гб'
            handler={() => navigate('/tariffes/fit')}
            currentClass={`${currentClass} margin-bottom`}
          />
        ) : null}
        <AppButton
          text={buttonText}
          handler={handler}
          currentClass={currentClass}
        />
      </div>
    </section>
  );
}

export default TariffesTemplate;
