import React from 'react';
import './Tariffes.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import FormLabel from '../FormLabel/FormLabel';
import BackButton from '../BackButton/BackButton';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import { useSelector } from 'react-redux';
import { setPayment } from '../../redux/actions/actions';
import { motion } from 'framer-motion';

function Tariffes() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [isTariffPopupHidden, setIsTariffPopupHidden] = React.useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const prices = useSelector((state) => state.prices);
  const currentUser = useSelector((state) => state.currentUser);

  function handleChooseClick() {
    value.length
      ? navigate(`/tariffes/${value}`)
      : handleError('Выберите тариф!');
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
      setPayment(parseInt(value));
      navigate('/payment');
    }
  }
  return (
    <motion.section
      className='tariffes'
      initial={{ y: '-100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { duration: 0.3, delay: 0.6 } }}
      exit={{ y: '-100vh', opacity: 0, transition: { duration: 0.3 } }}
    >
      {location.pathname === '/tariffes' && (
        <BackButton path={-1} text='Назад' currentClass='' title='Тарифы' />
      )}
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <div className='tariffes-list'>
                <span className='tariffes-list__current-title'>
                  Ваш тариф: {currentUser.tariff}
                </span>
                <FormLabel
                  elementValue='free'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-free'
                  title='FREE'
                  text='Бесплатно 10 Гб, всем, каждый месяц, 
                без ограничений по скорости.'
                  valueMain={null}
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue='fit'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='FIT'
                  text='Не хватает бесплатных Гб в этом месяце? Рассчитайте и докупите, сколько нужно по доступным ценам.'
                  valueMain={`от ${prices.Fix_5} ₽`}
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue='nolimit'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-nolimit'
                  title='NO LIMIT'
                  text='Забудьте про ограничения. безлимитное потребление, сколько нужно устройств, доступ везде. '
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
                          3. Гарантия на возврат вступае в силу только в случае,
                          если мы не смогли предоставить работающий доступ к
                          сервису в течение суток с момента блокировки нас со
                          стороны блокираторов. А так же у вас включены
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
                          пользователю без возврата средств.{' '}
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
              handler={() => navigate('/referral')}
            >
              <p className='tariffes__free-text'>
                Дарим до 10 Гб на тарифах FREE и FIX каждый месяц, так же можно{' '}
                <u>заработать</u> 20 гб просто за приглашение — 10 Гб вам и 10
                Гб другу.
              </p>
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
                  title='5 ГБ'
                  text={null}
                  valueMain={`от ${prices.Fix_5} ₽`}
                  valueSecondary='разовый платеж'
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue={prices.Fix_10}
                  name='package'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='10 ГБ'
                  text={null}
                  valueMain={`от ${prices.Fix_10} ₽`}
                  valueSecondary='разовый платеж'
                  isDiscounted={true}
                  discountValue='Выгоднее на 16%'
                />
                <FormLabel
                  elementValue={prices.Fix_20}
                  name='package'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-fit'
                  title='20 ГБ'
                  text={null}
                  valueMain={`от ${prices.Fix_20} ₽`}
                  valueSecondary='разовый платеж'
                  isDiscounted={true}
                  discountValue='Выгоднее на 54%'
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
                  text={null}
                  valueMain={`от ${prices.Nolimit_1} ₽/мес`}
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue={prices.Nolimit_3}
                  name='package'
                  handler={(data) => setValue((data * 3).toString())}
                  currentClass='tariff-item-nolimit'
                  title='3 месяца'
                  text={null}
                  valueMain={`от ${prices.Nolimit_3} ₽/мес`}
                  valueSecondary={`${prices.Nolimit_3 * 3}₽ всего`}
                  isDiscounted={true}
                  discountValue='Выгода 90₽'
                />
                <FormLabel
                  elementValue={prices.Nolimit_12}
                  name='package'
                  handler={(data) => setValue((data * 12).toString())}
                  currentClass='tariff-item-nolimit'
                  title='12 месяцев'
                  text={null}
                  valueMain={`от ${prices.Nolimit_12} ₽/мес`}
                  valueSecondary={`${prices.Nolimit_12 * 12}₽ всего`}
                  isDiscounted={true}
                  discountValue='Выгода 720₽'
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
