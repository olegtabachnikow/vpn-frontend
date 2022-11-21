import React from 'react';
import './Balance.css';
import checboxTrue from '../../images/checkbox-checked.svg';
import checkboxFalse from '../../images/checkbox-not-checked.svg';
import AppButton from '../AppButton/AppButton';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';

function Balance() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  const [numValue, setNumValue] = React.useState('200');
  function handleValue(val) {
    value === val ? setValue(0) : setValue(val);
  }
  return (
    <section className='balance'>
      <BackButton
        text='Мой VPN'
        path='/my-vpn'
        currentClass='back-button-balance'
      />
      <div className='balance__row'>
        <h2 className='balance__title'>
          Cписывать с баланса (выберите с валюты или с Гб), когда закончится
          текущий тариф.
        </h2>
        <div className='balance__box'>
          <div className='balance__item'>
            <div className='balance__current'>
              <span className='balance__current-text'>Внесенная сумма</span>
              <span className='balance__current-value'>600 ₽</span>
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
              <span>Списать с валюты</span>
            </button>
          </div>
          <div className='balance__item'>
            <div className='balance__current'>
              <span className='balance__current-text'>
                Заработаные гигабайты{' '}
              </span>
              <span className='balance__current-value'>10 гБ</span>
            </div>
            <button
              onClick={() => handleValue(2)}
              className='balance__button'
              type='button'
            >
              <img
                src={value === 2 ? checboxTrue : checkboxFalse}
                alt='checkbox'
              />
              <span>Списать с Гб</span>
            </button>
          </div>
        </div>
      </div>
      <div className='balance__row'>
        <h3 className='balance__subtitle'>Или внесите сумму на ваш баланс</h3>
        <input
          className='balance__sum-input'
          onChange={(e) => setNumValue(e.target.value)}
          type='number'
          value={numValue}
          placeholder='200'
        />
        <span className='balance__sum-cash-value'>₽</span>
        <div className='balance__button-box'>
          <AppButton
            text='Заработать'
            currentClass='balance__button-secondary'
          />
          <AppButton text='Пополнить' currentClass='balance__button-primary' />
        </div>
        <p className='balance__tips'>
          Вы можете пополнить баланс и увеличить трафик или заработать Гб с
          помощью{' '}
          <span
            onClick={() => navigate('/referral')}
            className='balance__tips-link'
          >
            реферальной программы
          </span>
          .
        </p>
      </div>
    </section>
  );
}

export default Balance;
