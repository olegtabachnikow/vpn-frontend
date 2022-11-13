import React from 'react';
import './Gift.css';
import Popup from '../Popup/Popup';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';

function Gift() {
  const [discount, setDiscount] = React.useState(0);
  const [progress, setProgress] = React.useState(8);
  const [userDiscount, setUserDiscount] = React.useState('1');

  function handleClick() {
    setProgress((state) => ++state);
  }
  function handleSubmit(e) {
    console.log(userDiscount);
    e.preventDefault();
    handleClick();
  }
  React.useEffect(() => {
    setUserDiscount('1');
  }, []);

  return (
    <section className='gift'>
      <BackButton path='/' text='Подарить VPN' />
      {progress === 8 && (
        <>
          <h1 className='gift__title'>
            Подарить <br />
            VPN друзьям <br />и близким
          </h1>
          <h2 className='gift__subtitle'>
            На каждый второй <br />
            подарок скидка 50%
          </h2>
          <AppButton
            color='#FF824B'
            background='#fff'
            text='Выбрать подарок'
            border='transparent'
            handler={handleClick}
          />
          <span className='gift__explanation'>
            Выбрав подарок — вы принимаете условия сервиса.{' '}
          </span>
          <Popup title='Подробные условия' className='popup-gift'>
            {
              <div className='popup-gift__text'>
                <p>
                  1. Чтобы программа действовала — вам нужно поделиться подарком
                  (ссылкой) с другом, а ему просто перейти по ссылке, и
                  зарегистирироваться будто новый пользователь.{' '}
                </p>
                <p>
                  {' '}
                  2. Оплаченный тариф начинает действовать с момента вашей
                  оплаты его в качестве подарка, а не с момента его активации со
                  стороны пользователя.{' '}
                </p>
                <p>
                  3. Подарок подлежит возврату только в соответствии с общими
                  условиями возврата. С условиями можно ознакомиться в разделе —
                  тарифы, подробные условия. Коротко — только в случае, если нас
                  заблокируют, и robo не сможет предоставить рабочий доступ к
                  сервису в течение суток.{' '}
                </p>
                <p>
                  4. На каждый второй подарок действует — скидка 50%. То есть
                  если вы покупаете и дарите кому-то первый подарок, на каждый
                  второй будет автоматически применятсья скидка 50%.{' '}
                </p>
              </div>
            }
          </Popup>
        </>
      )}
      {progress === 9 && (
        <>
          <h1 className='gift__title'>
            Выбери
            <br />
            тариф
          </h1>
          <form
            onSubmit={(e) => handleSubmit(e)}
            id='tariff-form'
            className='gift__form'
          >
            <label
              className={`gift__radio-label ${
                discount && 'gift__radio_discounted'
              }`}
            >
              <input
                onChange={(e) => setUserDiscount(e.target.value)}
                className='gift__radio-input'
                type='radio'
                name='tariff'
                value='1'
                defaultChecked
              />
              <span className='gift__radio-placeholder'>
                Месяц NO LIMIT
                <div className='gift__radio-placeholder-value'>
                  <span className={`${discount && 'discounted'}`}>449 ₽</span>
                  {discount ? <span>224 ₽</span> : null}
                </div>
              </span>
            </label>
            <label
              className={`gift__radio-label ${
                discount && 'gift__radio_discounted'
              }`}
            >
              <input
                onChange={(e) => setUserDiscount(e.target.value)}
                className='gift__radio-input'
                type='radio'
                name='tariff'
                value='2'
              />
              <span className='gift__radio-placeholder'>
                3 месяца NO LIMIT
                <div className='gift__radio-placeholder-value'>
                  <span className={`${discount && 'discounted'}`}>
                    419 ₽/мес
                  </span>
                  {discount ? <span>209 ₽/мес</span> : null}
                </div>
              </span>
            </label>
            <label
              className={`gift__radio-label ${
                discount && 'gift__radio_discounted'
              }`}
            >
              <input
                onChange={(e) => setUserDiscount(e.target.value)}
                className='gift__radio-input'
                type='radio'
                name='tariff'
                value='3'
              />
              <span className='gift__radio-placeholder'>
                12 месяцев NO LIMIT
                <div className='gift__radio-placeholder-value'>
                  <span className={`${discount && 'discounted'}`}>
                    389 ₽/мес
                  </span>
                  {discount ? <span>194 ₽/мес</span> : null}
                </div>
              </span>
            </label>
          </form>
          <button
            className='gift__submit-button'
            type='submit'
            form='tariff-form'
            value='submit'
          >
            Далее
          </button>
        </>
      )}
      {progress === 10 && (
        <>
          <h1 className='gift__title'>
            Подарить <br />
            просто
          </h1>
          <h2 className='gift__subtitle'>
            1. Выберите подарок.
            <br />
            2. Оплатите.
            <br />
            3. Перешлите
            <br />
            подарок в Telegram <br />
            от robo.
          </h2>
          <span className='gift__user-selection'>
            {userDiscount === '1' && (
              <span className='gift__radio-placeholder'>
                Месяц NO LIMIT
                <div className='gift__radio-placeholder-value'>
                  {discount ? <span>224 ₽</span> : <span>449 ₽</span>}
                </div>
              </span>
            )}
            {userDiscount === '2' && (
              <span className='gift__radio-placeholder'>
                3 месяца NO LIMIT
                <div className='gift__radio-placeholder-value'>
                  {discount ? <span>209 ₽/мес</span> : <span>419 ₽/мес</span>}
                </div>
              </span>
            )}
            {userDiscount === '3' && (
              <span className='gift__radio-placeholder'>
                12 месяцев NO LIMIT
                <div className='gift__radio-placeholder-value'>
                  {discount ? <span>194 ₽/мес</span> : <span>389 ₽/мес</span>}
                </div>
              </span>
            )}
          </span>
          <AppButton
            color='#FF824B'
            background='#fff'
            text='Перейти к оплате'
            border='transparent'
            handler={() => console.log('finito')}
          />
        </>
      )}
    </section>
  );
}

export default Gift;
