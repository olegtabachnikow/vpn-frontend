import React from 'react';
import './PreloaderOnRequest.css';

function PreloaderOnRequest() {
  return (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default PreloaderOnRequest;
