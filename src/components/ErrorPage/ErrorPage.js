import React from 'react';
import './ErrorPage.css';
import errorRoboImage from '../../images/error-robo.svg';
import { motion } from 'framer-motion';

function ErrorPage() {
  return (
    <section className='error-page'>
      <motion.img
        animate={{
          rotate: [-10, 10, -10],
          translate: ['7px', '-7px', '7px'],
          transition: { duration: 2, repeat: Infinity },
        }}
        className='error-page__image'
        src={errorRoboImage}
        alt='error face'
      />
      <h1 className='error-page__title'>Упс, скоро поправим!</h1>
      <p className='error-page__text'>
        В приложении тех. работы,
        <br /> если вы пострадали — <br /> пожалуйста, напишите
        <br /> нам{' '}
        <span
          onClick={() => window.open('mailto:care@getrobovpn.com')}
          className='error-page__link'
        >
          care@getrobovpn.com.
        </span>
      </p>
    </section>
  );
}

export default ErrorPage;
