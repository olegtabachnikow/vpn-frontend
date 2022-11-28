import React from 'react';
import './Gift.css';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import { useNavigate } from 'react-router-dom';
import { setPayment } from '../../redux/actions/actions';

function Gift() {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState('0');
  const [isGiftPopupHidden, setIsGiftPopupHidden] = React.useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  const prices = useSelector((state) => state.prices);
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

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
  function handlePaymentSubmit() {
    if (value === '2') {
      currentUser.giftDiscount > 0
        ? setPayment(
            Math.floor(
              ((prices.Nolimit_12 * 12) / 100) * currentUser.giftDiscount
            )
          )
        : setPayment(prices.Nolimit_12 * 12);
    } else if (value === '1') {
      currentUser.giftDiscount > 0
        ? setPayment(
            Math.floor(
              ((prices.Nolimit_3 * 3) / 100) * currentUser.giftDiscount
            )
          )
        : setPayment(prices.Nolimit_3 * 3);
    } else {
      currentUser.giftDiscount > 0
        ? setPayment(
            Math.floor((prices.Nolimit_1 / 100) * currentUser.giftDiscount)
          )
        : setPayment(prices.Nolimit_1);
    }
    navigate('/payment');
  }
  function handleBackButtonClick() {
    progress > 0 ? setProgress((state) => --state) : navigate('/');
  }
  return (
    <section {...handlers} className='gift'>
      <button onClick={handleBackButtonClick} className='gift__back-button'>
        {progress > 0 ? 'Назад' : 'Главное меню'}
        <span className='gift__back-button-corner' />
      </button>
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
            currentClass='primary orange'
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
                  тарифы,{' '}
                  <span
                    onClick={() => navigate('/tariffes')}
                    className='gift__popup-link'
                  >
                    подробные условия
                  </span>
                  . Коротко — только в случае, если нас заблокируют, и robo не
                  сможет предоставить рабочий доступ к сервису в течение суток.{' '}
                </p>
                <p>
                  4. На каждый второй подарок действует — скидка 50%. То есть
                  если вы покупаете и дарите кому-то первый подарок, на каждый
                  второй будет автоматически применятсья скидка 50%.{' '}
                </p>
                <AppButton
                  text='Понятно'
                  currentClass='secondary white bg-orange border-transparent'
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
                currentUser.giftDiscount > 0 &&
                'form-label-item-gift_discounted'
              }`}
              title='Mесяц NO LIMIT'
              text={null}
              valueMain={`${prices.Nolimit_1} ₽`}
              valueSecondary={`${
                currentUser.giftDiscount > 0
                  ? Math.floor(
                      (prices.Nolimit_1 / 100) * currentUser.giftDiscount
                    ).toString()
                  : prices.Nolimit_1
              } ₽`}
              isDiscounted={currentUser.giftDiscount > 0}
              discountValue={`${currentUser.giftDiscount}%`}
              defaultChecked={true}
            />
            <FormLabel
              elementValue='1'
              name='gift'
              handler={(data) => setValue(data)}
              currentClass={`form-label-item-gift ${
                currentUser.giftDiscount > 0 &&
                'form-label-item-gift_discounted'
              }`}
              title='3 месяца NO LIMIT'
              text={null}
              valueMain={`${prices.Nolimit_3}/мес ₽`}
              valueSecondary={`${
                currentUser.giftDiscount > 0
                  ? Math.floor(
                      (prices.Nolimit_3 / 100) * currentUser.giftDiscount
                    ).toString()
                  : prices.Nolimit_3
              }/мес ₽`}
              isDiscounted={currentUser.giftDiscount > 0}
              discountValue={`${currentUser.giftDiscount}%`}
            />
            <FormLabel
              elementValue='2'
              name='gift'
              handler={(data) => setValue(data)}
              currentClass={`form-label-item-gift ${
                currentUser.giftDiscount > 0 &&
                'form-label-item-gift_discounted'
              }`}
              title='12 месяцев NO LIMIT'
              text={null}
              valueMain={`${prices.Nolimit_12}/мес ₽`}
              valueSecondary={`${
                currentUser.giftDiscount > 0
                  ? Math.floor(
                      (prices.Nolimit_12 / 100) * currentUser.giftDiscount
                    ).toString()
                  : prices.Nolimit_12
              }/мес ₽`}
              isDiscounted={currentUser.giftDiscount > 0}
              discountValue={`${currentUser.giftDiscount}%`}
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
                  {currentUser.giftDiscount > 0 ? (
                    <span>
                      {Math.floor(
                        (prices.Nolimit_1 / 100) * currentUser.giftDiscount
                      ).toString()}{' '}
                      ₽
                    </span>
                  ) : (
                    <span>{prices.Nolimit_1} ₽</span>
                  )}
                </div>
              </span>
            )}
            {value === '1' && (
              <span className='gift__user-selection-placeholder'>
                3 месяца NO LIMIT
                <div className='gift__user-selection-placeholder-value'>
                  {currentUser.giftDiscount > 0 ? (
                    <span>
                      {Math.floor(
                        (prices.Nolimit_3 / 100) * currentUser.giftDiscount * 3
                      ).toString()}{' '}
                      ₽
                    </span>
                  ) : (
                    <span>{prices.Nolimit_3} ₽</span>
                  )}
                </div>
              </span>
            )}
            {value === '2' && (
              <span className='gift__user-selection-placeholder'>
                12 месяцев NO LIMIT
                <div className='gift__user-selection-placeholder-value'>
                  {currentUser.giftDiscount > 0 ? (
                    <span>
                      {Math.floor(
                        (prices.Nolimit_12 / 100) *
                          currentUser.giftDiscount *
                          12
                      ).toString()}{' '}
                      ₽
                    </span>
                  ) : (
                    <span>{prices.Nolimit_12} ₽</span>
                  )}
                </div>
              </span>
            )}
          </span>
          <AppButton
            currentClass='primary orange'
            text='Перейти к оплате'
            handler={handlePaymentSubmit}
          />
        </>
      )}
    </section>
  );
}

export default Gift;
