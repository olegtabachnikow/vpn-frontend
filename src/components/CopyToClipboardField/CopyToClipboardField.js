import React from 'react';
import './CopyToClipboardField.css';
import copyIcon from '../../images/copy.svg';
import copiedIcon from '../../images/check.svg';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useAnalyticsEventTracker from '../../hooks/useAnanlyticsEventTracker';

function CopyToClipboardField({ currentClass, data, gaAction }) {
  const [isCopied, setIsCopied] = React.useState(false);
  const gaEventTracker = useAnalyticsEventTracker('CopyLink');
  function copyToClipboard(e) {
    e.stopPropagation();
    gaEventTracker(gaAction, 'Key_copied');
    setIsCopied(true);
    navigator.clipboard.writeText(data);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }
  return (
    <motion.button
      type='button'
      onClick={copyToClipboard}
      className={`copy-to-clipboard ${currentClass} ${isCopied && 'high'}`}
      whileTap={{ scale: 0.98 }}
    >
      <span className='copy-to-clipboard__key'>{data}</span>
      <img className='copy-to-clipboard__copy-icon' src={copyIcon} alt='copy' />
      {isCopied && (
        <div className={`copy-to-clipboard__popup ${currentClass}`}>
          <span className='copy-to-clipboard__popup-text'>
            Ссылка скопирована, всё гуд!
          </span>
          <img
            className='copy-to-clipboard__popup-icon'
            src={copiedIcon}
            alt='copied'
          />
        </div>
      )}
    </motion.button>
  );
}
CopyToClipboardField.propTypes = {
  currentClass: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  gaAction: PropTypes.string,
};
export default CopyToClipboardField;
