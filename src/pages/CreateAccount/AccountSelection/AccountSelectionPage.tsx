import { NavLink, useNavigate } from 'react-router-dom';
import './AccountSelectionPage.scss';
import ClickableCard from '../../../components/Cards/SelectionCard/SelectionCard';
import { AlpLogoSpinningGif } from '../../../helpers/imagePreloader';

function AccountSelectionPage() {
  const navigate = useNavigate();

  const navigateTo = (location: string) => {
    navigate(`/createaccount/${location}/0`);
  };

  return (
    <div className="selection-page-wrapper flex relative">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningGif} alt="A Learning Place Logo" />
      </div>
      <div className="selection-page-content">
        <div className="selection-header w-100">
          <h3>Create a free Account</h3>
          <div className="selection-desc w-100 text-center">
            <span className="creating">
              After creating your free Account, you will be able to use it to Subscribe or Activate a Licence.
            </span>
          </div>
          <div className="selection-desc">
            <span className="created">
              Already have an Account? <NavLink to="/login">Go to Login</NavLink>
            </span>
          </div>
        </div>
        <div className="selection-body">
          <ClickableCard
            cardId="personal"
            cardHeader="I want to create a Personal Account"
            color="green"
            icon="user-regular"
            onClick={navigateTo}
          />
          <br />
          <ClickableCard
            cardId="school"
            cardHeader="I want to create a School Account"
            color="red"
            icon="toga_regular"
            onClick={navigateTo}
          />
          {/* <div className="create-card-caption">To allow you to Subscribe as a School, please create a School Account</div> */}
        </div>
      </div>
    </div>
  );
}

export default AccountSelectionPage;
