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

function Tariffes() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const direction = useSelector((state) => state.direction);

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
    <motion.section
      className='tariffes'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      {location.pathname === '/tariffes' && (
        <BackButton path={-1} text='Назад' currentClass='wide' title='Тарифы' />
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
        <Route path='/free' element={<TariffFree />} />
        <Route
          path='/fit'
          element={
            <TariffFit
              handler={handleRedirectAndPayment}
              value={value}
              setValue={setValue}
              error={error}
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
            />
          }
        />
      </Routes>
    </motion.section>
  );
}

export default Tariffes;
