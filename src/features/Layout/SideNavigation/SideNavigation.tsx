import React, { useState, useEffect } from 'react';
import './SideNavigation.scss';
import { NavLink, useLocation } from 'react-router-dom';
import HexIcon from '../../../components/CustomIcons/HexIcon/HexIcon';
import { useLogoutMutation } from '../../../store/services/authApi';
import { getSidemenuItem } from '../Utils/utilityFunctions';
// import { ChevronHue, ChevronVibrant } from '../../../helpers/imagePreloader';
import useLayout from '../hooks/useLayout';

function SideNavigation(props: any) {
  const location = useLocation();
  const [logout, formStatus] = useLogoutMutation();
  const [sideMenuItems, setSideMenuItems] = useState<any[]>([]);
  const [collapsibleMenus, setCollapsibleMenus] = useState<any[]>([]);
  const { isSideNavigationVisible, isSidemenuIconView, currentPath, toggleIconView } = useLayout();

  useEffect(() => {
    setSideMenuItems(getSidemenuItem(currentPath, props?.is_subscribed));
  }, [currentPath]);

  useEffect(() => {
    //check if the current URL is a collapsible menu or under a collapsible menu
    const pathname = location.pathname.replace('/', '');
    const collapsible = collapsibleMenus.find(
      (m: any) =>
        m.urlPath === pathname ||
        m.submenu?.find((x: any) => x.urlPath === pathname || x.chainUrls?.some((item: any) => item === pathname))
    );

    let updatedMenus: any[];
    if (collapsible) {
      updatedMenus = collapsibleMenus.map((menu) =>
        menu.urlPath === pathname ||
          menu.submenu?.find((x: any) => x.urlPath === pathname || x.chainUrls?.some((item: any) => item === pathname))
          ? {
            ...collapsible,
            isCollapsed: true,
          }
          : {
            ...menu,
            isCollapsed: false,
          }
      );
    } else {
      updatedMenus = collapsibleMenus.map((menu) => {
        return {
          ...menu,
          isCollapsed: false,
        };
      });
    }

    setCollapsibleMenus(updatedMenus);
  }, [location.pathname, sideMenuItems]);

  const getNestedMenu = (menu: any): JSX.Element | null => {
    const collapsible = collapsibleMenus.find((x: any) => x.displayName === menu.displayName);

    if (collapsible === undefined || collapsible === null || (collapsible && !collapsible.isCollapsed)) {
      //if not yet added, add it to the state
      if (collapsible === undefined || collapsible === null) {
        setCollapsibleMenus([...collapsibleMenus, menu]);
      }
      return null;
    }

    return (
      <li className="sub-menu flex flex-row">
        <div className="vertical-divider">
          <div />
        </div>
        <div className="w-100">
          <ul>
            {menu.submenu?.map((item: any, key: number) => (
              <li key={key}>
                <NavLink
                  to={item.urlPath}
                  className={({ isActive }) =>
                    isActive || item.chainUrls?.some((x: any) => x === location.pathname.replace('/', ''))
                      ? 'sidemenu-selected'
                      : ''
                  }
                  end
                >
                  <span>{item.displayName}</span>

                  {/* {item.badgeId === 'pendingpayment' && subscriptionData?.pending_payments_count > 0 && (
                    <div className="count-circle box-center">
                      <>{subscriptionData?.pending_payments_count}</>
                    </div>
                  )} */}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  };

  // const getCarretIcon = (menuPath: string, currPath: string) => {
  //   return menuPath && menuPath === currPath ? (
  //     <i className="icon icon-chevron-up collapse-menu-icon" />
  //   ) : (
  //     <i className="icon icon-chevron-down collapse-menu-icon" />
  //   );
  // };

  const getMenu = (): JSX.Element[] => {
    const currPath = location.pathname.split('/');
    return sideMenuItems.map((item, key) => {
      return (
        <React.Fragment key={key}>
          <li className="relative">
            <NavLink
              to={item.urlPath || location.pathname}
              className={({ isActive }) =>
                `${isActive && item.urlPath && item.urlPath.includes(currPath[1]) && !item.urlPath?.includes('tr/scopeandsequence') ? 'sidemenu-selected' : 'sidemenu-unselected'
                } ${item.submenu && item.submenu.length > 0 ? 'has-submenu' : ''}`
              }
            // end
            >
              <div className="hexIcon">
                <HexIcon icon={item.icon} colorTheme="green" isTextIcon={item.isTextIcon} colorMode="outlined" />
                <span>{item.displayName}</span>

                {/* {item.submenu && item.submenu.length > 0 && getCarretIcon(item.mainPath, currPath[1])} */}
              </div>
            </NavLink>
          </li>

          {/* check if there's a nested menu and render it if there's any */}
          {item.submenu && !isSidemenuIconView && item.submenu.length > 0 && getNestedMenu(item)}
        </React.Fragment>
      );
    });
  };

  useEffect(() => {
    if (formStatus.isError) {
      alert('Something went wrong. Please try again.');
    } else if (formStatus.isSuccess) {
      window.location.reload();
    }
  }, [formStatus]);

  //   const getChevIcon = () => {
  //     if (!isSidemenuIconView) {
  //       return <img src={ChevronHue} className="chev-hue absolute" alt="Collapse menu" />;
  //     } else {
  //       return <img src={ChevronVibrant} className="chev-vib absolute" alt="Collapse menu" />;
  //     }
  //   };

  const triggerLogout = () => {
    logout('');
  };

  return (
    <aside className={`nav-container nav-sidemenu-visible nav-sidemenu-icon-view`}>
      {/* <section className="tr-subsite-row flex flex-row">
        <HexIcon icon="subsite-tr" colorTheme="green" colorMode="outlined" />
        <span>Teaching Resources</span>
      </section> */}

      {/* <div className="relative w-100">
        <div className="row-divider" />
        <div className="toggle-icon-wrapper absolute clickable" onClick={() => toggleIconView()}>
          <div className="relative box-center">
            <i className="icon icon-hexagon" />
            {getChevIcon()}
          </div>
        </div>
      </div> */}

      <section className="nav-menu-row">
        <ul>{getMenu()}</ul>
      </section>

      <div className="row-divider" />

      <section className="nav-menu-row">
        <ul>
          <li onClick={triggerLogout}>
            <NavLink to="/subscription" end>
              <div className="hexIcon_logout">
                <HexIcon icon="logout" colorTheme="green" colorMode="outlined" />
                <span>Logout</span>
              </div>
            </NavLink>
          </li>
        </ul>
      </section>
    </aside>
  );
}

export default SideNavigation;
