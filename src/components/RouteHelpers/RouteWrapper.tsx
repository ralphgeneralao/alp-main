import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import LoadingScreen from '../Loading/LoadingScreen/LoadingScreen';
import { useAppDispatch } from '../../store/hooks/storeHooks';
import { resetSelection } from '../../features/SubsiteHexagons/store/subsiteHexagonSlice';

const RouteWrapper = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    //this ensures that the Hexagon selection state is always at reset
    //changing of selection mode is triggered inside child pages
    dispatch(resetSelection());
  }, []);

  //ensures that the screen scrolls to top when location changes
  useEffect(() => window.scrollTo(0, 0), [location]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Outlet />
    </Suspense>
  );
};

export default RouteWrapper;
