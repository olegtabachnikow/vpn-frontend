import React from 'react';
import './Payment.css';
import BackButton from '../BackButton/BackButton';
import PaymentsEmailForm from '../PaymentsEmailForm/PaymentsEmailForm';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import AppButton from '../AppButton/AppButton';
import { getPaymentLink } from '../../utils/roboApi';
import { motion } from 'framer-motion';

function Payment() {
  const payment = useSelector((state) => state.payment);
  const currentUser = useSelector((state) => state.currentUser);
  const [method, setMethod] = React.useState('');
  console.log(currentUser);
  function handlePay() {
    console.log(`zoplotili ${payment}₽ :)`);
    getPaymentLink(currentUser.userId, payment.toString())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  return (
    <motion.section
      className='payment'
      initial={{ x: '-100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.3, delay: 0.6 } }}
      exit={{ x: '-100vw', opacity: 0, transition: { duration: 0.3 } }}
    >
      <BackButton path={-1} text='' title='Способы оплаты' currentClass='' />
      {!currentUser.email && !currentUser.email.length ? (
        <PaymentsEmailForm />
      ) : (
        <>
          <div className='payment__methods'>
            <FormLabel
              name='method'
              currentClass='form-label__method'
              title='Банковская карта'
              text='Мир и другие'
              elementValue='card'
              handler={(data) => setMethod(data)}
              defaultChecked={true}
            />
            <FormLabel
              name='method'
              currentClass='form-label__method'
              title='Крипта'
              text='Биткоин и другие'
              elementValue='crypto'
              handler={(data) => setMethod(data)}
            />
            <FormLabel
              name='method'
              currentClass='form-label__method'
              title='Оплатить за счет баланса'
              text={`На вашем балансе ${currentUser.balance} ₽`}
              elementValue='balance'
              handler={(data) => setMethod(data)}
            />
          </div>
          <div className='payment__button-box'>
            <div className='payment__value'>
              <span className='payment__value-title'>К оплате</span>
              <span className='payment__value-data'>{payment} ₽</span>
            </div>
            <AppButton
              currentClass='primary white bg-dark-blue margin-top'
              text='Оплатить'
              handler={handlePay}
            />
          </div>
        </>
      )}
    </motion.section>
  );
}

export default Payment;
