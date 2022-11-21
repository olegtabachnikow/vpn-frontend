import React from 'react';
import './Gift.css';
import Popup from '../Popup/Popup';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';

function Gift() {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState('0');
  const [userDiscount, setUserDiscount] = React.useState(0);
  const [isGiftPopupHidden, setIsGiftPopupHidden] = React.useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });
  React.useEffect(() => {
    console.log(value);
  });
  React.useEffect(() => {
    setUserDiscount(currentUser.discount);
    //setUserDiscount(0);
  }, []);

  function handleSwipeLeft() {
    progress >= 2 ? setProgress(2) : setProgress((state) => ++state);
  }
  function handleSwipeRight() {
    progress <= 0 ? setProgress(0) : setProgress((state) => --state);
  }

  function handleClick() {
    setProgress((state) => ++state);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }

  return (
    <section {...handlers} className='gift'>
      <BackButton path='/' text='Мой VPN' currentClass='back-button-gift' />
      {progress === 0 && (
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
            currentClass='app-button-gift'
            text='Выбрать подарок'
            handler={handleClick}
          />
          <span className='gift__explanation'>
            Выбрав подарок — вы принимаете условия сервиса.{' '}
          </span>
          <Popup
            title='Подробные условия'
            currentClass='popup-gift'
            isHidden={isGiftPopupHidden}
            handleHide={setIsGiftPopupHidden}
          >
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
                <AppButton
                  text='Понятно'
                  currentClass='app-button-popup-gift'
                  handler={() => setIsGiftPopupHidden(true)}
                />
              </div>
            }
          </Popup>
        </>
      )}
      {progress === 1 && (
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
            <FormLabel
              elementValue='0'
              name='gift'
              handler={(data) => setValue(data)}
              currentClass={`form-label-item-gift ${
                userDiscount && 'form-label-item-gift_discounted'
              }`}
              title='Mесяц NO LIMIT'
              text={null}
              valueMain='449 ₽'
              valueSecondary={`${userDiscount ? '224 ₽' : '449 ₽'}`}
              isDiscounted={userDiscount}
              discountValue={'50%'}
              defaultChecked={true}
            />
            <FormLabel
              elementValue='1'
              name='gift'
              handler={(data) => setValue(data)}
              currentClass={`form-label-item-gift ${
                userDiscount && 'form-label-item-gift_discounted'
              }`}
              title='3 месяца NO LIMIT'
              text={null}
              valueMain={`${userDiscount ? '419 ₽/мес' : '209 ₽/мес'}`}
              valueSecondary={`${userDiscount ? '209 ₽/мес' : null}`}
              isDiscounted={userDiscount}
              discountValue={'50%'}
            />
            <FormLabel
              elementValue='2'
              name='gift'
              handler={(data) => setValue(data)}
              currentClass={`form-label-item-gift ${
                userDiscount && 'form-label-item-gift_discounted'
              }`}
              title='12 месяцев NO LIMIT'
              text={null}
              valueMain={`${userDiscount ? '389 ₽/мес' : '194 ₽/мес'}`}
              valueSecondary={`${userDiscount ? '194 ₽/мес' : null}`}
              isDiscounted={userDiscount}
              discountValue={'50%'}
            />
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
      {progress === 2 && (
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
            {value === '0' && (
              <span className='gift__user-selection-placeholder'>
                Месяц NO LIMIT
                <div className='gift__user-selection-placeholder-value'>
                  {userDiscount ? <span>224 ₽</span> : <span>449 ₽</span>}
                </div>
              </span>
            )}
            {value === '1' && (
              <span className='gift__user-selection-placeholder'>
                3 месяца NO LIMIT
                <div className='gift__user-selection-placeholder-value'>
                  {userDiscount ? (
                    <span>209 ₽/мес</span>
                  ) : (
                    <span>419 ₽/мес</span>
                  )}
                </div>
              </span>
            )}
            {value === '2' && (
              <span className='gift__user-selection-placeholder'>
                12 месяцев NO LIMIT
                <div className='gift__user-selection-placeholder-value'>
                  {userDiscount ? (
                    <span>194 ₽/мес</span>
                  ) : (
                    <span>389 ₽/мес</span>
                  )}
                </div>
              </span>
            )}
          </span>
          <AppButton
            currentClass='app-button-gift'
            text='Перейти к оплате'
            handler={() => console.log('finito')}
          />
        </>
      )}
    </section>
  );
}

export default Gift;
