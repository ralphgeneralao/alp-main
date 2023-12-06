import { useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.scss';
import ClickableCard from '../../../components/Cards/SelectionCard/SelectionCard';
import { AlpLogoSpinningTransparentGif, AlpLogoSpinningThinkingGif2 } from '../../../helpers/imagePreloader';
// import Background from '../../../features/SubsiteHexagons/Background/Background';

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const navigateTo = (location: string) => {
    navigate(`/accountretrieval/${location}`);
  };

  // useEffect(() => {
  //   if (!hasReloadedRef.current) {
  //     hasReloadedRef.current = true;
  //     window.location.reload();
  //   }
  // }, []);

  return (
    <div className="selection-page-wrapper">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningTransparentGif} alt="A Learning Place Logo" />
      </div>
      <div className="selection-page-content">
        <div className="selection-header w-100">
          <h4>
            Forgot Primary Email, Username
            <br /> or Password
          </h4>
        </div>
        <div className="selection-body">
          <ClickableCard
            cardId="requestaccountcredentials"
            cardHeader="I forgot my Primary Email or Username"
            color="green"
            icon="envelope-regular"
            onClick={navigateTo}
          />
          <br />
          <div className="card-desc2">Select here if you entered 2 email addresses when you set up your account.</div>

          <div className="grid-desc">
            <img src={AlpLogoSpinningThinkingGif2} alt="ALP Logo Spinning Thinking" />
            <div className="card-desc3">
              If you entered only 1 email address, please email us at <span>info@alearningplace.com.au</span> and we will retrieve
              your account information for you.
              <p className="mb-1" />
              After logging in, you will be able to add a secondary email address and phone number for Account retrieval, by
              selecting My Account.
            </div>
          </div>
          <ClickableCard
            cardId="requestresetpassword"
            cardHeader="I forgot my Password"
            color="red"
            icon="lock-closed"
            onClick={navigateTo}
          />
          {/* <div className="card-desc2">
            Students, an email will be sent to your Supervisor requesting them to reset your password.
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
