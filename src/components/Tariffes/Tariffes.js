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
import { translations } from '../../utils/translations/translations';

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
      handleError(translations.ru.tariffes.errorPackage);
      return;
    } else {
      setDirection(true);
      currentUser.discount
        ? setPayment(Math.floor(value - (value / 100) * currentUser.discount))
        : setPayment(parseInt(value));
      navigate('/payment');
    }
  }
  return (
    <>
      <motion.section
        className={`tariffes ${location.pathname.replace('/tariffes/', '')}`}
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
            text={translations.ru.backButton}
            currentClass='wide'
            title={translations.ru.textTips.tariffes}
          />
        )}
        <BurgerMenu color='var(--blue)' />
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
        buttonText={translations.ru.tariffes.tariffPopupTitleRobo}
      >
        <span className='tariffes-template-popup__info-subtitle'>
          {translations.ru.tariffes.tariffPopupTextRoboT1}
        </span>
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupTextRoboA1}
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          {translations.ru.tariffes.tariffPopupTextRoboT2}
        </span>
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupTextRoboA2}
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          {translations.ru.tariffes.tariffPopupTextRoboT3}
        </span>
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupTextRoboA3}
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          {translations.ru.tariffes.tariffPopupTextRoboT4}
        </span>
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupTextRoboA4}
        </p>
        <span className='tariffes-template-popup__info-subtitle'>
          {translations.ru.tariffes.tariffPopupTextRoboT5}
        </span>
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupTextRoboA5}
        </p>
      </TariffesTemplatePopup>
      <TariffesTemplatePopup
        isHidden={isFreeInfoHidden}
        setIsHidden={setIsFreeInfoHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
        buttonText={translations.ru.tariffes.tariffPopupTitleFree}
      >
        <div className='tariffes__free-widget-info'>
          <p className='tariffes__free-widget-info-text'>
            {translations.ru.tariffes.tariffPopupTextFreeT1}
            <span className='tariffes__free-widget-info-text_bold'>
              {currentUser.extra5gb ? 10 : 5 + translations.ru.textTips.gb}
            </span>
          </p>
          <p className='tariffes__free-widget-info-text'>
            {translations.ru.tariffes.tariffPopupTextFreeT2}
            <span className='tariffes__free-widget-info-text_bold'>
              {parseTimestamp(currentUser.freeUpdateDate) +
                translations.ru.tariffes.tariffPopupTextFreeT3 +
                currentUser.freeUpdateDays +
                translations.ru.tariffes.tariffPopupTextFreeT4}
            </span>
          </p>
          <p className='tariffes__free-widget-info-text'>
            {translations.ru.tariffes.tariffPopupTextFreeT5 +
              currentUser.trafficPerDay +
              translations.ru.tariffes.tariffPopupTextFreeT6}
          </p>
          <p className='tariffes__free-widget-info-text'>
            {translations.ru.tariffes.tariffPopupTextFreeT7}
            <b>
              {currentUser.trafficMonth ? '' : translations.ru.textTips.not}{' '}
              {translations.ru.textTips.enough}
            </b>{' '}
            {translations.ru.tariffes.tariffPopupTextFreeT8}
          </p>
        </div>
      </TariffesTemplatePopup>
      <TariffesTemplatePopup
        isHidden={isRecommendHidden}
        setIsHidden={setIsRecommendHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
        buttonText={translations.ru.tariffes.tariffPopupTitleReccomend}
      >
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupTextReccomend}
        </p>
      </TariffesTemplatePopup>
      <TariffesTemplatePopup
        isHidden={isGbHidden}
        setIsHidden={setIsGbHidden}
        currentClass={location.pathname.replace('/tariffes/', '')}
        buttonText={translations.ru.tariffes.tariffPopupTitle10gbAbout}
      >
        <p className='tariffes-template-popup__info-text'>
          {translations.ru.tariffes.tariffPopupText10gbAbout}
        </p>
      </TariffesTemplatePopup>
    </>
  );
}

export default Tariffes;
