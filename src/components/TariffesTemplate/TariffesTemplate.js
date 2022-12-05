import React from 'react';
import './TariffesTemplate.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import TariffesTemplatePopup from '../TariffesTemplatePopup/TariffesTemplatePopup';
import { useNavigate } from 'react-router-dom';

function TariffesTemplate({
  currentClass,
  buttonText,
  handler,
  children,
  error,
}) {
  const [isHidden, setIsHidden] = React.useState(true);
  const navigate = useNavigate();
  return (
    <section className={`tariffes-template ${currentClass}`}>
      <BackButton
        text='Назад'
        title={'Тариф: ' + currentClass.toUpperCase()}
        path={-1}
        currentClass='back-button-tariffes-template'
      />
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
        <AppButton
          text={buttonText}
          handler={handler}
          currentClass={currentClass}
        />
        {currentClass === 'fit' ? (
          <AppButton
            text='Посмотреть NO LIMIT'
            handler={() => navigate('/tariffes/nolimit')}
            currentClass={currentClass}
          />
        ) : null}
      </div>
    </section>
  );
}

export default TariffesTemplate;
