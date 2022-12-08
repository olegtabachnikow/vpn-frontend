import React from 'react';
import './TariffesList.css';
import CurrentTariffWidget from '../CurrentTariffWidget/CurrentTariffWidget';
import FormLabel from '../FormLabel/FormLabel';
import AppButton from '../AppButton/AppButton';
import Popup from '../Popup/Popup';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setDirection } from '../../redux/actions/actions';
import PropTypes from 'prop-types';

function TariffesList({ value, setValue, error, handleError }) {
  const [isTariffPopupHidden, setIsTariffPopupHidden] = React.useState(true);
  const navigate = useNavigate();
  const prices = useSelector((state) => state.prices);

  function handleChooseClick() {
    if (value.length) {
      setDirection(true);
      navigate(`/tariffes/${value}`);
    } else {
      handleError('Выберите тариф!');
    }
  }
  return (
    <>
      <CurrentTariffWidget />
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
                  3. Гарантия на возврат вступает в силу только в случае, если
                  мы не смогли предоставить работающий доступ к сервису в
                  течение суток с момента блокировки нас со стороны
                  блокираторов. А так же у вас включены уведомление "забота" от
                  robo. Забота включена по умолчанию, отключить можно только на
                  безлимитном тарифе.{' '}
                </p>
                <p className='tariffes__popup-text'>
                  4 Гарантии подлежат средства за неиспользованный период.{' '}
                </p>
                <p className='tariffes__popup-text'>
                  5. Возврат производится в течение нескольких рабочих дней,
                  если оплата была с банковской карты. Если с крипты —
                  необходимо предоставить доп. информацию об адресе возврата.{' '}
                </p>
                <p className='tariffes__popup-text'>
                  6. Могут быть задержки при возврате, если есть независящие от
                  robo причины со стороны банка или платежной системы. В этом
                  случае мы обязуемся предоставить подтверждение подробной
                  причины в течение 3 рабочих дней.{' '}
                </p>
                <p className='tariffes__popup-text'>
                  7. Нельзя предоставлять доступ более 1 человеку по тарифу
                  NOLIMIT (то есть 1 тариф = 1 человек). если сервисом будет
                  замечено нарушение правила — мы оставляем за собой право
                  заблокировать доступ такому пользователю без объяснения
                  причин.{' '}
                </p>
                <p className='tariffes__popup-text'>
                  8. robo, как и любой впн сервис или интернет провайдер —
                  собирает общую инфрмацию о пользователе — ip, устройство,
                  количество трафика. Это нужно для того, чтобы вообще
                  установить интернет соединение. Понять, какой именно вы трафик
                  потребляется — невозможно, так как outline использует 256-бит
                  шифрование.
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
  );
}
TariffesList.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired,
  handleError: PropTypes.func.isRequired,
};
export default TariffesList;
