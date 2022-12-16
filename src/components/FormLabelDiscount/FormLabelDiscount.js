import React from 'react';
import './FormLabelDiscount.css';
import { useLocation } from 'react-router-dom';

function FormLabelDiscount({ item }) {
  const location = useLocation();
  return (
    <span
      className={`form-label-discount ${location.pathname.replace(
        '/tariffes/',
        ''
      )} ${item === 'Рекомендуем' && 'recomended'}`}
    >
      {item}
    </span>
  );
}

export default FormLabelDiscount;
