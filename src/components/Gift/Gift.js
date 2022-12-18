import React from 'react';
import './Gift.css';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';
import { useSwipeable } from 'react-swipeable';
import { useSelector } from 'react-redux';
import FormLabel from '../FormLabel/FormLabel';
import { useNavigate } from 'react-router-dom';
import {
  setDirection,
  setPayment,
  setPaymentUrl,
} from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { translations } from '../../utils/translations/translations';

const variants = {
  visible: { opacity: 1, transition: { duration: 0.2 } },
  faded: { opacity: 0, transition: { duration: 0.2 } },
};

function Gift() {
  const [progress, setProgress] = React.useState(0);
  const [value, setValue] = React.useState('0');
  const [isFaded, setIsFaded] = React.useState(false);
  const [isGiftPopupHidden, setIsGiftPopupHidden] = React.useState(true);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);
  const prices = useSelector((state) => state.prices);
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  React.useEffect(() => {
    isFaded && setTimeout(setIsFaded, 300, false);
  }, [isFaded]);

  function handleSwipeLeft() {
    if (progress >= 2) {
      setProgress(2);
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => ++state);
    }
  }
  function handleSwipeRight() {
    if (progress <= 0) {
      setProgress(0);
    } else {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
    }
  }

  function handleClick() {
    setIsFaded(true);
    setTimeout(setProgress, 300, (state) => ++state);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
  }
  function handlePaymentSubmit() {
    setPaymentUrl('gift-success');
    setDirection(true);
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
    setIsFaded(true);
    navigate('/payment');
  }
  function handleBackButtonClick() {
    if (progress > 0) {
      setIsFaded(true);
      setTimeout(setProgress, 300, (state) => --state);
    } else {
      setDirection(false);
      navigate('/');
    }
  }
  return (
    <motion.section
      {...handlers}
      className='gift'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      <BurgerMenu color='var(--white)' />
      <button onClick={handleBackButtonClick} className='gift__back-button'>
        {progress > 0 ? (
          <span className='gift__back-button-text'>
            {translations.ru.appButton.back}
          </span>
        ) : (
          <span className='gift__back-button-text'>
            {translations.ru.appButton.mainMenu}
          </span>
        )}
        <span className='gift__back-button-corner' />
        {progress === 0 ? (
          <span className='gift__back-button-title'>
            {translations.ru.gift.giftVpn}
          </span>
        ) : null}
      </button>
      <motion.div
        className='gift__content'
        initial={{ opacity: 0 }}
        animate={isFaded ? 'faded' : 'visible'}
        variants={variants}
      >
        {progress === 0 && (
          <>
            <h1 className='gift__title'>
              {translations.ru.gift.giftP1Title1}
              <br />
              {translations.ru.gift.giftP1Title2}
              <br />
              {translations.ru.gift.giftP1Title3}
            </h1>
            <h2 className='gift__subtitle'>
              {translations.ru.gift.giftP1Subtitle1}
              <br /> {translations.ru.gift.giftP1Subtitle2}
              <br /> {translations.ru.gift.giftP1Subtitle3}
              <br /> {translations.ru.gift.giftP1Subtitle4}
            </h2>
            <AppButton
              currentClass='primary orange'
              text={translations.ru.appButton.selectGift}
              handler={handleClick}
            />
            <span className='gift__explanation'>
              {translations.ru.gift.giftExplanation}
            </span>
            <Popup
              title={translations.ru.textTips.termsAndConditions}
              currentClass='popup-gift'
              isHidden={isGiftPopupHidden}
              handleHide={setIsGiftPopupHidden}
            >
              {
                <div className='popup-gift__text'>
                  <p className='gift__popup-text'>
                    {translations.ru.gift.giftPopupText1}
                  </p>
                  <p className='gift__popup-text'>
                    {' '}
                    {translations.ru.gift.giftPopupText2}
                  </p>
                  <p className='gift__popup-text'>
                    {translations.ru.gift.giftPopupText3}
                  </p>
                  <AppButton
                    text={translations.ru.appButton.gotIt}
                    currentClass='secondary white bg-orange border-transparent margin-top'
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
              {translations.ru.gift.giftP2Title1}
              <br />
              {translations.ru.gift.giftP2Title2}
            </h1>
            <form
              onSubmit={handleSubmit}
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
                title={translations.ru.tariffes.nolimitMonth}
                text={null}
                valueMain={prices.Nolimit_1 + translations.ru.textTips.currency}
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
                title={translations.ru.tariffes.nolimit3Months}
                text={null}
                valueMain={
                  prices.Nolimit_3 + translations.ru.textTips.currencyMonth
                }
                valueSecondary={`${
                  currentUser.giftDiscount > 0
                    ? Math.floor(
                        (prices.Nolimit_3 / 100) * currentUser.giftDiscount
                      ).toString()
                    : prices.Nolimit_3
                } ${translations.ru.textTips.currencyMonth}`}
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
                title={translations.ru.tariffes.nolimit12Months}
                text={null}
                valueMain={
                  prices.Nolimit_12 + translations.ru.textTips.currencyMonth
                }
                valueSecondary={`${
                  currentUser.giftDiscount > 0
                    ? Math.floor(
                        (prices.Nolimit_12 / 100) * currentUser.giftDiscount
                      ).toString()
                    : prices.Nolimit_12
                } ${translations.ru.textTips.currencyMonth}`}
                isDiscounted={currentUser.giftDiscount > 0}
                discountValue={`${currentUser.giftDiscount}%`}
              />
            </form>
            <motion.button
              whileHover={{ scale: 0.95, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
              className='gift__submit-button'
              type='submit'
              form='tariff-form'
              value='submit'
            >
              {translations.ru.appButton.next}
            </motion.button>
          </>
        )}
        {progress === 2 && (
          <>
            <h1 className='gift__title'>
              {translations.ru.gift.giftP3Title1}
              <br />
              {translations.ru.gift.giftP3Title2}
            </h1>
            <h2 className='gift__subtitle'>
              {translations.ru.gift.giftP3Text1}
              <br />
              {translations.ru.gift.giftP3Text2}
              <br />
              {translations.ru.gift.giftP3Text3}
              <br />
              {translations.ru.gift.giftP3Text4} <br />
              {translations.ru.gift.giftP3Text5}
            </h2>
            <span className='gift__user-selection'>
              {value === '0' && (
                <span className='gift__user-selection-placeholder'>
                  {translations.ru.tariffes.nolimitMonth}
                  <div className='gift__user-selection-placeholder-value'>
                    {currentUser.giftDiscount > 0 ? (
                      <span>
                        {Math.floor(
                          (prices.Nolimit_1 / 100) * currentUser.giftDiscount
                        ).toString()}{' '}
                        {translations.ru.textTips.currency}
                      </span>
                    ) : (
                      <span>
                        {prices.Nolimit_1 + translations.ru.textTips.currency}
                      </span>
                    )}
                  </div>
                </span>
              )}
              {value === '1' && (
                <span className='gift__user-selection-placeholder'>
                  {translations.ru.tariffes.nolimit3Months}
                  <div className='gift__user-selection-placeholder-value'>
                    {currentUser.giftDiscount > 0 ? (
                      <span>
                        {Math.floor(
                          (prices.Nolimit_3 / 100) *
                            currentUser.giftDiscount *
                            3
                        ).toString()}{' '}
                        {translations.ru.textTips.currency}
                      </span>
                    ) : (
                      <span>
                        {prices.Nolimit_3 * 3 +
                          translations.ru.textTips.currency}
                      </span>
                    )}
                  </div>
                </span>
              )}
              {value === '2' && (
                <span className='gift__user-selection-placeholder'>
                  {translations.ru.tariffes.nolimit12Months}
                  <div className='gift__user-selection-placeholder-value'>
                    {currentUser.giftDiscount > 0 ? (
                      <span>
                        {Math.floor(
                          (prices.Nolimit_12 / 100) *
                            currentUser.giftDiscount *
                            12
                        ).toString()}{' '}
                        {translations.ru.textTips.currency}
                      </span>
                    ) : (
                      <span>
                        {prices.Nolimit_12 * 12 +
                          translations.ru.textTips.currency}
                      </span>
                    )}
                  </div>
                </span>
              )}
            </span>
            <AppButton
              currentClass='primary orange'
              text={translations.ru.appButton.goToPayment}
              handler={handlePaymentSubmit}
            />
          </>
        )}
      </motion.div>
    </motion.section>
  );
}

export default Gift;
