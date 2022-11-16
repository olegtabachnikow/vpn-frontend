import React from 'react';
import './DataList.css';

function DataList({ currentClass, children, component }) {
  return (
    <>
      <div className='data-list-container'>
        <div className={`data-list-overlay ${currentClass}-overlay`}></div>
        <ul className={`data-list ${currentClass && currentClass}`}>
          {children}
        </ul>
      </div>
      {component}
    </>
  );
}

export default DataList;
