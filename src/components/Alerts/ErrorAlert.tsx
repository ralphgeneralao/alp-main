import React, { useState, useEffect, CSSProperties } from 'react';

interface ErrorAlertProps {
  message: string;
  onClose?(): void;
}

const alertStyle: CSSProperties = {
  marginBottom: '1rem',
  fontSize: '0.9rem',
  padding: '1rem',
  paddingRight: '2.5rem',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#F5E6EB',
  border: 0,
  borderLeft: '4px solid #990033',
  color: '#990033',
  borderRadius: '4px',
};

const iconStyle: CSSProperties = {
  position: 'absolute',
  right: '10px',
  fontSize: '1.5rem',
};

function ErrorAlert({ message, onClose }: ErrorAlertProps) {
  const [show, setShow] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setShow(message !== '' && message !== null);
    //this will check if the error message contains a colon
    //it will trim the error message to its real error message
    if (message && message.includes(':')) {
      const messageArray = message.split(':');
      setError(messageArray[messageArray.length - 1]);
    } else {
      setError(message);
    }
  }, [message]);

  const close = () => {
    setShow(false);
    if (onClose) onClose();
  };

  return show ? (
    <div className="alert alert-danger fade show" style={alertStyle}>
      {error}
      <i className="icon icon-close clickable" style={iconStyle} onClick={close} />
    </div>
  ) : null;
}

export default ErrorAlert;
