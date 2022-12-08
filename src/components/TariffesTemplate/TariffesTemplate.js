import React from 'react';
import './TariffesTemplate.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import TariffesTemplatePopup from '../TariffesTemplatePopup/TariffesTemplatePopup';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { parseTimestamp } from '../../utils/helpers';
import CurrentTariffWidget from '../CurrentTariffWidget/CurrentTariffWidget';
import PropTypes from 'prop-types';

function TariffesTemplate({
  currentClass,
  buttonText,
  handler,
  children,
  error,
}) {
  const [isHidden, setIsHidden] = React.useState(true);
  const [isRecommendHidden, setIsRecommendHidden] = React.useState(true);
  const [isGbHidden, setIsGbHidden] = React.useState(true);
  const [isFreeInfoHidden, setIsFreeInfoHidden] = React.useState(true);

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  return (
    <section className={`tariffes-template ${currentClass}`}>
      <BackButton
        text='Назад'
        title={'Тариф: ' + currentClass.toUpperCase()}
        path={-1}
        currentClass='back-button-tariffes-template'
      />
      <CurrentTariffWidget />
      <div className='tariffes-template__content'>{children}</div>
      <div className='tariffes-template__content-secondary'>
        {currentClass === 'free' ? (
          <button
            className={`tariffes-template__content-button ${currentClass}`}
            onClick={() => setIsFreeInfoHidden(false)}
          >
            А у меня...5 или 10 Гб?{' '}
            <span
              className={`tariffes-template__content-button-arrow ${currentClass}`}
            />
          </button>
        ) : null}
        <button
          className={`tariffes-template__content-button ${currentClass}`}
          onClick={() => setIsHidden(false)}
        >
          Почему robo?{' '}
          <span
            className={`tariffes-template__content-button-arrow ${currentClass}`}
          />
        </button>
        {currentClass === 'fit' ? (
          <>
            <button
              className={`tariffes-template__content-button ${currentClass}`}
              onClick={() => setIsRecommendHidden(false)}
            >
              «Рекомендуем» — это?{' '}
              <span
                className={`tariffes-template__content-button-arrow ${currentClass}`}
              />
            </button>
            <button
              className={`tariffes-template__content-button ${currentClass}`}
              onClick={() => setIsGbHidden(false)}
            >
              «+ 10 Гб» — это?{' '}
              <span
                className={`tariffes-template__content-button-arrow ${currentClass}`}
              />
            </button>
          </>
        ) : null}
        <TariffesTemplatePopup
          isHidden={isHidden}
          setIsHidden={setIsHidden}
          currentClass={currentClass}
          buttonText={'Почему robo?'}
        >
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
            Доступ к рф сайтам и зарубежным — одним нажатием, и к рф из-за
            рубежа
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
        </TariffesTemplatePopup>
        <TariffesTemplatePopup
          isHidden={isFreeInfoHidden}
          setIsHidden={setIsFreeInfoHidden}
          currentClass={currentClass}
          buttonText={'А у меня...5 или 10 Гб?'}
        >
          <div className='tariffes__free-widget-info'>
            <p className='tariffes__free-widget-info-text'>
              — В этом месяце: вы получили:{' '}
              <span className='tariffes__free-widget-info-text_bold'>
                {currentUser.traffic} Гб
              </span>
            </p>
            <p className='tariffes__free-widget-info-text'>
              — Новые 5 Гб:{' '}
              <span className='tariffes__free-widget-info-text_bold'>
                {parseTimestamp(currentUser.endDate)} (осталось{' '}
                {new Date(currentUser.endDate).getDate() -
                  new Date(currentUser.firstDate).getDate()}{' '}
                дней)
              </span>
            </p>
            <p className='tariffes__free-widget-info-text'>
              — В среднем потребляете: {currentUser.trafficPerDay + 'Гб/день'}
            </p>
            <p className='tariffes__free-widget-info-text'>
              robo думает, что трафика{' '}
              <b>{currentUser.trafficMonth ? '' : 'не'} хватит</b> до следующих
              бесплатных Гб
            </p>
          </div>
        </TariffesTemplatePopup>
        {currentClass === 'fit' ? (
          <>
            <TariffesTemplatePopup
              isHidden={isRecommendHidden}
              setIsHidden={setIsRecommendHidden}
              currentClass={currentClass}
              buttonText={'«Рекомендуем» — это?'}
            >
              <p className='tariffes-template-popup__info-text'>
                Берем среднее потребление за 5 прошедших дней. Берем ваши
                оставшиеся Гб. Берем дату обновления бесплатного трафика.
                Считаем, какой пакет вам подойдет. Можете сами посчитать, в
                разделе Трафик, кстати.
              </p>
            </TariffesTemplatePopup>
            <TariffesTemplatePopup
              isHidden={isGbHidden}
              setIsHidden={setIsGbHidden}
              currentClass={currentClass}
              buttonText={'«+ 10 Гб» — это?'}
            >
              <p className='tariffes-template-popup__info-text'>
                На тарифах FREE и FIT мы начисляем 10 Гб один раз в месяц, если
                вы совершаете хотя бы одну покупку. Так же, начиная со второго
                месяца функция «Умный впн», в том числе доступ к рф сайтам из-за
                рубежа — доступна только у пользователей FIT или NOLIMT.
              </p>
            </TariffesTemplatePopup>
          </>
        ) : null}
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
TariffesTemplate.propTypes = {
  currentClass: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
  error: PropTypes.string,
};
export default TariffesTemplate;
