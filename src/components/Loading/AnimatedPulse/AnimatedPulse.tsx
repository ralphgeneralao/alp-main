import React from 'react';
import './AnimatedPulse.scss';

interface AnimatedPulseProps {
  color?: 'white' | 'green';
}

function AnimatedPulse({ color = 'white' }: AnimatedPulseProps) {
  return (
    <div className={`lds-facebook pulse-${color}`}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default AnimatedPulse;
