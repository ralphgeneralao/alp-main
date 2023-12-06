import React from 'react';
import './LicenseBadge.scss';

interface LicenseBadgeProps {
  displayText: string;
  color: 'green' | 'purple' | 'yellow' | 'red' | 'blue';
}

function LicenseBadge({ displayText, color }: LicenseBadgeProps) {
  return (
    <div className={`license-badge ${color}-badge`}>
      <span>{displayText}</span>
    </div>
  );
}

export default LicenseBadge;
