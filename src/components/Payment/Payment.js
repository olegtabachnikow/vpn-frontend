import React from 'react';
import './Payment.css';
import BackButton from '../BackButton/BackButton';
import PaymentsEmailForm from '../PaymentsEmailForm/PaymentsEmailForm';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import AppButton from '../AppButton/AppButton';
import { getPaymentLink, payWithBalance } from '../../utils/roboApi';
import { setCurrentUser, setPaymentUrl } from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import useAnalyticsEventTracker from '../../hooks/useAnanlyticsEventTracker';
import { useNavigate } from 'react-router-dom';
import { translations } from '../../utils/translations/translations';
import PreloaderOnRequest from '../PreloaderOnRequest/PreloaderOnRequest';

function Payment() {
  const payment = useSelector((state) => state.payment);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const paymentUrl = useSelector((state) => state.paymentUrl);
  const nextTariff = useSelector((state) => state.nextTariff);
  const [withBalance, setWithBalance] = React.useState(false);
  const [method, setMethod] = React.useState('');
  const [isLoaded, setIsLoaded] = React.useState(false);
  const navigate = useNavigate();
  const gaEventTracker = useAnalyticsEventTracker('payment');

  function handlePay() {
    setIsLoaded(true);
    const balanceInUse = withBalance ? 1 : 0;
    gaEventTracker('click', 'payment button click');
    if (withBalance && currentUser.balance > payment) {
      payWithBalance(currentUser.userId, payment.toString(), nextTariff)
        .then((res) => {
          setIsLoaded(false);
          setCurrentUser(res);
          navigate(paymentUrl);
          setPaymentUrl('success');
        })
        .catch(() => navigate('/error'));
    } else {
      getPaymentLink(
        currentUser.userId,
        payment.toString(),
        paymentUrl,
        balanceInUse,
        nextTariff
      )
        .then((res) => {
          window.location.href = res;
          setPaymentUrl('success');
          setIsLoaded(false);
        })
        .catch(() => navigate('/error'));
    }
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
        title={translations.ru.textTips.paymentOptions}
        currentClass='wide'
      />
      {!currentUser.email && !currentUser.email.length ? (
        <PaymentsEmailForm />
      ) : (
        <>
          {isLoaded ? (
            <PreloaderOnRequest />
          ) : (
            <>
              <div className='payment__methods'>
                <FormLabel
                  name='method'
                  currentClass='form-label__method'
                  title={translations.ru.payment.paymentCardTitle}
                  text={translations.ru.payment.paymentCardText}
                  elementValue='card'
                  handler={(data) => setMethod(data)}
                  defaultChecked={true}
                />
                <FormLabel
                  name='method'
                  currentClass='form-label__method disabled'
                  title={translations.ru.payment.paymentCryptoTitle}
                  text={translations.ru.payment.paymentCryptoText}
                  elementValue='crypto'
                  handler={(data) => setMethod(data)}
                  disabled={true}
                />
                <motion.label
                  className='form-label__method checkbox'
                  whileTap={{ scale: 0.95 }}
                >
                  <span className='form-label__title form-label__title_moved'>
                    {translations.ru.payment.paymentBalanceTitle}
                  </span>
                  <span className='form-label__text-secondary'>
                    {translations.ru.payment.paymentBalanceText +
                      currentUser.balance +
                      translations.ru.textTips.currency}
                  </span>
                  <input
                    className='form-label__radio-input checkbox'
                    type='checkbox'
                    checked={withBalance}
                    onChange={() => setWithBalance((state) => !state)}
                  />
                </motion.label>
              </div>
              <div className='payment__button-box'>
                <div className='payment__value'>
                  <span className='payment__value-title'>
                    {translations.ru.payment.toPay}
                  </span>
                  <span className='payment__value-data'>
                    {withBalance
                      ? currentUser.balance > payment
                        ? 0 + translations.ru.textTips.currency
                        : payment -
                          currentUser.balance +
                          translations.ru.textTips.currency
                      : payment + translations.ru.textTips.currency}
                  </span>
                </div>
                <AppButton
                  currentClass='primary white bg-dark-blue margin-top'
                  text={translations.ru.appButton.pay}
                  handler={handlePay}
                />
              </div>
            </>
          )}
        </>
      )}
    </motion.section>
  );
}

export default Payment;
