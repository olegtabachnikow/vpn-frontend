import React from 'react';
import './DataList.css';

function DataList({ currentClass, children, component }) {
  return (
    <>
      <ul className={`data-list ${currentClass && currentClass}`}>
        {children}
      </ul>
      {component}
    </>
  );
}

export default DataList;
