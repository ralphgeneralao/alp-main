import { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EmailVerificationPage.scss';
import * as Yup from 'yup';
import { Controller } from 'react-hook-form';
import classnames from 'classnames';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Form, FormGroup, Input } from 'reactstrap';
import ResendOtpRow from './components/ResendOtpRow';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import { useVerifyEmailMutation, useResendOtpCodeMutation } from './store/emailVerificationApi';
import { useLazyGetUserContextQuery } from '../../../store/services/userContextApi';
import { AlpLogoSpinningGif } from '../../../helpers/imagePreloader';
import useRouterDom from '../../../hooks/userRouterDom';
import useLayout from '../../../features/Layout/hooks/useLayout';
import config from '../../../config';

const schema = Yup.object({
  input1: Yup.string().required(),
  input2: Yup.string().required(),
  input3: Yup.string().required(),
  input4: Yup.string().required(),
  input5: Yup.string().required(),
  input6: Yup.string().required(),
});

function EmailVerificationPage() {
  const [getUserContext] = useLazyGetUserContextQuery();
  //this is temporary, will replace during integration
  const [serverError, setServerError] = useState('');
  const [isDisableButton, setIsDisableButton] = useState(false);

  const navigate = useNavigate();
  const { isSubscribed } = useLayout();
  const { searchParams } = useRouterDom();
  const { accounttype, email, fromlogin } = useParams();
  const [verifyEmail, formStatus] = useVerifyEmailMutation();
  const [resendOtpCode, resendFormStatus] = useResendOtpCodeMutation();

  //refs
  const input2Ref = useRef<any>(null);
  const input3Ref = useRef<any>(null);
  const input4Ref = useRef<any>(null);
  const input5Ref = useRef<any>(null);
  const input6Ref = useRef<any>(null);

  const { control, formState, getValues, handleSubmit, reset } = useForm({
    defaultValues: {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    },
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  const shouldDisableSubmitButton = () =>
    getValues().input1 &&
      getValues().input2 &&
      getValues().input3 &&
      getValues().input4 &&
      getValues().input5 &&
      getValues().input6
      ? setIsDisableButton(false)
      : setIsDisableButton(true);

  useEffect(() => {
    shouldDisableSubmitButton();
  }, []);

  useEffect(() => {
    if (fromlogin === 'false') {
      getUserContext('');
    }
  }, [fromlogin]);

  useEffect(() => {
    if (formStatus.isError) {
      // @ts-ignore
      setServerError(formStatus?.error?.data?.response?.errors[0]?.message);
    } else if (resendFormStatus.isError) {
      // @ts-ignore
      setServerError(resendFormStatus?.error?.data?.response?.errors[0]?.message);
    } else if (formStatus.isSuccess) {
      //remove userdetails from localStorage after success
      // @ts-ignore
      localStorage.removeItem(email);
      getUserContext('')

      if (fromlogin === 'false') {
        if ((isSubscribed as any)?.length) {
          window.open(`${config.subsiteUrls.tr}/dashboard/tr`, '_self')
        } else {
          navigate(`/createaccount/success/${accounttype}`);
        }
      } else {
        //if from login, do refetch
        const gotoLicenseSelection = async () => {
          await getUserContext('');
          // navigate(`/login/selectlicense`);
          navigate(`/createaccount/success/${accounttype}`);
        };

        gotoLicenseSelection();
      }
    }
    //
  }, [formStatus]);

  useEffect(() => {
    if (resendFormStatus.isError) {
      // @ts-ignore
      setServerError(resendFormStatus?.error?.data?.response?.errors[0]?.message);
    } else {
      setServerError('');
    }
  }, [resendFormStatus]);

  const goBack = () => {
    navigate(`/createaccount/${accounttype}/${email}`);
  };

  const onResendHandler = async () => {
    setServerError('');
    reset();
    await resendOtpCode('');
  };

  const saveForm = async ({ input1, input2, input3, input4, input5, input6 }: any) => {
    const otpCode = `${input1}${input2}${input3}${input4}${input5}${input6}`;
    await verifyEmail(otpCode);
  };

  return (
    <div className="email-verification-wrapper flex relative">
      <div className="logo-no-text">
        <img src={AlpLogoSpinningGif} alt="A Learning Place Logo" />
      </div>
      <div className="email-verification-content">
        <h4>
          Please confirm your email to complete
          <br /> your {accounttype === 'personal' ? 'Personal' : 'School'} Account Creation
        </h4>
        <p className="aleft mb-2">
          We&#39;ve sent a One-time Password (OTP) to your emails:
          <br />
          <span className="green">{email}</span> {searchParams.get('secondaryemail') ? 'and' : ''}
          <br /> <span className="green">{searchParams.get('secondaryemail') ? searchParams.get('secondaryemail') : ''}</span>
          {/* <span className="green"> {secondaryemail ?? ''}</span> */}
        </p>
        <p className="aleft">The OTP could take up to 1 minute to receive and is valid for 30 minutes.</p>

        <div className="otp-form-wrapper">
          <Form className="alp-form" onSubmit={handleSubmit(saveForm)}>
            <FormGroup className="otp-input-row">
              <Controller
                name="input1"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="input1"
                    maxLength={1}
                    className={classnames({
                      'input-error': formState?.errors?.input1?.message || serverError,
                      'background-green': getValues().input1,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input2Ref.current.focus();
                      shouldDisableSubmitButton();
                    }}
                  />
                )}
              />
              <Controller
                name="input2"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="input2"
                    maxLength={1}
                    innerRef={input2Ref}
                    className={classnames({
                      'input-error': formState?.errors?.input2?.message || serverError,
                      'background-green': getValues().input2,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input3Ref.current.focus();
                      shouldDisableSubmitButton();
                    }}
                  />
                )}
              />
              <Controller
                name="input3"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="input3"
                    maxLength={1}
                    innerRef={input3Ref}
                    className={classnames({
                      'input-error': formState?.errors?.input3?.message || serverError,
                      'background-green': getValues().input3,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input4Ref.current.focus();
                      shouldDisableSubmitButton();
                    }}
                  />
                )}
              />
              <Controller
                name="input4"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="input4"
                    maxLength={1}
                    innerRef={input4Ref}
                    className={classnames({
                      'input-error': formState?.errors?.input4?.message || serverError,
                      'background-green': getValues().input4,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input5Ref.current.focus();
                      shouldDisableSubmitButton();
                    }}
                  />
                )}
              />
              <Controller
                name="input5"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="input5"
                    maxLength={1}
                    innerRef={input5Ref}
                    className={classnames({
                      'input-error': formState?.errors?.input5?.message || serverError,
                      'background-green': getValues().input5,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input6Ref.current.focus();
                      shouldDisableSubmitButton();
                    }}
                  />
                )}
              />
              <Controller
                name="input6"
                control={control}
                render={({ field }) => (
                  <Input
                    type="text"
                    id="input6"
                    maxLength={1}
                    innerRef={input6Ref}
                    className={classnames({
                      'input-error': formState?.errors?.input6?.message || serverError,
                      'background-green': getValues().input6,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      shouldDisableSubmitButton();
                    }}
                  />
                )}
              />
            </FormGroup>
            <div className="otp-verification-error">{serverError}</div>

            <FormGroup className="flex flex-row resend-otp-row">
              <ResendOtpRow errorMessage={serverError} onResendOtp={onResendHandler} />
            </FormGroup>

            <FormGroup className={`submit-btn-row ${isDisableButton ? 'external-disable' : 'solid-color'}`}>
              <SubmitButton btnText="Continue" formStatus={formStatus} disabled={isDisableButton} />
            </FormGroup>
          </Form>
        </div>
        <div className="green-border" />
        <div className="emailverification-footer">
          <p>Is {accounttype === 'personal' ? 'the Primary Email' : 'the School or Contact Person Email'} incorrect?</p>
          <div className="goback-link" onClick={goBack}>
            Go Back to {accounttype === 'personal' ? 'Personal' : 'School'} Account Creation
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailVerificationPage;
