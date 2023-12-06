import React from 'react';
import './LoadingScreen.scss';

function LoadingScreen() {
  return (
    <div className="loading-wrapper">
      <div className="lds-dual-ring"></div>
    </div>
  );
}

export default LoadingScreen;
