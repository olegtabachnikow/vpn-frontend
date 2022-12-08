import React, { useRef } from 'react';
import './DataItem.css';
import PropTypes from 'prop-types';

function DataItem({ title, children, index, currentIndex, setIndex }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const itemRef = useRef(null);
  function handleClick() {
    index === currentIndex ? setIndex(0) : setIndex(currentIndex);
    itemRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  }
  React.useEffect(() => {
    index === currentIndex ? setIsExpanded(true) : setIsExpanded(false);
  }, [index, currentIndex]);
  return (
    <li
      ref={itemRef}
      className={`data-item ${isExpanded && 'data-item_expanded'}`}
    >
      <div className='data-item__content'>
        <button
          type='button'
          onClick={handleClick}
          className='data-item__button'
        >
          <span className='data-item__button-text'>{title}</span>
          <span
            className={`data-item__arrow ${
              isExpanded && 'data-item__arrow_rotated'
            }`}
          ></span>
        </button>
        {isExpanded && children}
      </div>
    </li>
  );
}
DataItem.propTypes = {
  title: PropTypes.string.isRequired,
  setIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default DataItem;
