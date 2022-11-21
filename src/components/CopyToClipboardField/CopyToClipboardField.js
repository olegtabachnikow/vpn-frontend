import React from 'react';
import './CopyToClipboardField.css';
import copyIcon from '../../images/copy.png';
import copiedIcon from '../../images/check.png';

function CopyToClipboardField({ currentClass, data }) {
  const [isCopied, setIsCopied] = React.useState(false);
  function copyToClipboard() {
    setIsCopied(true);
    navigator.clipboard.writeText(data);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  }
  return (
    <div
      onClick={copyToClipboard}
      className={`copy-to-clipboard ${currentClass}`}
    >
      <span className='copy-to-clipboard__key'>{data}</span>
      {
        <img
          className='copy-to-clipboard__copy-icon'
          src={!isCopied ? copyIcon : copiedIcon}
          alt='copy'
        />
      }
    </div>
  );
}

export default CopyToClipboardField;
