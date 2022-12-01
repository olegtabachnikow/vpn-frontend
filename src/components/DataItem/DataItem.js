import React from 'react';
import './DataItem.css';

function DataItem({ title, children, index, currentIndex, setIndex }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  function handleClick() {
    index === currentIndex ? setIndex(0) : setIndex(currentIndex);
  }
  React.useEffect(() => {
    index === currentIndex ? setIsExpanded(true) : setIsExpanded(false);
  }, [index, currentIndex]);
  return (
    <li className={`data-item ${isExpanded && 'data-item_expanded'}`}>
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

export default DataItem;
