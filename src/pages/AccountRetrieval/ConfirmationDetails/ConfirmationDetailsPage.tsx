import { NavLink, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import './ConfirmationDetailsPage.scss';
import { AlpLogoSpinningSmileGif } from '../../../helpers/imagePreloader';
import { getFormattedPhoneNum } from '../utils/utils';
import { phoneRegEx } from '../../../helpers/constants';

function ConfirmationDetailsPage() {
  const { email } = useParams();

  return (
    <div className="confirmation-page-wrapper flex relative">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningSmileGif} alt="Confirmation" />
      </div>
      <div className="confirmation-page-content">
        <div className="confirmation-header">
          <h3>Primary Email or Username</h3>
          <p className="text-center">
            Primary Email and Username details have been sent to: <br />{' '}
            {phoneRegEx.test(email ?? '') ? `+63 ${getFormattedPhoneNum(email)}` : email}
          </p>
        </div>
        <p className="clarification-text text-center">Is the Secondary Email or Mobile Number Incorrect?</p>
        <div className="confirmation-footer">
          <NavLink to="/accountretrieval/requestaccountcredentials">Go Back To Forgot Primary Email Or Username</NavLink>
        </div>
        <div className="desc2">I have received my Primary Email or Username</div>
        <NavLink to="/login">
          <Button className="back-to-login-btn">Go to Login</Button>
        </NavLink>
      </div>
    </div>
  );
}

export default ConfirmationDetailsPage;
