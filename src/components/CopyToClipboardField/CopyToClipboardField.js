import React from 'react';
import './CopyToClipboardField.css';
import copyIcon from '../../images/copy.svg';
import copiedIcon from '../../images/check.svg';
import { motion } from 'framer-motion';

function CopyToClipboardField({ currentClass, data }) {
  const [isCopied, setIsCopied] = React.useState(false);
  function copyToClipboard(e) {
    e.stopPropagation();
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
      className={`copy-to-clipboard ${currentClass}`}
      whileTap={{ scale: 0.98 }}
    >
      <span className='copy-to-clipboard__key'>{data}</span>
      {
        <img
          className='copy-to-clipboard__copy-icon'
          src={!isCopied ? copyIcon : copiedIcon}
          alt='copy'
        />
      }
    </motion.button>
  );
}

export default CopyToClipboardField;
