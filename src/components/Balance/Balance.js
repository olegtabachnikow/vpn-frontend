import React from 'react';
import './Balance.css';
import checboxTrue from '../../images/checkbox-checked.svg';
import checkboxFalse from '../../images/checkbox-not-checked.svg';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import {
  setDirection,
  setPayment,
  setCurrentUser,
} from '../../redux/actions/actions';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { setRadioBalance } from '../../utils/roboApi';
import { translations } from '../../utils/translations/translations';

function Balance() {
  const [value, setValue] = React.useState(0);
  const [isFocused, setIsFocused] = React.useState(false);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const navigate = useNavigate();
  const [numValue, setNumValue] = React.useState('200');

  function handleValue(val) {
    setRadioBalance(currentUser.userId, val)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.log(err));
  }
  function handleSubmit() {
    setDirection(true);
    setPayment(numValue * 1);
    navigate('/payment');
  }
  React.useEffect(() => {
    currentUser.radioBalance === 0 ? setValue(0) : setValue(1);
  }, [currentUser.radioBalance]);

  return (
    <motion.section
      className='balance'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--white)' />
      <BackButton text='Назад' path={-1} currentClass='white' title='Баланс' />
      <div className='balance__row'>
        <h2 className='balance__title'>{translations.ru.balance.title}</h2>
        <div className='balance__box'>
          <div className='balance__item'>
            <div className='balance__current'>
              <span className='balance__current-text'>
                {translations.ru.balance.subtitle}
              </span>
              <span className='balance__current-value'>
                {currentUser.balance + translations.ru.textTips.currency}
              </span>
            </div>
            <button
              onClick={() => handleValue(0)}
              className='balance__button'
              type='button'
            >
              <img
                src={value === 0 ? checboxTrue : checkboxFalse}
                alt='checkbox'
              />
              <span>{translations.ru.balance.takeFromBalance}</span>
            </button>
          </div>
          <div className='balance__item'>
            <div className='balance__current'>
              <span className='balance__current-text'>
                {translations.ru.balance.recievedGb}
              </span>
              <span className='balance__current-value'>
                {currentUser.refBalance + translations.ru.textTips.gb}
              </span>
            </div>
            <button
              onClick={() => handleValue(1)}
              className='balance__button'
              type='button'
            >
              <img
                src={value === 1 ? checboxTrue : checkboxFalse}
                alt='checkbox'
              />
              <span>{translations.ru.balance.takeFromGb}</span>
            </button>
          </div>
        </div>
      </div>
      <div className={`balance__row-input-box ${isFocused && 'focused'}`}>
        <h3 className='balance__subtitle'>
          {translations.ru.balance.inputTitle}
        </h3>
        <div className='balance__input-container'>
          <input
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className='balance__sum-input'
            onChange={(e) => setNumValue(e.target.value)}
            type='text'
            inputMode='numeric'
            value={numValue}
            placeholder='200'
          />
          <span className='balance__sum-cash-value'>
            {translations.ru.textTips.currency}
          </span>
        </div>
        <div className='balance__button-box'>
          <AppButton
            text={translations.ru.appButton.earn}
            currentClass='secondary narrow white'
            handler={() => {
              setDirection(true);
              navigate('/referral');
            }}
          />
          <AppButton
            text={translations.ru.appButton.fill}
            currentClass='primary orange narrow'
            handler={handleSubmit}
          />
        </div>
      </div>
      <p className='balance__tips'>
        {translations.ru.balance.balanceTip}
        <span
          onClick={() => navigate('/referral')}
          className='balance__tips-link'
        >
          {translations.ru.balance.balanceTipLink}
        </span>
      </p>
    </motion.section>
  );
}

export default Balance;
