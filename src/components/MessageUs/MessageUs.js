import React from 'react';
import './MessageUs.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import { useSelector } from 'react-redux';
import { setDirection } from '../../redux/actions/actions';

function MessageUs() {
  const navigate = useNavigate();
  const direction = useSelector((state) => state.direction);
  return (
    <motion.section
      className='message-us'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BackButton
        path='/help'
        text='Мне не понятно'
        currentClass='white'
        title='Напишите нам'
      />
      <p className='message-us__text_main'>
        Персональная поддержка доступна только на тарифе NOLIMIT. Однако мы рады
        любому конструктивному фидбеку или предложению.
      </p>
      <p className='message-us__text_secondary'>
        Вы всегда можете написать нам на почту{' '}
        <span
          onClick={() => window.open('mailto:care@getrobovpn.com')}
          className='message-us__link'
        >
          care@getrobovpn.com.
        </span>
      </p>
      <AppButton
        text='Все тарифы'
        handler={() => {
          setDirection(true);
          navigate('/tariffes');
        }}
        currentClass='orange primary'
      />
    </motion.section>
  );
}

export default MessageUs;
