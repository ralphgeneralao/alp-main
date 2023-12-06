import React from 'react';
import { Button } from 'reactstrap';
import './SubmitButton.scss';
import AnimatedPulse from '../../Loading/AnimatedPulse/AnimatedPulse';

interface SubmitButtonProps {
  btnText: string;
  formStatus: any;
  disabled?: boolean;
}

function SubmitButton({ btnText, formStatus, disabled = false }: SubmitButtonProps) {
  return (
    <Button type="submit" className="submit-btn" disabled={formStatus.isLoading || disabled}>
      <span>{formStatus.isLoading ? <AnimatedPulse /> : btnText}</span>
    </Button>
  );
}

export default SubmitButton;
