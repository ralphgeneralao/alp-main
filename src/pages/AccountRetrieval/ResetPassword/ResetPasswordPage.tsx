import { useEffect, useState } from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import classNames from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import FormErrorAlert from '../../../components/Alerts/FormErrorAlert';
import InputWrapper from '../../../components/Form/InputWrapper';
import './ResetPasswordPage.scss';
import PasswordWrapper from '../../../components/Form/PasswordWrapper';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import { useResetPasswordMutation } from '../../../store/services/authApi';
import { passwordRegex } from '../../../helpers/constants';
import { AlpLogoSpinningTransparentGif } from '../../../helpers/imagePreloader';

const schema = Yup.object({
  newPassword: Yup.string()
    .required('Password is required.')
    .matches(
      passwordRegex,
      'Password must be at least 8 characters, has upper and lowercase letters, has letters and numbers and at least one special character.'
    ),
  confirmPassword: Yup.string()
    .required('Confirm Password is required.')
    .oneOf([Yup.ref('newPassword'), ''], 'Passwords must match'),
});

function ResetPasswordPage() {
  const navigate = useNavigate();
  const { token } = useParams();
  const [showNewPassword, setshowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [resetPassword, formStatus] = useResetPasswordMutation();

  const { formState, control, getValues, handleSubmit } = useForm({
    defaultValues: {
      newPassword: '',
      confirmPassword: '',
    },
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (formStatus.isSuccess) {
      navigate(`/accountretrieval/resetpassword`);
    }
  }, [formStatus]);

  const saveForm = async (data: any) => {
    await resetPassword({
      newPassword: data?.newPassword,
      token,
    });
  };

  return (
    <div className="reset-password-page-wrapper flex relative">
      <div className="logo-no-text">
        <img src={AlpLogoSpinningTransparentGif} alt="A Learning Place Logo" />
      </div>
      <div className="reset-password-page-content">
        <div className="reset-password-header w-100">
          <h4>Reset Password</h4>
        </div>
        <div className="reset-password-body">
          <Form className="alp-form" onSubmit={handleSubmit(saveForm)}>
            <FormErrorAlert formStatus={formStatus} />
            <FormGroup>
              <InputWrapper label="New Password" labelFor="newPassword" errorText={formState?.errors?.newPassword?.message}>
                <Controller
                  name="newPassword"
                  control={control}
                  render={({ field }) => (
                    <PasswordWrapper showPassword={showNewPassword} setShowPassword={(show: boolean) => setshowNewPassword(show)}>
                      <Input
                        placeholder="Enter your Password"
                        type={showNewPassword ? 'text' : 'password'}
                        id="newPassword"
                        className={classNames({
                          'input-error': formState?.errors?.newPassword?.message,
                          'background-green': getValues().newPassword,
                        })}
                        {...field}
                        autoComplete="new-password"
                      />
                    </PasswordWrapper>
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Confirm Password"
                labelFor="confirmPassword"
                errorText={formState?.errors?.confirmPassword?.message}
              >
                <Controller
                  name="confirmPassword"
                  control={control}
                  render={({ field }) => (
                    <PasswordWrapper
                      showPassword={showConfirmPassword}
                      setShowPassword={(show: boolean) => setShowConfirmPassword(show)}
                    >
                      <Input
                        placeholder="Confirm Password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirmPassword"
                        className={classNames({
                          'input-error': formState?.errors?.confirmPassword?.message,
                          'background-green': getValues().confirmPassword,
                        })}
                        {...field}
                        autoComplete="off"
                      />
                    </PasswordWrapper>
                  )}
                />
              </InputWrapper>
            </FormGroup>

            <FormGroup className="submit-btn-row solid-color">
              <SubmitButton btnText="Reset Password" formStatus={formStatus} />
            </FormGroup>
          </Form>
        </div>
        {/* <div className="login-footer">
          <span className="opacity-06">Go back to</span> <NavLink to="/login">Login</NavLink>
        </div> */}
      </div>
    </div>
  );
}

export default ResetPasswordPage;
