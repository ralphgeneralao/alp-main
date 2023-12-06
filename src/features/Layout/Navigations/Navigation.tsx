/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Navigation.scss';
import { NavLink } from 'react-router-dom';
import { menuItems, subsites } from '../Utils/constants';
import { Button } from 'reactstrap';
import { AlpLogo } from '../../../helpers/imagePreloader';
import { userContextApi, useLazyGetUserContextQuery } from '../../../store/services/userContextApi';
import cookie from '../../../helpers/cookieHelper';
import UserCard from '../UserCard/UserCard';
import HexIcon from '../../../components/CustomIcons/HexIcon/HexIcon';
import { subsiteThemes } from '../../../helpers/constants';
import config from '../../../config';
import { getTopmenuItems } from '../Utils/utilityFunctions';
import useLayout from '../hooks/useLayout';

function Navigation(props: any) {
  const [name, setName] = useState('');
  const [role, setRole] = useState('AH');
  const [getUserContext] = useLazyGetUserContextQuery();
  const [dropdownOpened, setDropdownOpened] = useState('');
  const { isSideNavigationVisible, sideMenuId } = useLayout();
  const [menuItems, setMenuItems] = useState<any[]>(getTopmenuItems(props.is_subscribed, props?.is_verified));
  // @ts-ignore
  const { data: userData } = userContextApi.endpoints.getUserContext.useQueryState('', {
    selectFromResult: (result: any) => result,
  });

  useEffect(() => {
    if (cookie.isLoggedIn()) getUserContext('');
  }, []);

  useEffect(() => {
    const user = userData as any;

    if (user) {
      if (user?.is_institution) setName(user?.institution_profile?.institution_name);
      else setName(`${user?.user_profile?.first_name} ${user?.user_profile?.last_name}`);

      //set Role
      if (user?.roles?.find((x: any) => x.role?.short_code === 'MA')) setRole('MA');
      else if (user?.roles?.find((x: any) => x.role?.short_code === 'SUB')) setRole('SUB');
      else if (user?.roles?.find((x: any) => x.role?.short_code === 'SV')) setRole('SV');
      else if (user?.roles?.find((x: any) => x.role?.short_code === 'LNS')) setRole('LNS');
      else if (user?.roles?.find((x: any) => x.role?.short_code === 'SL')) setRole('SL');
    }
  }, [userData]);

  useEffect(() => {
    setMenuItems(getTopmenuItems(props?.is_subscribed, props?.is_verified))
  }, [props?.is_subscribed, props?.is_verified]);

  const getCarretIcon = (dropdownId: string) => {
    return dropdownOpened === dropdownId ? (
      <i className="icon icon-chevron-up nav-dropdown-icon" />
    ) : (
      <i className="icon icon-chevron-down nav-dropdown-icon" />
    );
  };

  const getMenu = (): JSX.Element[] => {
    return menuItems.map((item: any, key: number) => {
      if ((!item.isProtected && !cookie.isLoggedIn()) || (!item.hideAfterLogin && cookie.isLoggedIn())) {
        return (
          <li key={key}>
            {!item.dropdownId ? (
              <NavLink
                to={item.urlPath}
                onClick={() => setDropdownOpened('')}
                className={({ isActive }) =>
                  isActive || (isSideNavigationVisible && item.hasSidebar && sideMenuId === item.sideMenuId)
                    ? 'menu-selected'
                    : ''
                }
                // className="menu-selected"
                end
              >
                {item.displayName}

                <div className="selected-underline" />
              </NavLink>
            ) : (
              // if the menu is a dropdown, we use div instead of navlink to prevent redirect and just show the submenu
              <div
                className="main-menu-dropdownmenu"
                onClick={() => setDropdownOpened((state) => (state === item.dropdownId ? '' : item.dropdownId))}
              >
                {item.displayName}

                {getCarretIcon(item.dropdownId)}
              </div>
            )}

            <div className="selected-underline" />
          </li>
        );
      } else {
        return <React.Fragment key={key} />;
      }
    });
  };

  const getSubsitesMenu = (): JSX.Element[] => {
    return subsites.map((item: any, key: number) => {
      const { color } = subsiteThemes.get(item.short_code);
      return (
        <li key={key}>
          <a href={item.url} target="_blank" rel="noreferrer" className={color}>
            {item.name}
          </a>
        </li>
      );
    });
  };

  return (
    <>
      <header className="main-header flex flex-col">
        <div className={`navigation-row`}>
          <nav className="flex flex-row">
            <div className="flex flex-row">
              {/* Brand column */}
              <div className="brand-col">
                {/* <a href={`${config.subsiteUrls.main}`}>
                  <img src={AlpLogo} alt="A Learning Place Logo" />
                </a> */}
                <a href="#">
                  <img src={AlpLogo} alt="A Learning Place Logo" />
                </a>
              </div>

              {/* Menu column */}
              <ul className="menu-col flex flex-row">{getMenu()}</ul>
            </div>

            {/* Buttons column */}
            <div className="buttons-col flex flex-row">
              <Button className='member-btn' onClick={() => window.open('https://alearningplace.com.au/member/', '_self')}>take me to the current site to subscribe</Button>
              {/* <NavLink to="/activate">
                <Button color="link" className="horizontally-center activate-color">
                  <HexIcon icon="key" colorTheme="green" />
                  Activate a Key
                </Button>
              </NavLink> */}

              {/* <div className="divider" /> */}

              {cookie.isLoggedIn() ? (
                <UserCard name={name} role={role} isInstitution={userData?.is_institution} />
              ) : (
                <>
                  <NavLink to="/login">
                    <Button color="link" className="login-btn">
                      Login
                    </Button>
                  </NavLink>

                  <NavLink to="/createaccount">
                    <Button className="register-btn">Create A Free Account</Button>
                  </NavLink>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
      <div className={`subsite-row flex with-shadow show-subsites`}>
        {/* <ul className="flex flex-row">{getSubsitesMenu()}</ul> */}
      </div>
    </>
  );
}

export default Navigation;
