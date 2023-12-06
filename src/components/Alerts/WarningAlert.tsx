import React, { CSSProperties, useEffect, useState } from 'react';

interface WarningAlertProps {
  message: any;
  onClose?(): void;
}

const alertStyle: CSSProperties = {
  marginTop: '1rem',
  marginBottom: '2.1rem',
  // fontSize: '0.9rem',
  paddingRight: '2.5rem',
  position: 'relative',
  alignItems: 'center',
  backgroundColor: '#fffaf5',
  border: 0,
  borderLeft: '5px solid #FAB570  ',
  color: '#747d8d',
  borderRadius: '4px',
  fontWeight: '100',
};

const iconStyle: CSSProperties = {
  position: 'absolute',
  right: '10px',
  fontSize: '1.5rem',
  top: '40%',
  color: '#b38f6b',
  fontWeight: '100',
};

function WarningAlert({ message, onClose }: WarningAlertProps) {
  const [show, setShow] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setShow(message !== '' && message !== null);
    setError(message);
  }, [message]);

  const close = () => {
    setShow(false);
    if (onClose) onClose();
  };
  return show ? (
    <div className="alert alert-warning fade show" style={alertStyle}>
      {error}
      <i className="icon icon-close clickable" style={iconStyle} onClick={close} />
    </div>
  ) : null;
}

export default WarningAlert;
