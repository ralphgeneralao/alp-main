import Footer from './Footer/Footer';
import Navigation from './Navigations/Navigation';
import cookie from '../../helpers/cookieHelper';

import './Layout.scss';
import Background from '../../features/SubsiteHexagons/Background/Background';
import SideNavigation from './SideNavigation/SideNavigation';
import useLayout from './hooks/useLayout';

interface LayoutProps {
  children: JSX.Element;
}

function Layout({ children }: LayoutProps) {
  const { checked, isVerified } = useLayout();

  return (
    <>
      <Navigation is_subscribed={checked} is_verified={isVerified} />
      {cookie.isLoggedIn() && isVerified ? <SideNavigation is_subscribed={checked} /> : <></>}
      <main className={`w-100 ${cookie.isLoggedIn() && isVerified ? 'marginLeft' : ''}`}>
        <Background />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
