import React from 'react';
import './Support.css';
import AppButton from '../AppButton/AppButton';
import BackButton from '../BackButton/BackButton';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

function Support() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);
  const isNoLimit = currentUser.tariff === 'NOLIMIT';
  return (
    <motion.section
      className='support'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <BackButton
        text='Мой VPN'
        path='/my-vpn'
        currentClass='white'
        title='Саппорт'
      />
      <div className='support__text-container'>
        {isNoLimit ? (
          <>
            <p className='support__text'>
              Здесь вы можете позвать оператора службы Заботы в телеграм чат с
              robo. Напишите все вопросы, мы ответим в течение суток.{' '}
            </p>
            <p className='support__text'>
              Возможно, вам поможет раздел{' '}
              <span onClick={() => navigate('/faq')} className='support__link'>
                FAQ
              </span>
              .
            </p>
          </>
        ) : (
          <>
            <p className='support__text'>
              В целях сохранения доступных цен и бесплатного трафика — мы
              сохранили опцию поддержки в чате только для пользователей
              безлимитного тарифа.
            </p>
            <p className='support__text'>Надеемся, на понимание.</p>
          </>
        )}
      </div>
      {!isNoLimit && (
        <>
          <AppButton
            text='Все тарифы'
            currentClass='primary blue wide'
            handler={() => navigate('/tariffes')}
          />
          <AppButton
            text='FAQ'
            currentClass='primary blue wide margin-top'
            handler={() => navigate('/faq')}
          />
        </>
      )}
      <AppButton
        text={isNoLimit ? 'Позвать оператора' : `Саппорт чат`}
        currentClass={`primary blue wide margin-top ${
          !isNoLimit ? 'support-disabled' : ''
        }`}
        handler={() => (window.location.href = 'https://t.me/b0ringclub')}
      />
    </motion.section>
  );
}

export default Support;
