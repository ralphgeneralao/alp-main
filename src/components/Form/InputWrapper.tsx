import React, { memo } from 'react';
import { Label } from 'reactstrap';

interface InputWrapperProps {
  label?: string;
  labelFor?: string;
  isRequired?: boolean;
  infoText?: string;
  errorText?: string;
  children: JSX.Element;
}

function InputWrapper({ label, labelFor, isRequired = false, infoText, errorText, children }: InputWrapperProps) {
  return (
    <>
      {label && (
        <Label for={labelFor}>
          {isRequired && <span className="red">*</span>}
          {label}
        </Label>
      )}

      {children}

      {infoText && <div className="input-info-text">{infoText}</div>}

      {errorText && <div className="input-error-text">{errorText}</div>}
    </>
  );
}

export default memo(InputWrapper);
