import React, { Suspense, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import cookie from '../../helpers/cookieHelper';
import LoadingScreen from '../Loading/LoadingScreen/LoadingScreen';
import { useGetUserContextQuery } from '../../store/services/userContextApi';

function ProtectedRouteWrapper() {
  const { data: userData, isLoading, isFetching } = useGetUserContextQuery('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!cookie.isLoggedIn()) {
      navigate('/login');
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const user = userData as any;
    //if the user is logged in but not yet verified and trying to access protected
    //routes other than emailverification, redirect to emailverification page
    if (user && !user?.is_verified && !location.pathname.includes('emailverification')) {
      navigate(`/createaccount/${user?.is_institution ? 'school' : 'personal'}/emailverification/${user?.email}/true`);
    }
  }, [userData, isLoading, isFetching]);

  if (!isAuthenticated || !userData) return <LoadingScreen />;

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
}

export default ProtectedRouteWrapper;
