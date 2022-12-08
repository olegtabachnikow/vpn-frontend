import React from 'react';
import './Preloader.css';
import roboLogo from '../../images/intro_smile_0.svg';
import { motion } from 'framer-motion';

function Preloader() {
  return (
    <div className='preloader'>
      <motion.img
        initial={{ width: 0, height: 0, y: '50%' }}
        animate={{
          width: '154px',
          height: '154px',
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        className='preloader__image'
        src={roboLogo}
        alt='robo'
      />
    </div>
  );
}

export default Preloader;
