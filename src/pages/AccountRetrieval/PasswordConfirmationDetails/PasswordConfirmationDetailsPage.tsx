import { NavLink, useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import './PasswordConfirmationDetailsPage.scss';
import { AlpLogoSpinningSmileGif } from '../../../helpers/imagePreloader';
import { useRequestResetPasswordMutation } from '../../../store/services/authApi';

function PasswordConfirmationDetailsPage() {
  const { email } = useParams();
  const [requestResetPassword] = useRequestResetPasswordMutation();

  return (
    <div className="password-confirmation-page-wrapper flex relative">
      <div className="logo-no-text">
        <img src={AlpLogoSpinningSmileGif} alt="Confirmation" />
      </div>
      <div className="password-confirmation-page-content">
        <div className="password-confirmation-header">
          <h3>Reset Password</h3>
          <p className="text-center">
            A Reset Password link has been sent to: <br /> {email}
          </p>
        </div>
        <p className="password-clarification-text text-center">Is the Primary Email Incorrect?</p>
        <div className="password-confirmation-footer">
          <NavLink to="/accountretrieval/requestresetpassword">Go Back To Forgot Password</NavLink>
        </div>
        <Button className="password-back-to-login-btn" onClick={() => requestResetPassword(email)}>
          Resend Link
        </Button>
      </div>
    </div>
  );
}

export default PasswordConfirmationDetailsPage;
