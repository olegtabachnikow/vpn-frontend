import React from 'react';
import './Tariffes.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import { useSelector } from 'react-redux';
import { setDirection, setPayment } from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import TariffFree from '../TariffFree/TariffFree';
import TariffFit from '../TariffFit/TariffFit';
import TariffNolimit from '../TariffNolimit/TariffNolimit';
import TariffesList from '../TariffesList/TariffesList';
import TariffesTemplatePopup from '../TariffesTemplatePopup/TariffesTemplatePopup';
import { parseTimestamp } from '../../utils/helpers';

function Tariffes() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [isHidden, setIsHidden] = React.useState(true);
  const [isRecommendHidden, setIsRecommendHidden] = React.useState(true);
  const [isGbHidden, setIsGbHidden] = React.useState(true);
  const [isFreeInfoHidden, setIsFreeInfoHidden] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const direction = useSelector((state) => state.direction);
  const currentUser = useSelector((state) => state.currentUser);

  React.useEffect(() => {
    location.pathname === '/tariffes' && setValue('');
  }, [location]);

  function handleError(text) {
    setError(text);
    setTimeout(() => setError(''), 5000);
  }
  function handleRedirectAndPayment() {
    if (
      value === 'fit' ||
      value === 'free' ||
      value === 'nolimit' ||
      value === ''
    ) {
      handleError('Выберите пакет!');
      return;
    } else {
      setDirection(true);
      setPayment(parseInt(value));
      navigate('/payment');
    }
  }
  return (
    <>
      <motion.section
        className='tariffes'
        initial={direction ? 'fromLeft' : 'fromRight'}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.2, delay: 0.2 },
        }}
        exit={direction ? 'exitToRight' : 'exitToLeft'}
        variants={directionVariants}
      >
        {location.pathname === '/tariffes' && (
          <BackButton
            path={-1}
            text='Назад'
            currentClass='wide'
            title='Тарифы'
          />
        )}
        <BurgerMenu color='#348FF3' />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <TariffesList
                value={value}
                setValue={setValue}
                error={error}
                handleError={handleError}
              />
            }
          />
          <Route
            path='/free'
            element={
              <TariffFree
                setIsHidden={setIsHidden}
                setIsFreeInfoHidden={setIsFreeInfoHidden}
              />
            }
          />
          <Route
            path='/fit'
            element={
              <TariffFit
                handler={handleRedirectAndPayment}
                value={value}
                setValue={setValue}
                error={error}
                setIsHidden={setIsHidden}
                setIsGbHidden={setIsGbHidden}
                setIsRecommendHidden={setIsRecommendHidden}
              />
            }
          />
          <Route
            path='/nolimit'
            element={
              <TariffNolimit
                handler={handleRedirectAndPayment}
                error={error}
                value={value}
                setValue={setValue}
                setIsHidden={setIsHidden}
              />
            }
          />
        </Routes>
      </motion.section>
      <TariffesTemplatePopup
        isHidden={isHidden}
        setIsHidden={setIsHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
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
      </TariffesTemplatePopup>
      <TariffesTemplatePopup
        isHidden={isFreeInfoHidden}
        setIsHidden={setIsFreeInfoHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
        buttonText={'А у меня...5 или 10 Гб?'}
      >
        <div className='tariffes__free-widget-info'>
          <p className='tariffes__free-widget-info-text'>
            — В этом месяце: вы получили:{' '}
            <span className='tariffes__free-widget-info-text_bold'>
              {currentUser.extra5gb ? 10 : 5} Гб
            </span>
          </p>
          <p className='tariffes__free-widget-info-text'>
            — Новые 5 Гб:{' '}
            <span className='tariffes__free-widget-info-text_bold'>
              {parseTimestamp(currentUser.freeUpdateDate)} (осталось{' '}
              {currentUser.freeUpdateDays}
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
      <TariffesTemplatePopup
        isHidden={isRecommendHidden}
        setIsHidden={setIsRecommendHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
        buttonText={'Рекомендуем — это?'}
      >
        <p className='tariffes-template-popup__info-text'>
          Берем среднее потребление за 5 прошедших дней. Берем ваши оставшиеся
          Гб. Берем дату обновления бесплатного трафика. Считаем, какой пакет
          вам подойдет. Можете сами посчитать, в разделе Трафик, кстати.
        </p>
      </TariffesTemplatePopup>
      <TariffesTemplatePopup
        isHidden={isGbHidden}
        setIsHidden={setIsGbHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
        buttonText={'+ 10 Гб — это?'}
      >
        <p className='tariffes-template-popup__info-text'>
          На тарифах FREE и FIT мы начисляем 10 Гб один раз в месяц, если вы
          совершаете хотя бы одну покупку. Так же, начиная со второго месяца
          функция «Умный впн», в том числе доступ к рф сайтам из-за рубежа —
          доступна только у пользователей FIT или NOLIMT.
        </p>
      </TariffesTemplatePopup>
    </>
  );
}

export default Tariffes;
