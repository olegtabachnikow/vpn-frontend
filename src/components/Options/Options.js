import React from 'react';
import './Options.css';
import BackButton from '../BackButton/BackButton';
import AppButton from '../AppButton/AppButton';
import checkboxChecked from '../../images/checkbox-checked.svg';
import checkboxNotChecked from '../../images/checkbox-not-checked.svg';
import closeButton from '../../images/close-button.png';
import { useSelector } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CopyToClipboardField from '../CopyToClipboardField/CopyToClipboardField';

function Options() {
  const [smartActive, setIsSmartActive] = React.useState(0);
  const [isCommunicateActive, setIsCommunicateActive] = React.useState(true);
  const [country, setCountry] = React.useState(0);
  const navigate = useNavigate();
  const [isActive, setIsActive] = React.useState({
    location: false,
    device: false,
  });
  const [isSmartPopupOpen, setIsSmartPopupOpen] = React.useState(false);
  const [isCommunicatePopupOpen, setIsCommunicatePopupOpen] =
    React.useState(false);
  const [isOverlayActive, setIsOverlayActive] = React.useState(false);
  const currentUser = useSelector((state) => state.currentUser);

  React.useEffect(() => {
    currentUser.smart && setIsSmartActive(1);
    setCountry(currentUser.domainId);
  }, []);
  function handleClose() {
    setIsSmartPopupOpen(false);
    setIsCommunicatePopupOpen(false);
    setIsOverlayActive(false);
  }
  function handleCountryItemClick(e, val) {
    e.stopPropagation();
    setCountry(val);
  }
  function handleSmartPopup() {
    if (isSmartPopupOpen) {
      handleClose();
    } else {
      setIsSmartPopupOpen(true);
      setIsOverlayActive(true);
    }
  }
  function handleCommunicatePopup() {
    if (isCommunicatePopupOpen) {
      handleClose();
    } else {
      setIsCommunicatePopupOpen(true);
      setIsOverlayActive(true);
    }
  }
  function handleClick(e, data) {
    e.stopPropagation();
    setIsActive(data);
  }
  function handleDisableCommunicate() {
    setIsCommunicateActive(false);
    handleClose();
  }
  return (
    <section className='options'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <BackButton
                text='Мой VPN'
                currentClass='white'
                path={-1}
                title='Ручная настройка'
              />
              <div
                onClick={(e) => e.stopPropagation()}
                className={`options__overlay ${isOverlayActive && 'active'}`}
              />
              <div className='options__content'>
                <div
                  onClick={() => setIsActive({ ...isActive, location: false })}
                  className='options__item'
                >
                  <h2 className='options__item-title'>Выбрать локацию</h2>
                  {!isActive.location ? (
                    <p
                      onClick={(e) =>
                        handleClick(e, { device: false, location: true })
                      }
                      className='options__item-button-text'
                    >
                      Подробнее.
                    </p>
                  ) : (
                    <div className='options__item-content'>
                      <p className='options__item-text'>
                        Наша сеть серверов работает в 54 странах. Здесь мы
                        отображаем — во-первых, наиболее быстрые для вас точки.
                        Во-вторых, наиболее оптимальные для рф, на взгляд robo.
                      </p>
                      <div className='options__item-location-box'>
                        <span
                          onClick={(e) => handleCountryItemClick(e, 1)}
                          className={`options__country-item ${
                            country === 1 && 'active'
                          }`}
                        >
                          Finland
                        </span>
                        <span
                          onClick={(e) => handleCountryItemClick(e, 2)}
                          className={`options__country-item ${
                            country === 2 && 'active'
                          }`}
                        >
                          Cypress
                        </span>
                      </div>
                    </div>
                  )}
                  <span
                    className={`options__country-current ${
                      isActive.location && 'hidden'
                    }`}
                  >
                    {country === 1 ? 'Finland' : 'Cypress'}
                  </span>
                  <span
                    className={`options__item-arrow ${
                      isActive.location ? 'active' : ''
                    }`}
                  />
                </div>
                <div
                  onClick={() => setIsActive({ ...isActive, device: false })}
                  className='options__item'
                >
                  <h2 className='options__item-title'>Выбрать устройство</h2>
                  {!isActive.device ? (
                    <p
                      onClick={(e) =>
                        handleClick(e, { location: false, device: true })
                      }
                      className='options__item-button-text'
                    >
                      Подробнее.
                    </p>
                  ) : (
                    <div className='options__item-content'>
                      <p className='options__item-text'>
                        Ваш ключ подходит для всех устройств, вы можете скачать
                        нужное приложение для дополнительного устройства на
                        сайте Outline.
                      </p>
                      <div className='options__item-location-box'>
                        <span className='options__country-item device'>
                          Когда сохраните настройки — ваш ключ обновится
                        </span>
                      </div>
                    </div>
                  )}
                  <span
                    className={`options__item-arrow ${
                      isActive.device ? 'active' : ''
                    }`}
                  />
                </div>
                <div
                  className={`options__item ${
                    isSmartPopupOpen && 'with-popup'
                  }`}
                >
                  <h2 className='options__item-title'>Умный robo</h2>
                  <p
                    onClick={handleSmartPopup}
                    className='options__item-button-text'
                  >
                    Подробнее.
                  </p>
                  <div
                    onClick={() => setIsSmartActive((state) => !state)}
                    className='options__item-checkbox'
                  >
                    <img
                      src={smartActive ? checkboxChecked : checkboxNotChecked}
                      alt='checkbox'
                    />
                  </div>
                  <div
                    className={`options__popup smart ${
                      isSmartPopupOpen && 'active'
                    }`}
                  >
                    <p className='options__popup-text'>
                      Алгоритмы robo перераспределяют трафик в зависимости от
                      того, на какой сайты вы хотите попасть. благодаря даже с
                      включенным впн доступны и рф, и зарубежные сайты, где бы
                      вы не находились.
                    </p>
                    <button
                      onClick={handleClose}
                      className='options__popup-close-button'
                    >
                      <img
                        className='options__popup-close-button-image'
                        src={closeButton}
                        alt='close'
                      />
                    </button>
                  </div>
                </div>
                <div
                  className={`options__item ${
                    isCommunicatePopupOpen && 'with-popup'
                  }`}
                >
                  <h2 className='options__item-title communicate'>
                    Коммуникация с robo в Telegram
                  </h2>
                  <div
                    onClick={() =>
                      isCommunicateActive
                        ? handleCommunicatePopup()
                        : setIsCommunicateActive(true)
                    }
                    className='options__item-checkbox'
                  >
                    <img
                      src={
                        isCommunicateActive
                          ? checkboxChecked
                          : checkboxNotChecked
                      }
                      alt='checkbox'
                    />
                  </div>
                  <div
                    className={`options__popup communicate ${
                      isCommunicatePopupOpen && 'active'
                    }`}
                  >
                    <p className='options__popup-text'>
                      Внимание! При отключении коммуникации с ботом, мы будем
                      связываться с вами только в случае блокировки, чтобы
                      предоставить работающий доступ к сервису. Robo напишет,
                      что нажать в Telegram, если соединение можно улучшить или
                      РКН заблокирует именно ваш сервер.
                    </p>
                    <div className='options__popup-button-box'>
                      <AppButton
                        text='Все равно выключить'
                        currentClass='secondary white small-text narrow'
                        handler={handleDisableCommunicate}
                      />
                      <AppButton
                        text='Не отключать'
                        currentClass='primary orange narrow small-text'
                        handler={handleClose}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='options__button-box'>
                <AppButton
                  text='Сохранить настройки'
                  currentClass='primary orange'
                  handler={() => navigate('/options/complete')}
                />
                <AppButton
                  text='Автонастройка'
                  currentClass='primary orange margin-top'
                  handler={() => navigate('/instruction')}
                />
              </div>
            </>
          }
        />
        <Route
          path='/complete'
          element={
            <>
              <BackButton
                text='Мой VPN'
                currentClass='white'
                path={'/my-vpn'}
              />
              <div className='options__complete-content'>
                <p className='option__complete-text'>
                  {' '}
                  Отлично, вы настроили robo под себя. Ваш ключ доступа — чтобы
                  новые настройки заработали, вставьте новый ключ в приложение
                  outline.
                </p>
                <CopyToClipboardField
                  currentClass='options'
                  data={currentUser.link}
                />
              </div>
              <div className='options__button-box'>
                <AppButton
                  text='Настроить заново'
                  currentClass='primary orange'
                  handler={() => navigate('/options')}
                />
                <AppButton
                  text='Мой VPN'
                  handler={() => navigate('/my-vpn')}
                  currentClass='primary orange margin-top'
                />
              </div>
            </>
          }
        />
      </Routes>
    </section>
  );
}

export default Options;
