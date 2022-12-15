import React from 'react';
import './Payment.css';
import BackButton from '../BackButton/BackButton';
import PaymentsEmailForm from '../PaymentsEmailForm/PaymentsEmailForm';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import AppButton from '../AppButton/AppButton';
import { getPaymentLink } from '../../utils/roboApi';
import { setPaymentUrl } from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import useAnalyticsEventTracker from '../../hooks/useAnanlyticsEventTracker';

function Payment() {
  const payment = useSelector((state) => state.payment);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const paymentUrl = useSelector((state) => state.paymentUrl);
  const [withBalance, setWithBalance] = React.useState(false);
  const [method, setMethod] = React.useState('');
  const gaEventTracker = useAnalyticsEventTracker('payment');

  function handlePay() {
    gaEventTracker('click', 'payment button click');
    getPaymentLink(currentUser.userId, payment.toString(), paymentUrl)
      .then((res) => {
        window.location.href = res;
        setPaymentUrl('success');
      })
      .catch((err) => console.log(err));
  }
  return (
    <motion.section
      className='payment'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BackButton
        path={-1}
        text=''
        title='Способы оплаты'
        currentClass='wide'
      />
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
              currentClass='form-label__method disabled'
              title='Крипта (в разработке)'
              text='Биткоин и другие'
              elementValue='crypto'
              handler={(data) => setMethod(data)}
              disabled={true}
            />
            <FormLabel
              name='balance'
              currentClass='form-label__method'
              title='Оплатить за счет баланса'
              text={`На вашем балансе ${currentUser.balance} ₽`}
              elementValue='balance'
              handler={() => setWithBalance(true)}
            />
          </div>
          <div className='payment__button-box'>
            <div className='payment__value'>
              <span className='payment__value-title'>К оплате</span>
              <span className='payment__value-data'>
                {withBalance
                  ? currentUser.balance > payment
                    ? 0
                    : payment - currentUser.balance
                  : payment}{' '}
                ₽
              </span>
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
