import React, { useState, useEffect } from 'react';
import ErrorAlert from './ErrorAlert';
import { extractErrorMessage } from '../../helpers/utilityFuncions';

interface FormErrorAlertProps {
  formStatus: any;
}

function FormErrorAlert({ formStatus }: FormErrorAlertProps) {
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    if (formStatus?.isError) {
      // @ts-ignore
      setServerError(extractErrorMessage(formStatus));
      window.scroll(0, 0);
    }
  }, [formStatus]);

  return serverError ? <ErrorAlert message={serverError} onClose={() => setServerError('')} /> : null;
}

export default FormErrorAlert;
