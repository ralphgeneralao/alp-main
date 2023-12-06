import React from 'react';

interface PasswordWrapperProps {
  showPassword: Boolean;
  setShowPassword(show: Boolean): void;
  children: JSX.Element;
}

function PasswordWrapper({ showPassword, setShowPassword, children }: PasswordWrapperProps) {
  return (
    <div className="relative flex flex-h-center">
      {children}
      {showPassword ? (
        <i
          className="icon icon-eye clickable"
          onClick={() => setShowPassword(false)}
          title="Click to Hide Password"
          style={{
            position: 'absolute',
            right: '17.5px',
            fontSize: '1.2rem',
            opacity: 0.8,
          }}
        />
      ) : (
        <i
          className="icon icon-eye-slash clickable"
          onClick={() => setShowPassword(true)}
          title="Click to Show Password"
          style={{
            position: 'absolute',
            right: '16.2px',
            fontSize: '1.2rem',
            opacity: 0.8,
          }}
        />
      )}
    </div>
  );
}

export default PasswordWrapper;
