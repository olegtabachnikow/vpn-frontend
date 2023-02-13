import React from 'react';
import './CopyToClipboardField.css';
import copyIcon from '../../images/copy.svg';
import copiedIcon from '../../images/check.svg';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useAnalyticsEventTracker from '../../hooks/useAnanlyticsEventTracker';
import { translations } from '../../utils/translations/translations';
import platform from 'platform-detect/os.mjs';
function CopyToClipboardField({ currentClass, data, gaAction }) {
  const [isCopied, setIsCopied] = React.useState(false);
  const copyToClipboardRef = React.useRef(null);
  const gaEventTracker = useAnalyticsEventTracker('CopyLink');
  function copyToClipboard(e) {
    if (platform.android) {
      console.log(copyToClipboardRef);
      copyToClipboardRef.current.select();
      return;
    }
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
      {platform.android ? (
        <textarea
          ref={copyToClipboardRef}
          className='copy-to-clipboard__key-input'
          value={data}
          contentEditable={false}
        />
      ) : (
        <span className='copy-to-clipboard__key'>{data}</span>
      )}
      <img className='copy-to-clipboard__copy-icon' src={copyIcon} alt='copy' />
      {isCopied && (
        <div className={`copy-to-clipboard__popup ${currentClass}`}>
          <span className='copy-to-clipboard__popup-text'>
            {translations.ru.copyToClipboard}
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
