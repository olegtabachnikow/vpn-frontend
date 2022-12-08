import React from 'react';
import './DataList.css';
import PropTypes from 'prop-types';

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
DataList.propTypes = {
  currentClass: PropTypes.string.isRequired,
};
export default DataList;
