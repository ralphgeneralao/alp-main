import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLazyCheckIfSubscribedQuery } from '../store/activeSubscriptionApi';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/storeHooks';
import { toggleSideMenu, toggleSidemenuIconView, toggleResourceFilterVisible } from '../store/layoutSlice';
import { isCurrentMenuASidemenu, isCurrentMenuUseResourceFilter } from '../Utils/utilityFunctions';
import { useGetUserContextQuery, useLazyGetUserContextQuery } from '../../../store/services/userContextApi';

function useLayout() {
  const location = useLocation();
  const dispatcher = useAppDispatch();
  const [checked, setChecked] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [getUserContext] = useLazyGetUserContextQuery();
  const { data: userData } = useGetUserContextQuery('');
  const [checkIfSubscribed, { data: isSubscribed }] = useLazyCheckIfSubscribedQuery();
  const { isSideNavigationVisible, sideMenuId, isSidemenuIconView, showResourceFilter } = useAppSelector((state) => state.layout);

  const toggleIconView = () => {
    dispatcher(toggleSidemenuIconView(!isSidemenuIconView));
  };

  useEffect(() => {
    //this use Effect monitors when to show side menu
    //only show side menu when the url path is a sidemenu path
    const { isSideMenu, sideMenuId: menuId } = isCurrentMenuASidemenu(location.pathname);
    dispatcher(toggleSideMenu(isSideMenu, menuId));

    //always check if we need to hide resource filter
    dispatcher(toggleResourceFilterVisible(isCurrentMenuUseResourceFilter(location.pathname)));

    //update current path
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const user = userData as any;
    if (user) {
      if (user?.email) {
        checkIfSubscribed(user?.email);
      }
    }
  }, [userData]);

  useEffect(() => {
    const check = isSubscribed as [];
    if (check) {
      if (check?.length) {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }
  }, []);

  useEffect(() => {
    if ((userData as any)?.is_verified) {
      setIsVerified(true);
    } else {
      getUserContext('');
      setIsVerified(false);
    }
  }, [userData]);

  return {
    currentPath,
    sideMenuId,
    isSideNavigationVisible,
    isSidemenuIconView,
    showResourceFilter,
    checked,
    isVerified,
    isSubscribed,
    toggleIconView,
  };
}

export default useLayout;
