import React from 'react';
import './DataList.css';

function DataList({ currentClass, children }) {
  return (
    <div className='data-list-container'>
      <div className={`data-list-overlay ${currentClass}-overlay`}></div>
      <ul className={`data-list ${currentClass && currentClass}`}>
        {children}
      </ul>
    </div>
  );
}

export default DataList;
