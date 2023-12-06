/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import './LoginPage.scss';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Controller } from 'react-hook-form';
import classnames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FormGroup, Input, Label } from 'reactstrap';
import { useAppDispatch } from '../../../store/hooks/storeHooks';
import { resetSelection } from '../../../features/SubsiteHexagons/store/subsiteHexagonSlice';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import InputWrapper from '../../../components/Form/InputWrapper';
import PasswordWrapper from '../../../components/Form/PasswordWrapper';
import FormErrorAlert from '../../../components/Alerts/FormErrorAlert';
import { useLoginMutation } from '../../../store/services/authApi';
import { useLazyGetUserContextQuery } from '../../../store/services/userContextApi';
import useRouterDom from '../../../hooks/userRouterDom';
import { AlpLogoSpinningTransparentGif, AlpLogoSpinningThinkingGif2 } from '../../../helpers/imagePreloader';
import { subsiteUrls } from '../../../helpers/constants';
import config from '../../../config';
// import Background from '../../../features/SubsiteHexagons/Background/Background';

const schema = Yup.object({
  userEmailorUsername: Yup.string().required('Email or Username is required'),
  password: Yup.string().required('Password is required'),
});

function LoginPage() {
  const { searchParams } = useRouterDom();
  const { subsite } = useParams();
  const [getUserContext] = useLazyGetUserContextQuery();
  const dispatch = useAppDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [login, formStatus] = useLoginMutation();
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [agreementInput, setAgreementInput] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const location = useLocation();

  const { control, handleSubmit, formState, getValues } = useForm({
    defaultValues: {
      userEmailorUsername: searchParams.get('existingemail') ?? '',
      password: '',
    },
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  const handleAgreementBox = () => {
    setAgreementInput(!agreementInput);
  };

  const shouldDisableSubmitButton = () =>
    getValues()?.userEmailorUsername && getValues()?.password ? setIsDisabledButton(false) : setIsDisabledButton(true);

  useEffect(() => {
    //this ensures that the selection state is always at reset
    //changing of selection mode is triggered inside child pages
    dispatch(resetSelection());
  }, []);

  useEffect(() => {
    if (formStatus.isSuccess) {
      //set Auth Token to auto login after registration
      getUserContext('');
      if (subsite) {
        window.open(`${subsiteUrls.get(subsite).url}/dashboard/tr`, '_self');
      } else {
        // navigate(`/login/selectlicense/${subsite ? subsite : ''}`);
        window.location.href = `${config.subsiteUrls.tr}/dashboard/tr`;
      }
    }
  }, [formStatus]);

  useEffect(() => {
    shouldDisableSubmitButton();
  }, [agreementInput]);

  useEffect(() => {
    if (location.pathname?.includes('/login') && location.search?.includes('?useraccountlicence') && formStatus.isSuccess) {
      getUserContext('');
      window.open(subsiteUrls.get(subsite).url, '_self');
    }
  }, [formStatus]);

  const saveForm = async (data: any) => {
    const url = new URLSearchParams(location.search);
    const useraccountlicence = url.get('useraccountlicence');

    const newData = {
      ...data,
      userEmailorUsername: data?.userEmailorUsername.toLowerCase(),
      accountLicence: useraccountlicence,
    };
    if (!agreementInput) setAgreementError(true);
    if (getValues().userEmailorUsername && getValues().password && agreementInput) await login(newData);
  };

  return (
    <div className="login-page-wrapper">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningTransparentGif} alt="A Learning Place Logo" />
      </div>
      <div className="login-page-content">
        <div className="login-header w-100">
          <h4>Login to your Account</h4>
        </div>
        <div className="login-desc text-center">
          <p>
            <span>
              {' '}
              All Subscriptions and Licences are under
              <br />
              your free
            </span>
            <span className="logo-desc-name"> A Learning Place A Teaching Place</span> <span>account.</span>
          </p>
        </div>
        <div className="login-body">
          <FormErrorAlert formStatus={formStatus} />
          <form className="alp-form" onSubmit={handleSubmit(saveForm)} autoComplete="off">
            <FormGroup className="username-wrapper">
              <InputWrapper
                label="Email or Username"
                labelFor="userEmailorUsername"
                errorText={formState?.errors?.userEmailorUsername?.message}
              >
                <Controller
                  name="userEmailorUsername"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Enter your Email or Username"
                      type="text"
                      id="userEmailorUsername"
                      autoComplete="off"
                      className={classnames({
                        'input-error': formState?.errors?.userEmailorUsername?.message,
                        'background-green': getValues()?.userEmailorUsername,
                      })}
                      {...field}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <div className="hidden-input" />
            <FormGroup className="password-wrapper">
              <InputWrapper label="Password" labelFor="password" errorText={formState?.errors?.password?.message}>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <PasswordWrapper showPassword={showPassword} setShowPassword={(show: boolean) => setShowPassword(show)}>
                      <Input
                        placeholder="Enter your Password"
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        className={classnames({
                          'input-error': formState?.errors?.password?.message,
                          'background-green': getValues()?.password,
                        })}
                        {...field}
                        onChange={(e: any) => {
                          field.onChange(e);
                          shouldDisableSubmitButton();
                        }}
                        autoComplete="new-password"
                      />
                    </PasswordWrapper>
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <div className="hidden-input2" />
            <FormGroup className="forgot-credential-row">
              <NavLink to="/login/forgotpassword">Forgot Primary Email, Username or Password?</NavLink>
            </FormGroup>
            <div className="grid-agreement">
              <img src={AlpLogoSpinningThinkingGif2} alt="ALP Logo Spinning Thinking" />
              <FormGroup>
                <div className="flex flex-row agreement-row">
                  <Input
                    type="checkbox"
                    onChange={() => {
                      handleAgreementBox();
                    }}
                    className={agreementError && !agreementInput ? 'agreement-error' : ''}
                  />{' '}
                  <Label check>
                    <div>
                      I agree to use these resources in accordance with the{' '}
                      <NavLink to="/agreement/termsandconditions">Terms and Conditions</NavLink> and confirm that I am not sharing
                      these Resources with anyone without a current Licence to them, and will not use the Resources outside of my
                      Licence.
                    </div>
                  </Label>
                </div>
              </FormGroup>
            </div>
            <FormGroup className={isDisabledButton ? 'external-disable' : 'solid-color'}>
              {agreementError && !agreementInput ? (
                <span className="input-error-text">Please read and accept the terms and conditions to continue</span>
              ) : (
                ''
              )}
              <SubmitButton btnText="Login" formStatus={formStatus} disabled={isDisabledButton} />
            </FormGroup>
          </form>
        </div>
        <div className="login-footer">
          <span>Don&#39;t have an Account?</span> <NavLink to="/createaccount">Create a free Account!</NavLink>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
