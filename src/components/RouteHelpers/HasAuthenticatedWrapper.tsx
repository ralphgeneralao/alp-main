/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import cookie from '../../helpers/cookieHelper';
import LoadingScreen from '../Loading/LoadingScreen/LoadingScreen';
import config from '../../config';

function HasAuthenticatedWrapper() {
  const navigate = useNavigate();

  useEffect(() => {
    if (cookie.isLoggedIn()) {
      // navigate('/login/selectlicense');
      window.location.href = `${config.subsiteUrls.tr}`;
    }
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

export default HasAuthenticatedWrapper;
