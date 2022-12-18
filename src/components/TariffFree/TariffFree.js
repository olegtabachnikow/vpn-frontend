import React from 'react';
import './TariffFree.css';
import TariffesTemplate from '../TariffesTemplate/TariffesTemplate';
import { useNavigate } from 'react-router-dom';
import { setDirection } from '../../redux/actions/actions';
import PropTypes from 'prop-types';
import { translations } from '../../utils/translations/translations';

function TariffFree({ setIsHidden, setIsFreeInfoHidden }) {
  const navigate = useNavigate();
  return (
    <TariffesTemplate
      currentClass='free'
      buttonText={translations.ru.appButton.inviteFriend}
      handler={() => {
        setDirection(true);
        navigate('/referral');
      }}
      setIsHidden={setIsHidden}
      setIsFreeInfoHidden={setIsFreeInfoHidden}
    >
      <div className='tariffes__free-content'>
        <h1 className='tariffes__free-title'>5+5=10</h1>
        <div className='tariffes__free-widgets'>
          <div className='tariffes__free-widget_small'>
            <h2 className='tariffes__free-widget-title'>
              {5 + translations.ru.textTips.gbReg}
            </h2>
            <span className='tariffes__free-widget-text'>
              {translations.ru.tariffes.freeWidgettext1}
            </span>
          </div>
          <div className='tariffes__free-widget_small'>
            <h2 className='tariffes__free-widget-title'>
              {5 + translations.ru.textTips.gbReg}
            </h2>
            <span className='tariffes__free-widget-text'>
              {translations.ru.tariffes.freeWidgettext2}
            </span>
          </div>
        </div>
      </div>
    </TariffesTemplate>
  );
}
TariffFree.propTypes = {
  setIsHidden: PropTypes.func.isRequired,
  setIsFreeInfoHidden: PropTypes.func,
};
export default TariffFree;
