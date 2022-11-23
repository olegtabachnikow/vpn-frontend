import React from 'react';
import './PaymentsEmailForm.css';
import paymentCheckbox from '../../images/payment-checkbox.svg';

function PaymentsEmailForm() {
  const [email, setEmail] = React.useState('');
  const [comparedEmail, setComparedEmail] = React.useState('');
  const [isEmailEqual, setIsEmailEqual] = React.useState(true);

  React.useEffect(() => {
    setEmail('');
    setComparedEmail('');
  }, []);

  React.useEffect(() => {
    email.length && email === comparedEmail
      ? setIsEmailEqual(true)
      : setIsEmailEqual(false);
  }, [email, comparedEmail]);

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
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
  function handleSubmit() {
    console.log('submitted');
  }
  return (
    <form onSubmit={handleSubmit} className='payment__form'>
      <div className='payment__input-container'>
        <span className='payment__input-title'>Ваш e-mail</span>
        <input
          onKeyUp={debouncedHandlerMain}
          className='payment__input'
          type='email'
          onCopy={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
        />
        <img
          src={paymentCheckbox}
          alt='checked'
          className={`payment__icon ${email && 'enabled'}`}
        />
      </div>
      <div className='payment__input-container'>
        <span className='payment__input-title'>Подтвердите e-mail</span>
        <input
          onKeyUp={debouncedHandlerSecond}
          className='payment__input'
          type='email'
          onCopy={(e) => e.preventDefault()}
          onPaste={(e) => e.preventDefault()}
          onCut={(e) => e.preventDefault()}
        />
        <img
          src={paymentCheckbox}
          alt='checked'
          className={`payment__icon ${
            comparedEmail && isEmailEqual && 'enabled'
          }`}
        />
      </div>
      <p className='payment__form-text'>
        Не (!) для спама, а для технических моментов, если телеграмму, например,
        будет плохо — чтобы связаться с вами, такое бывает редко, но бывает.
      </p>
      <button
        className={`payment__form-button ${!isEmailEqual && 'disabled'}`}
        type='submit'
        disabled={isEmailEqual ? false : true}
      >
        Подтвердить
      </button>
    </form>
  );
}

export default PaymentsEmailForm;