import React from 'react';
import './Payment.css';
import BackButton from '../BackButton/BackButton';
import PaymentsEmailForm from '../PaymentsEmailForm/PaymentsEmailForm';

function Payment() {
  return (
    <section className='payment'>
      <BackButton
        path={-1}
        text='Вернуться назад'
        currentClass='back-button-payment'
      />
      <PaymentsEmailForm />
    </section>
  );
}

export default Payment;
