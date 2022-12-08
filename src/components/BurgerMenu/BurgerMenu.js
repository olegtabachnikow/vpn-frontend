import React from 'react';
import './BurgerMenu.css';
import { motion, useCycle } from 'framer-motion';
import BurgerMenuNav from '../BurgerMenuNav/BurgerMenuNav';
import PropTypes from 'prop-types';

const menuVariants = {
  open: {
    clipPath: `circle(1000px at 100% 0px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0px at 100% 0px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

function BurgerMenu({ color }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const [isActive, setIsActive] = React.useState(false);

  const Path = (props) => (
    <motion.path
      fill='transparent'
      strokeWidth='3'
      stroke={isActive ? '#348ff3' : color}
      strokeLinecap='round'
      {...props}
    />
  );
  return (
    <motion.nav
      className={`burger-menu ${isActive ? 'active' : ''}`}
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
    >
      <motion.div className='burger-menu__background' variants={menuVariants} />
      <button
        className='burger-menu__button'
        onClick={(e) => {
          e.stopPropagation();
          setIsActive((state) => !state);
          toggleOpen();
        }}
      >
        <svg width='23' height='23' viewBox='0 0 23 23'>
          <Path
            variants={{
              closed: { d: 'M 2 2.5 L 20 2.5' },
              open: { d: 'M 3 16.5 L 17 2.5' },
            }}
          />
          <Path
            d='M 2 9.423 L 20 9.423'
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            transition={{ duration: 0.1 }}
          />
          <Path
            variants={{
              closed: { d: 'M 2 16.346 L 20 16.346' },
              open: { d: 'M 3 2.5 L 17 16.346' },
            }}
          />
        </svg>
      </button>
      <BurgerMenuNav toggleOpen={toggleOpen} setIsActive={setIsActive} />
    </motion.nav>
  );
}

BurgerMenu.propTypes = {
  color: PropTypes.string,
};
export default BurgerMenu;
