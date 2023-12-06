import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Input } from 'reactstrap';
import { Controller, useForm } from 'react-hook-form';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import { AlpLogoSpinningSmileGif } from '../../../helpers/imagePreloader';
import './MobileVerificationPage.scss';
import { useResendOtpCodeSmsMutation, useVerifyMobileMutation } from '../store/mobileVerificationApi';
import ResendOtpRow from '../../CreateAccount/EmailVerification/components/ResendOtpRow';
import { getFormattedPhoneNum } from '../utils/utils';

function MobileVerificationPage() {
  const navigate = useNavigate();
  const { email } = useParams();
  const [serverError, setServerError] = useState('');
  const [verifyMobile, formStatus] = useVerifyMobileMutation();
  const [resendOtpCodeSms] = useResendOtpCodeSmsMutation();

  // refs
  const input2Ref = useRef<any>(null);
  const input3Ref = useRef<any>(null);
  const input4Ref = useRef<any>(null);
  const input5Ref = useRef<any>(null);
  const input6Ref = useRef<any>(null);

  const { control, handleSubmit, formState, reset } = useForm({
    defaultValues: {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      input6: '',
    },
  });

  useEffect(() => {
    if (formStatus.isError) {
      //@ts-ignore
      setServerError(formStatus?.error?.data?.response?.errors[0]?.message);
    } else if (formStatus.isSuccess) {
      navigate(`/accountretrieval/resetpassword/${email}`);
    }
  }, [formStatus]);

  const onResendHandler = async () => {
    setServerError('');
    reset();
    await resendOtpCodeSms(email);
  };

  const saveForm = async ({ input1, input2, input3, input4, input5, input6 }: any) => {
    const otpCode = `${input1}${input2}${input3}${input4}${input5}${input6}`;
    await verifyMobile(otpCode);
  };

  return (
    <div className="mobile-verification-page-wrapper flex relative">
      <div className="logo-no-text">
        <img src={AlpLogoSpinningSmileGif} alt="Confirmation" />
      </div>
      <div className="mobile-verification-page-content">
        <div className="mobile-verification-header">
          <h3>Mobile Number Verification</h3>
          <p className="text-center">
            We&#39;ve sent a One-time password (OTP) to your <br />
            mobile number: {`+63 ${getFormattedPhoneNum(email)}`}
          </p>
        </div>
        <p className="mobile-verification-text text-center">Is the Mobile No. Incorrect?</p>
        <div className="mobile-verification-footer">
          <NavLink to="/accountretrieval/requestresetpassword">Go Back To Forgot Password</NavLink>
        </div>

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
                    className={classNames({
                      'input-error': formState?.errors?.input1?.message,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input2Ref?.current?.focus();
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
                    className={classNames({
                      'input-error': formState?.errors?.input2?.message,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input3Ref?.current?.focus();
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
                    className={classNames({
                      'input-error': formState?.errors?.input3?.message,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input4Ref?.current?.focus();
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
                    className={classNames({
                      'input-error': formState?.errors?.input4?.message,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input5Ref?.current?.focus();
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
                    className={classNames({
                      'input-error': formState?.errors?.input5?.message,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                      if (e.nativeEvent.data) input6Ref?.current?.focus();
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
                    className={classNames({
                      'input-error': formState?.errors?.input6?.message,
                    })}
                    autoComplete="nope"
                    {...field}
                    onChange={(e: any) => {
                      field.onChange(e);
                    }}
                  />
                )}
              />
            </FormGroup>

            <FormGroup className="flex flex-row resend-otp-row">
              <ResendOtpRow errorMessage={serverError} onResendOtp={onResendHandler} />
            </FormGroup>

            <FormGroup className="submit-btn-row">
              <SubmitButton btnText="Submit" formStatus={formStatus} />
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default MobileVerificationPage;
