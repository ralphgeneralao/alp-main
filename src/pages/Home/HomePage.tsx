import './Homepage.scss';
import HomepageBanner from './components/HomepageBanner/HomepageBanner';
import HomepageCard from './components/HomepageCard/HomepageCard';
import HomepageInfo from './components/HomepageInfo/HomepageInfo';
import TestimonialPage from './components/Testimonials/TestimonialPage';
import FooterHexagon from './components/FooterHexagon/FooterHexagon';
import cookie from '../../helpers/cookieHelper';

function HomePage() {
  return (
    <div className={`homepage-wrapper w-100 ${cookie.isLoggedIn() ? 'marginLeft' : ''}`}>
      <HomepageBanner />
      <HomepageCard />
      <HomepageInfo />
      <TestimonialPage />
      <FooterHexagon />
    </div>
  );
}

export default HomePage;
