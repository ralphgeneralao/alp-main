import { useState } from 'react';
import './PersonalAccountPage.scss';
import { NavLink, useParams } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import classnames from 'classnames';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { AlpLogoSpinningGif, AlpLogoSpinningThinkingGif2 } from '../../.../../../helpers/imagePreloader';
import usePersonalAccountForm from './hooks/usePersonalAccountForm';
import InputWrapper from '../../../components/Form/InputWrapper';
import PasswordWrapper from '../../../components/Form/PasswordWrapper';
import { countries } from '../../../helpers/constants';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import WarningAlert from '../../../components/Alerts/WarningAlert';

function PersonalAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { email } = useParams();
  const {
    formState,
    control,
    formStatus,
    serverError,
    agreementInput,
    agreementError,
    isEmailDisabled,
    isDisabledButton,
    assigneeEmail,
    setServerError,
    handleSubmit,
    saveForm,
    getValues,
    shouldDisableSubmitButton,
    handleAgreementBox,
  } = usePersonalAccountForm(email);

  return (
    <div className="personalaccount-page-wrapper flex relative">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningGif} alt="A Learning Place Logo" />
      </div>

      <div className="personalaccount-page-content">
        <div className="personalaccount-header">
          <div className="h3-wrapper">
            <h3>Create a Personal Account</h3>
            <div className="selection-desc">
              Already have a Personal Account?{' '}
              <span>
                <NavLink to="/login">Login</NavLink>
              </span>
              <br />
              Want to create a School Account?{' '}
              <span>
                <NavLink to="/createaccount/school/0"> Create a School Account</NavLink>
              </span>
            </div>
          </div>
        </div>
        {/* <div className="personalaccount-buttons-wrapper">
              <Button onClick={() => navigate('/login')}>Login</Button>
              <p>Already have a Personal Account?</p>
              <Button onClick={() => navigate('/createaccount/school/0')}>Create a School Account</Button>
              <p className="upper-p">
                School subscriptions need to <br />
                be under a School Account
              </p>
          <img src={PersonalAccountBanner} alt="Personal Account Banner" /> */}

        <div className="personalaccount-form">
          <div className="h6-wrapper">
            <h6>Please enter your Personal information</h6>
            <p className="opacity-07 font-10">
              <span className="red">*</span>Fields with asterisk are required.
            </p>
          </div>
          <Form className="alp-form" onSubmit={handleSubmit(saveForm)} autoComplete="off">
            {formStatus.isError && !serverError?.toLocaleLowerCase().includes('email') && (
              <ErrorAlert message={serverError} onClose={() => setServerError('')} />
            )}

            <FormGroup>
              <InputWrapper
                label="First Name"
                labelFor="first_name"
                isRequired={true}
                errorText={formState?.errors?.first_name?.message}
              >
                <Controller
                  name="first_name"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="First Name"
                      innerRef={ref}
                      type="text"
                      id="first_name"
                      className={classnames({
                        'input-error': formState?.errors?.first_name?.message,
                        'background-green': getValues()?.first_name,
                      })}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Last Name"
                labelFor="last_name"
                isRequired={true}
                errorText={formState?.errors?.last_name?.message}
              >
                <Controller
                  name="last_name"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Last Name"
                      innerRef={ref}
                      type="text"
                      id="last_name"
                      className={classnames({
                        'input-error': formState?.errors?.last_name?.message,
                        'background-green': getValues()?.last_name,
                      })}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            {/* <FormGroup>
              <InputWrapper
                label="Select your Gender"
                labelFor="gender"
                isRequired={true}
                errorText={formState?.errors?.gender?.message}
              >
                <Controller
                  name="gender"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <div className="w-100 flex flex-row gender-row">
                      <Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setValue('gender', 'male', { shouldValidate: true });
                          shouldDisableSubmitButton();
                        }}
                        innerRef={ref}
                        type="radio"
                        id="gender1"
                        value="male"
                        checked={field.value === 'male'}
                        className={classnames({
                          'input-error': formState?.errors?.gender?.message,
                        })}
                        disabled={serverError?.toLocaleLowerCase().includes('email')}
                      />{' '}
                      Male
                      <Input
                        {...field}
                        onChange={(e) => {
                          field.onChange(e);
                          setValue('gender', 'female', { shouldValidate: true });
                          shouldDisableSubmitButton();
                        }}
                        innerRef={ref}
                        type="radio"
                        id="gender2"
                        value="female"
                        checked={field.value === 'female'}
                        className={classnames({
                          'input-error': formState?.errors?.gender?.message,
                        })}
                        disabled={serverError?.toLocaleLowerCase().includes('email')}
                      />{' '}
                      Female
                    </div>
                  )}
                />
              </InputWrapper>
            </FormGroup>

            <div className="row-divider" /> */}

            <FormGroup>
              <InputWrapper
                label="Username"
                labelFor="username"
                isRequired={true}
                errorText={formState?.errors?.username?.message}
              >
                <Controller
                  name="username"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Username"
                      onChange={(e: any) => {
                        field.onChange(e);
                        //Resets server error if there's any
                        if (serverError?.toLocaleLowerCase().includes('username')) setServerError('');
                        shouldDisableSubmitButton();
                      }}
                      innerRef={ref}
                      type="text"
                      id="username"
                      className={classnames({
                        'input-error':
                          formState?.errors?.username?.message || serverError?.toLocaleLowerCase().includes('username'),
                        'background-green': getValues()?.username,
                      })}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Password"
                labelFor="password"
                isRequired={true}
                errorText={formState?.errors?.password?.message}
              >
                <Controller
                  name="password"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <PasswordWrapper
                      showPassword={showPassword}
                      setShowPassword={(show: boolean) => (email !== '0' ? '' : setShowPassword(show))}
                    >
                      <Input
                        {...field}
                        placeholder="Password"
                        innerRef={ref}
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        autoComplete="new-password"
                        className={classnames({
                          'input-error': formState?.errors?.password?.message,
                          'background-green': getValues()?.password,
                        })}
                        onChange={(e: any) => {
                          field.onChange(e);
                          shouldDisableSubmitButton();
                        }}
                        disabled={serverError?.toLocaleLowerCase().includes('email') || email !== '0'}
                      />
                    </PasswordWrapper>
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Confirm Password"
                labelFor="confirm_password"
                isRequired={true}
                errorText={formState?.errors?.confirm_password?.message}
              >
                <Controller
                  name="confirm_password"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <PasswordWrapper
                      showPassword={showConfirmPassword}
                      setShowPassword={(show: boolean) => (email !== '0' ? '' : setShowConfirmPassword(show))}
                    >
                      <Input
                        {...field}
                        placeholder="Confirm Password"
                        innerRef={ref}
                        type={showConfirmPassword ? 'text' : 'password'}
                        id="confirm_password"
                        className={classnames({
                          'input-error': formState?.errors?.confirm_password?.message,
                          'background-green': getValues()?.confirm_password,
                        })}
                        onChange={(e: any) => {
                          field.onChange(e);
                          shouldDisableSubmitButton();
                        }}
                        disabled={serverError?.toLocaleLowerCase().includes('email')}
                      />
                    </PasswordWrapper>
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Primary Email"
                labelFor="primary_email"
                isRequired={true}
                errorText={formState?.errors?.primary_email?.message}
              >
                <Controller
                  name="primary_email"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Primary Email"
                      onChange={(e: any) => {
                        field.onChange(e);
                        //Resets server error if there's any
                        if (serverError?.toLocaleLowerCase().includes('email')) setServerError('');
                        shouldDisableSubmitButton();
                      }}
                      autoFocus={email === '0' ? false : true}
                      innerRef={ref}
                      type="text"
                      id="primary_email"
                      disabled={isEmailDisabled || assigneeEmail ? true : false}
                      className={classnames({
                        'input-error': formState?.errors?.primary_email?.message,
                        'background-green': getValues()?.primary_email,
                        'input-warning': serverError?.toLocaleLowerCase().includes('email'),
                      })}
                      value={assigneeEmail ? assigneeEmail : getValues()?.primary_email}
                    />
                  )}
                />
              </InputWrapper>
              {serverError?.toLocaleLowerCase().includes('email') && (
                <WarningAlert
                  message={
                    <p className="warning-prompt">
                      <span className="warning-prompt-header">{getValues()?.primary_email} already has an account</span>
                      <br />
                      Do you want to Login Instead? Proceed to{' '}
                      <NavLink to={`/login?existingemail=${getValues()?.primary_email ?? ''}`}>Login</NavLink>
                      <br />
                      <br />
                      Do you want to setup a new account?
                      <br />
                      Please enter a different email address
                    </p>
                  }
                  onClose={() => setServerError('')}
                />
              )}
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Secondary Email"
                labelFor="secondary_email"
                isRequired={true}
                infoText="For Account Retrieval"
                errorText={formState?.errors?.secondary_email?.message}
              >
                <Controller
                  name="secondary_email"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Secondary Email"
                      innerRef={ref}
                      type="text"
                      id="secondary_email"
                      className={classnames({
                        'input-error': formState?.errors?.secondary_email?.message,
                        'background-green': getValues()?.secondary_email,
                      })}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Mobile Number"
                labelFor="mobile_number"
                isRequired={true}
                infoText="For Account Retrieval"
                errorText={formState?.errors?.mobile_number?.message}
              >
                <Controller
                  name="mobile_number"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Mobile Number"
                      innerRef={ref}
                      type="number"
                      id="mobile_number"
                      className={classnames({
                        'input-error': formState?.errors?.mobile_number?.message,
                        'background-green': getValues()?.mobile_number,
                      })}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Affiliation (School/Institution)"
                labelFor="affiliation"
                isRequired={true}
                errorText={formState?.errors?.affiliation?.message}
              >
                <Controller
                  name="affiliation"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Affiliation (School/Institution)"
                      innerRef={ref}
                      type="text"
                      id="affiliation"
                      className={classnames({
                        'input-error': formState?.errors?.affiliation?.message,
                        'background-green': getValues()?.affiliation,
                      })}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper label="State" labelFor="state" errorText={formState?.errors?.state?.message} isRequired={true}>
                <Controller
                  name="state"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <>
                      <Input
                        {...field}
                        onChange={(e: any) => {
                          field.onChange(e);
                          shouldDisableSubmitButton();
                        }}
                        innerRef={ref}
                        type="select"
                        id="state"
                        className={classnames({
                          'input-error': formState?.errors?.state?.message,
                          'background-green': getValues()?.state,
                          'option-first-color': !getValues()?.state,
                        })}
                        disabled={serverError?.toLocaleLowerCase().includes('email')}
                      >
                        <option hidden value="">
                          State
                        </option>
                        <>
                          {countries.map((item: any, i: number) => (
                            <option key={i} value={item.value} className="text-capitalize">
                              {item.displayName}
                            </option>
                          ))}
                        </>
                      </Input>
                    </>
                  )}
                />
              </InputWrapper>
            </FormGroup>
            <FormGroup>
              <InputWrapper
                label="Postcode"
                labelFor="postcode"
                errorText={formState?.errors?.postcode?.message}
                isRequired={true}
              >
                <Controller
                  name="postcode"
                  control={control}
                  render={({ field: { ref, ...field } }) => (
                    <Input
                      {...field}
                      placeholder="Postcode"
                      innerRef={ref}
                      type="text"
                      id="postcode"
                      className={classnames({
                        'input-error': formState?.errors?.postcode?.message,
                        'background-green': getValues()?.postcode,
                      })}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
                      disabled={serverError?.toLocaleLowerCase().includes('email')}
                    />
                  )}
                />
              </InputWrapper>
            </FormGroup>

            {/* <FormGroup check>
              <div className="w-100 flex flex-row agreement-row">
                <Input
                  type="checkbox"
                  onChange={() => {
                    handleAgreementBox();
                  }}
                  checked={agreementInput ? true : false}
                  className={!agreementError ? '' : 'agreement-error'}
                />
                <Label check>
                  <div className="checkbox-padding">
                    <span>I agree to use these resources in accordance with the</span>{' '}
                    <span>
                      <NavLink to="/agreement/termsandconditions">Terms and Conditions</NavLink>
                    </span>{' '}
                    <span>
                      and confirm that I am not sharing these Resources with anyone without a current Licence to them, and will
                      not use the Resources outside of my Licence.
                    </span>
                  </div>
                </Label>
              </div>
            </FormGroup> */}

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
                    <div className="font-12">
                      <span className="font-12">I agree to use these resources in accordance with the</span>{' '}
                      <span className="font-12">
                        <NavLink to="/agreement/termsandconditions">Terms and Conditions</NavLink>
                      </span>{' '}
                      <span className="font-12">
                        and confirm that I am not sharing these Resources with anyone without a current Licence to them, and will
                        not use the Resources outside of my Licence.
                      </span>
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
              <SubmitButton
                btnText={email === '0' ? 'Continue' : 'Save your Personal Account'}
                formStatus={formStatus}
                disabled={isDisabledButton}
              />
              <p className="font-12 p-bottom">
                A confirmation email will be sent to both email addresses entered above with a one-time-password. <br />
                If you do not receive the email, please check your spam/junk folder.
                <br />
                <br />
                Please contact us at <span className="green">subscriptions@alearningplace.com.au</span> if you have any questions.
                We love to hear from you!
              </p>
              {/* <p>
                An email will be sent to the Primary Email to complete Account Creation. If you do not receive the email, please
                check your spam/junk folder. <br />
                <br />
                Please contact us at <span className="green">subscriptions@alearningplace.com.au</span> if you have any questions.
              </p> */}
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default PersonalAccountPage;
