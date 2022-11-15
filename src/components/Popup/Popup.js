import React from 'react';
import './Popup.css';
import ReactSwipeEvents from 'react-swipe-events';

function Popup({ title, currentClass, children, isCurrentHidden, handler }) {
  const tg = window.Telegram.WebApp;
  const [isHidden, setIsHidden] = React.useState(true);
  React.useEffect(() => {
    isCurrentHidden === undefined
      ? setIsHidden(true)
      : setIsHidden(isCurrentHidden);
  }, [isCurrentHidden]);

  function swipeDown() {
    handler && handler();
    !tg.isExpanded && tg.expand();
    !isHidden && setIsHidden(true);
  }
  return (
    <ReactSwipeEvents
      onSwipedDown={swipeDown}
      onSwipedUp={() => isHidden && setIsHidden(false)}
    >
      <>
        <div className={`popup__overlay ${!isHidden && 'active'}`}></div>
        <section
          onClick={() => setIsHidden(false)}
          className={`popup ${!isHidden && 'active'} ${currentClass}`}
        >
          <span className='popup__line'></span>
          <p className={`popup__title ${!isHidden && 'active'}`}>{title}</p>
          <div className={`${isHidden && 'popup__text-container_hidden'}`}>
            {children}
          </div>
        </section>
      </>
    </ReactSwipeEvents>
  );
}

export default Popup;
