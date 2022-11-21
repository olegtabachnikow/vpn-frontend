import React from 'react';
import './Tariffes.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FormLabel from '../FormLabel/FormLabel';
import BackButton from '../BackButton/BackButton';
import Popup from '../Popup/Popup';
import AppButton from '../AppButton/AppButton';

function Tariffes() {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState('');
  const [isTariffPopupHidden, setIsTariffPopupHidden] = React.useState(true);
  const navigate = useNavigate();

  function handleChooseClick() {
    value.length ? navigate(`/tariffes/${value}`) : handleError();
  }
  function handleGiftClick() {
    navigate(`/gift`);
  }
  function handleError() {
    setError('Выберите тариф!');
    setTimeout(() => setError(''), 5000);
  }
  React.useEffect(() => {
    console.log(value);
  });
  return (
    <section className='tariffes'>
      <BackButton
        path='/'
        text='Главное меню'
        currentClass='back-button-tariffes'
      />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <div className='tariffes-list'>
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
                  valueMain='от 69 ₽'
                  isDiscounted={false}
                />
                <FormLabel
                  elementValue='nolimit'
                  name='tariff'
                  handler={(data) => setValue(data)}
                  currentClass='tariff-item-nolimit'
                  title='NO LIMIT'
                  text='Забудьте про ограничения. безлимитное потребление, сколько нужно устройств, доступ везде. '
                  valueMain='от 389 ₽'
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
                        currentClass='app-button-popup-tariff'
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
                    text='Подарить'
                    currentClass='app-button-tariff-gift'
                    handler={handleGiftClick}
                  />
                  <AppButton
                    text='Выбрать'
                    currentClass='app-button-tariff-choose'
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
          path='/tariffes/free'
          element={<div className='tariffes-free'></div>}
        />
        <Route path='/fix' element={<div className='tariffes-fix'></div>} />
        <Route
          path='/nolimit'
          element={<div className='tariffes-nolimit'></div>}
        />
      </Routes>
    </section>
  );
}

export default Tariffes;
