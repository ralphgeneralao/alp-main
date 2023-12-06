/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  menuItems,
  sidemenuItems,
  sideItems,
  sideItemsNotSubscribed,
  menuItemsNotSubscribed,
  menuItemsNotVerified,
} from './constants';

export const getTopmenuItems = (is_subscribed: boolean, is_verified: boolean) => {
  let menu = is_subscribed ? menuItems : !is_verified ? menuItemsNotVerified : menuItemsNotSubscribed;
  return menu.map((item: any) =>
    item.urlPath === '/subscription/*'
      ? { ...item, urlPath: is_subscribed ? 'subscription/tr/mysubscriptions' : 'subscription/tr' }
      : item
  );
};

export const getSidemenuItem = (currentPath: string, is_subscribed: boolean) => {
  let sideItem = is_subscribed ? sideItems : sideItemsNotSubscribed;
  //get menu based on the current path
  const sidemenu = sideItem?.find((x: any) => x.pathname.includes(currentPath.split('/')[1]));

  // return sideItems[0]?.items.map((item: any) => item);
  return (
    sideItem[0]?.items.map((item: any) =>
      item.urlPath === 'subscription/*'
        ? { ...item, urlPath: is_subscribed ? 'subscription/tr/mysubscriptions' : 'subscription/tr' }
        : item
    ) ?? []
  );
};

export const getSidemenuItems = (currentPath: string, is_subscribed: boolean) => {
  //get menu based on the current path
  const sidemenu = sidemenuItems.find((x: any) => x.pathname.includes(currentPath.split('/')[1]));
  return (
    sidemenu?.items.map((item: any) =>
      item.mainPath === 'subscription'
        ? { ...item, urlPath: is_subscribed ? 'subscription/tr/mysubscriptions' : 'subscription/tr' }
        : item
    ) ?? []
  );
};
export const isCurrentMenuASidemenu = (menu: string): { isSideMenu: boolean; sideMenuId?: string } => {
  const sidemenu = sidemenuItems.find((x: any) => x.pathname.includes(menu.split('/')[1]));

  const matches = sidemenu?.items.some(
    (x: any) =>
      x.urlPath === menu.replace('/', '') ||
      x.chainUrls?.some((item: any) => item === menu.replace('/', '')) ||
      (x.submenu &&
        x.submenu.some(
          (sub: any) =>
            sub.urlPath === menu.replace('/', '') || sub.chainUrls?.some((item: any) => item === menu.replace('/', ''))
        ))
  );
  return { isSideMenu: matches ?? false, sideMenuId: sidemenu?.sideMenuId };
};

export const isCurrentMenuUseResourceFilter = (menu: string): boolean => {
  const sidemenu = sidemenuItems.find((x: any) => x.pathname.includes(menu.split('/')[1]));
  // const matches = sidemenu?.items.some((x: any) => x.urlPath === menu.replace('/', '') && x.hasResourceFilter);
  const matches = sidemenu?.items.some((x: any) => menu.includes(x.urlPath) && x.hasResourceFilter);
  return matches ?? false;
};
