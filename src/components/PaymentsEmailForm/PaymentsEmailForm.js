import React from 'react';
import './PaymentsEmailForm.css';
import paymentCheckbox from '../../images/payment-checkbox.svg';
import { motion } from 'framer-motion';
import { setUserEmail } from '../../utils/roboApi';
import PreloaderOnRequest from '../PreloaderOnRequest/PreloaderOnRequest';
import { useSelector } from 'react-redux';
import { setCurrentUser } from '../../redux/actions/actions';

function PaymentsEmailForm() {
  const [email, setEmail] = React.useState('');
  const [comparedEmail, setComparedEmail] = React.useState('');
  const [isEmailEqual, setIsEmailEqual] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);
  const currentUser = useSelector((state) => state.currentUser);

  React.useEffect(() => {
    setEmail('');
    setComparedEmail('');
  }, []);

  React.useEffect(() => {
    email.length && email === comparedEmail
      ? setIsEmailEqual(true)
      : setIsEmailEqual(false);
  }, [email, comparedEmail]);

  function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    setUserEmail(currentUser.userId, email)
      .then((res) => {
        setTimeout(handleData, 1000, res);
      })
      .catch((err) => console.log(err));
  }
  function handleData(data) {
    setCurrentUser(data);
    setIsLoading(false);
  }
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const debounce = (fn, delay) => {
    let timerId;
    return (...args) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => fn(...args), delay);
    };
  };
  const debouncedHandlerMain = debounce(
    (evt) => validateEmail(evt.target.value.toLowerCase(), setEmail),
    1000
  );
  const debouncedHandlerSecond = debounce(
    (evt) => validateEmail(evt.target.value.toLowerCase(), setComparedEmail),
    1000
  );
  function validateEmail(str, handler) {
    const emailIsValid = str.match(regex);
    emailIsValid ? handler(emailIsValid[0]) : handler('');
  }
  return (
    <form onSubmit={handleSubmit} className='payments-email-form'>
      {isLoading ? (
        <PreloaderOnRequest />
      ) : (
        <>
          <div className='payments-email-form__input-container'>
            <span className='payments-email-form__input-title'>Ваш e-mail</span>
            <input
              onKeyUp={debouncedHandlerMain}
              className='payments-email-form__input'
              type='email'
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
            />
            <img
              src={paymentCheckbox}
              alt='checked'
              className={`payments-email-form__icon ${email && 'enabled'}`}
            />
          </div>
          <div className='payments-email-form__input-container'>
            <span className='payments-email-form__input-title'>
              Подтвердите e-mail
            </span>
            <input
              onKeyUp={debouncedHandlerSecond}
              className='payments-email-form__input'
              type='email'
              onCopy={(e) => e.preventDefault()}
              onPaste={(e) => e.preventDefault()}
              onCut={(e) => e.preventDefault()}
            />
            <img
              src={paymentCheckbox}
              alt='checked'
              className={`payments-email-form__icon ${
                comparedEmail && isEmailEqual && 'enabled'
              }`}
            />
          </div>
          <p className='payments-email-form-text'>
            Не (!) для спама, а для технических моментов, если телеграмму,
            например, будет плохо — чтобы связаться с вами, такое бывает редко,
            но бывает.
          </p>
        </>
      )}
      <motion.button
        whileHover={
          isEmailEqual ? { scale: 0.95, transition: { duration: 0.2 } } : null
        }
        whileTap={
          isEmailEqual ? { scale: 0.95, transition: { duration: 0.1 } } : null
        }
        className={`payments-email-form-button ${!isEmailEqual && 'disabled'}`}
        type='submit'
        disabled={isEmailEqual ? false : true}
      >
        Подтвердить
      </motion.button>
    </form>
  );
}

export default PaymentsEmailForm;
