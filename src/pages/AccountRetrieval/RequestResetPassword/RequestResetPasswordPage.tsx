import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import classnames from 'classnames';
import './RequestResetPasswordPage.scss';
import InputWrapper from '../../../components/Form/InputWrapper';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRequestResetPasswordMutation } from '../../../store/services/authApi';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import { phoneRegEx } from '../../../helpers/constants';
import { AlpLogoSpinningTransparentGif, AlpLogoSpinningThinkingGif2 } from '../../../helpers/imagePreloader';

const schema = Yup.object({
  emailOrMobile: Yup.string().required('Secondary Email is required'),
});

function RequestResetPasswordPage() {
  const [requestResetPassword, formStatus] = useRequestResetPasswordMutation();
  const [serverError, setServerError] = useState('');
  const navigate = useNavigate();

  const { control, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      emailOrMobile: '',
    },
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  const saveForm = (data: any) => {
    const { emailOrMobile } = data;
    requestResetPassword(emailOrMobile);
  };

  useEffect(() => {
    if (formStatus?.isError) {
      // @ts-ignore
      setServerError(formStatus?.error?.data?.response?.errors[0]?.message);
    } else if (formStatus?.isSuccess) {
      if (phoneRegEx.test(getValues()?.emailOrMobile)) {
        // navigate(`/createaccount/personal/emailverification/${getValues()?.emailOrMobile ?? '0'}/false`);
        navigate(`/accountretrieval/mobileverification/${getValues()?.emailOrMobile ?? ''}`);
      } else {
        navigate(`/accountretrieval/passwordconfirmationdetails/${getValues()?.emailOrMobile ?? ''}`);
      }
    }
  }, [formStatus]);

  return (
    <div className="password-retrieval-page-wrapper flex relative">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningTransparentGif} alt="A Learning Place Logo" />
      </div>
      <div className="password-retrieval-page-content">
        <div className="password-retrieval-header text-center w-100">
          <h4>Reset Password</h4>
        </div>
        <div className="password-retrieval-body">
          <Form className="alp-form" onSubmit={handleSubmit(saveForm)}>
            <div className="desc1">
              <p>Your Reset Password link will be sent to your Primary or Secondary Email Address or Mobile Number.</p>
              <p className="mb-1">If you do not receive the email, please check your spam or junk folder.</p>
            </div>
            {serverError && <ErrorAlert message={serverError} onClose={() => setServerError('')} />}
            <FormGroup>
              <InputWrapper labelFor="emailOrMobile" errorText={formState?.errors?.emailOrMobile?.message}>
                <Controller
                  name="emailOrMobile"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Enter Primary / Secondary Email or Mobile No"
                      type="text"
                      id="emailOrMobile"
                      className={classnames({
                        'input-error': formState?.errors?.emailOrMobile?.message,
                        'background-green': getValues().emailOrMobile,
                      })}
                      autoComplete="nope"
                      {...field}
                    />
                  )}
                />
              </InputWrapper>

              <div className="grid-desc">
                <img src={AlpLogoSpinningThinkingGif2} alt="ALP Logo Spinning Thinking" />
                <div className="card-desc">
                  If you entered only 1 email address, please email us at <span>info@alearningplace.com.au</span> and we will
                  retrieve your account information for you.
                  <p className="mb-1" />
                  After logging in, you will be able to add a secondary email address and phone number for Account retrieval, by
                  selecting My Account.
                </div>
              </div>
            </FormGroup>
            <FormGroup className="submit-btn-row solid-color">
              <SubmitButton btnText="Retrieve Primary Email or Username" formStatus={formStatus} />
            </FormGroup>
            {/* <div className="password-retrieval-input-desc2 w-100">
              Students, an email will be sent to your Supervisor requesting them to reset your password.
            </div> */}
          </Form>
        </div>
        <div className="password-retrieval-footer">
          <NavLink to="/login">Go back to Login</NavLink>
        </div>
      </div>
    </div>
  );
}
export default RequestResetPasswordPage;
