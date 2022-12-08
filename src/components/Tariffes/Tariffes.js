import React from 'react';
import './Tariffes.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import FormLabel from '../FormLabel/FormLabel';
import BackButton from '../BackButton/BackButton';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import { useSelector } from 'react-redux';
import { setDirection, setPayment } from '../../redux/actions/actions';
import { motion } from 'framer-motion';
import { directionVariants } from '../../utils/directionOptions';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { parseTimestamp } from '../../utils/helpers';

function Tariffes() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [isTariffPopupHidden, setIsTariffPopupHidden] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const prices = useSelector((state) => state.prices);
  const currentUser = useSelector((state) => state.currentUser);
  const direction = useSelector((state) => state.direction);

  function handleChooseClick() {
    if (value.length) {
      setDirection(true);
      navigate(`/tariffes/${value}`);
    } else {
      handleError('Выберите тариф!');
    }
  }
  function addMonths(date, count) {
    let newDate = new Date(date);
    return newDate.setMonth(newDate.getMonth() + count);
  }
  function handleError(text) {
    setError(text);
    setTimeout(() => setError(''), 5000);
  }
  function handleRedirectAndPayment() {
    if (
      value === 'fit' ||
      value === 'free' ||
      value === 'nolimit' ||
      value === ''
    ) {
      handleError('Выберите пакет!');
      return;
    } else {
      setDirection(true);
      setPayment(parseInt(value));
      navigate('/payment');
    }
  }
  return (
    <motion.section
      className='tariffes'
      initial={direction ? 'fromLeft' : 'fromRight'}
      animate={{ x: 0, opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
      exit={direction ? 'exitToRight' : 'exitToLeft'}
      variants={directionVariants}
    >
      {location.pathname === '/tariffes' && (
        <BackButton path={-1} text='Назад' currentClass='wide' title='Тарифы' />
      )}
      <BurgerMenu color='#348FF3' />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <span className='tariffes-list__current-title'>
                Ваш тариф: {currentUser.tariff}
                <br />
                {currentUser.tariff === 'NOLIMIT'
                  ? 'Активен до ' + parseTimestamp(currentUser.endDate)
                  : 'Хватит до ' + parseTimestamp(currentUser.endDate)}
              </span>
              <div className='tariffes-list'>
                <FormLabel
                  elementValue='free'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-free'
                  title='FREE'
                  text='До 10 Гб бесплатно каждый месяц.'
                  valueMain={null}
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue='fit'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='FIT'
                  text='Не хватает Гб на FREE? Расчитайте 
                  и докупите сколько нужно.'
                  valueMain={`от ${prices.Fix_5} ₽`}
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue='nolimit'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-nolimit'
                  title='NOLIMIT'
                  text='Забудьте про ограничения, потребляйте сколько хочется.'
                  valueMain={`от ${prices.Nolimit_12} ₽`}
                  isDiscounted={false}
                />
                <Popup
                  title='Подробные условия'
                  currentClass='popup-tariff'
                  isHidden={isTariffPopupHidden}
                  handleHide={setIsTariffPopupHidden}
                >
                  {
                    <>
                      <div className='tariffes__popup-overlay' />
                      <div className='tariffes__popup-container'>
                        <p className='tariffes__popup-text'>
                          1. Тариф начинает действовать с момента оплаты.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          2. Гарантия на 100% возврат действует на весь период
                          пользования robo.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          3. Гарантия на возврат вступает в силу только в
                          случае, если мы не смогли предоставить работающий
                          доступ к сервису в течение суток с момента блокировки
                          нас со стороны блокираторов. А так же у вас включены
                          уведомление "забота" от robo. Забота включена по
                          умолчанию, отключить можно только на безлимитном
                          тарифе.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          4 Гарантии подлежат средства за неиспользованный
                          период.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          5. Возврат производится в течение нескольких рабочих
                          дней, если оплата была с банковской карты. Если с
                          крипты — необходимо предоставить доп. информацию об
                          адресе возврата.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          6. Могут быть задержки при возврате, если есть
                          независящие от robo причины со стороны банка или
                          платежной системы. В этом случае мы обязуемся
                          предоставить подтверждение подробной причины в течение
                          3 рабочих дней.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          7. Нельзя предоставлять доступ более 1 человеку по
                          тарифу NOLIMIT (то есть 1 тариф = 1 человек). если
                          сервисом будет замечено нарушение правила — мы
                          оставляем за собой право заблокировать доступ такому
                          пользователю без объяснения причин.{' '}
                        </p>
                        <p className='tariffes__popup-text'>
                          8. robo, как и любой впн сервис или интернет провайдер
                          — собирает общую инфрмацию о пользователе — ip,
                          устройство, количество трафика. Это нужно для того,
                          чтобы вообще установить интернет соединение. Понять,
                          какой именно вы трафик потребляется — невозможно, так
                          как outline использует 256-бит шифрование.
                        </p>
                      </div>
                      <AppButton
                        text='Понятно'
                        currentClass='margin-top bg-blue primary white'
                        handler={() => setIsTariffPopupHidden(true)}
                      />
                    </>
                  }
                </Popup>
              </div>
              <div className='tariffes__content-secondary'>
                <span className='tariffes__error'>{error}</span>
                <div className='tariffes__button-box'>
                  <AppButton
                    text='Выбрать'
                    currentClass='primary white bg-blue'
                    handler={handleChooseClick}
                  />
                </div>
                <span className='tariffes__tips'>
                  Выбрав тариф — пользователь принимает условия сервиса.
                </span>
              </div>
            </>
          }
        />
        <Route
          path='/free'
          element={
            <TariffesTemplate
              currentClass='free'
              buttonText='Пригласить друга'
              handler={() => {
                setDirection(true);
                navigate('/referral');
              }}
            >
              <div className='tariffes__free-content'>
                <h1 className='tariffes__free-title'>5+5=10</h1>
                <div className='tariffes__free-widgets'>
                  <div className='tariffes__free-widget_small'>
                    <h2 className='tariffes__free-widget-title'>5 Гб</h2>
                    <span className='tariffes__free-widget-text'>
                      Каждый месяц на тарифах FREE/FIT
                    </span>
                  </div>
                  <div className='tariffes__free-widget_small'>
                    <h2 className='tariffes__free-widget-title'>5 Гб</h2>
                    <span className='tariffes__free-widget-text'>
                      В первый месяц, и со второго, если есть хотя бы одна
                      покупка
                    </span>
                  </div>
                </div>
              </div>
            </TariffesTemplate>
          }
        />
        <Route
          path='/fit'
          element={
            <TariffesTemplate
              currentClass='fit'
              buttonText='Оплата'
              handler={handleRedirectAndPayment}
              error={error}
            >
              <div className='tariffes__content-fit'>
                <FormLabel
                  elementValue={prices.Fix_5}
                  name='package'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='5 + 10 ГБ'
                  text={null}
                  valueMain={`${prices.Fix_5} ₽`}
                  valueSecondary='разовый платеж'
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue={prices.Fix_10}
                  name='package'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='10 + 10 ГБ'
                  text={null}
                  valueMain={`${prices.Fix_10} ₽`}
                  valueSecondary='разовый платеж'
                  isDiscounted={true}
                  discountValue={
                    value === '' + prices.Fix_10 ? 'Выгода 6%' : 'Рекомендуем'
                  }
                />
                <FormLabel
                  elementValue={prices.Fix_20}
                  name='package'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='20 + 10 ГБ'
                  text={null}
                  valueMain={`${prices.Fix_20} ₽`}
                  valueSecondary='разовый платеж'
                  isDiscounted={true}
                  discountValue={
                    value === '' + prices.Fix_20 ? 'Выгода 17%' : null
                  }
                />
              </div>
            </TariffesTemplate>
          }
        />
        <Route
          path='/nolimit'
          element={
            <TariffesTemplate
              currentClass='nolimit'
              buttonText='Оплата'
              handler={handleRedirectAndPayment}
              error={error}
            >
              <div className='tariffes__content-nolimit'>
                <FormLabel
                  elementValue={prices.Nolimit_1}
                  name='package'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-nolimit'
                  title='Месяц'
                  text={
                    value === '' + prices.Nolimit_1
                      ? `Забудь про ограничения до ${parseTimestamp(
                          addMonths(currentUser.endDate, 1)
                        )}`
                      : null
                  }
                  valueMain={`${prices.Nolimit_1} ₽/мес`}
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue={prices.Nolimit_3}
                  name='package'
                  handler={(data) => setValue((data * 3).toString())}
                  currentClass='tariff-item-nolimit'
                  title='3 месяца'
                  text={
                    value === '' + prices.Nolimit_3 * 3
                      ? `Забудь про ограничения до ${parseTimestamp(
                          addMonths(currentUser.endDate, 3)
                        )}`
                      : null
                  }
                  valueMain={`${prices.Nolimit_3} ₽/мес`}
                  valueSecondary={`${prices.Nolimit_3 * 3}₽ всего`}
                  isDiscounted={true}
                  discountValue={
                    value === '' + prices.Nolimit_3 * 3 ? 'Выгода 90₽' : null
                  }
                />
                <FormLabel
                  elementValue={prices.Nolimit_12}
                  name='package'
                  handler={(data) => setValue((data * 12).toString())}
                  currentClass='tariff-item-nolimit'
                  title='12 месяцев'
                  text={
                    value === '' + prices.Nolimit_12 * 12
                      ? 'Год матрицы без ограничений, Нео'
                      : null
                  }
                  valueMain={`${prices.Nolimit_12} ₽/мес`}
                  valueSecondary={`${prices.Nolimit_12 * 12}₽ всего`}
                  isDiscounted={true}
                  discountValue={
                    value === '' + prices.Nolimit_12 * 12 ? 'Выгода 720₽' : null
                  }
                />
              </div>
            </TariffesTemplate>
          }
        />
      </Routes>
    </motion.section>
  );
}

export default Tariffes;
