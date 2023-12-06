import { useState } from 'react';
import './SchoolAccountPage.scss';
import { NavLink, useParams } from 'react-router-dom';
import { Controller } from 'react-hook-form';
import classnames from 'classnames';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { AlpLogoSpinningGif, AlpLogoSpinningThinkingGif2 } from '../../../helpers/imagePreloader';
import InputWrapper from '../../../components/Form/InputWrapper';
import { countries } from '../../../helpers/constants';
import useSchoolAccountForm from './hooks/useSchoolAccountForm';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import PasswordWrapper from '../../../components/Form/PasswordWrapper';
import WarningAlert from '../../../components/Alerts/WarningAlert';

function SchoolAccountPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const navigate = useNavigate();
  const { email } = useParams();
  const {
    formState,
    control,
    formStatus,
    serverError,
    agreementInput,
    agreementError,
    isDisabledButton,
    getValues,
    setServerError,
    handleSubmit,
    saveForm,
    shouldDisableSubmitButton,
    handleAgreementBox,
  } = useSchoolAccountForm(email);

  return (
    <div className="schoolaccount-page-wrapper flex relative">
      <div className="logo-no-text">
        <img src={AlpLogoSpinningGif} alt="A Learning Place Logo" />
      </div>
      <div className="schoolaccount-header">
        <h3>Create a School Account</h3>
        <div className="mb-2">
          <p className="schoolaccount-header-text">
            Already have a School Account? <NavLink to="/login">Login</NavLink>
          </p>
          <p className="schoolaccount-header-text">
            Want to create a Personal Account? <NavLink to="/createaccount/personal/0">Create a Personal Account</NavLink>
          </p>
        </div>
        {/* <div className="banner-wrapper">
          <div className="schoolaccount-buttons-wrapper">
            <Button onClick={() => navigate('/createaccount/personal/0')}>Personal</Button>
            <p className="upper-p">
              I want to Create a<br /> Personal Account
            </p>
            <Button onClick={() => navigate('/login')}>Login</Button>
            <p>Already have a School Account?</p>
          </div>
          <img src={SchoolAccountBanner} alt="School Account Banner" />
        </div> */}
      </div>
      <div className="h6-wrapper">
        <h6>Please enter your School information</h6>
        <p className="opacity-07 font-10">
          <span className="red">*</span>Fields with asterisk are required.
        </p>
      </div>

      <div className="school-form">
        {formStatus.isError &&
          !serverError?.toLocaleLowerCase().includes('username') &&
          !serverError?.toLocaleLowerCase().includes('email') && (
            <ErrorAlert message={serverError} onClose={() => setServerError('')} />
          )}
        <Form className="alp-form" onSubmit={handleSubmit(saveForm)} autoComplete="off">
          <FormGroup>
            <InputWrapper
              label=" School Name"
              labelFor="institution_name"
              isRequired={true}
              errorText={formState?.errors?.institution_name?.message}
            >
              <Controller
                name="institution_name"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="School Name"
                    innerRef={ref}
                    type="text"
                    id="institution_name"
                    className={classnames({
                      'input-error': formState?.errors?.institution_name?.message,
                      'background-green': getValues().institution_name,
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
          <FormGroup className="email-wrapper">
            <InputWrapper
              label=" School Primary Email Address"
              labelFor="primary_email"
              isRequired={true}
              infoText="For Account Login"
              errorText={formState?.errors?.primary_email?.message}
            >
              <Controller
                name="primary_email"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="School Primary Email Address"
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
                    className={classnames({
                      'input-error': formState?.errors?.primary_email?.message,
                      'input-warning':
                        serverError?.toLocaleLowerCase().includes('email') ||
                        serverError?.toLocaleLowerCase().includes('username'),
                      'background-green': getValues().primary_email,
                    })}
                  />
                )}
              />
            </InputWrapper>
            {(serverError?.toLocaleLowerCase().includes('email') || serverError?.toLocaleLowerCase().includes('username')) && (
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
          {/* <div className="hidden-input" /> */}
          <FormGroup className="password-wrapper">
            <InputWrapper
              label=" Password"
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
                        'background-green': getValues().password,
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
          {/* <div className="hidden-input2" /> */}
          <FormGroup>
            <InputWrapper
              label=" Confirm Password"
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
                      placeholder="Password"
                      innerRef={ref}
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirm_password"
                      className={classnames({
                        'input-error': formState?.errors?.confirm_password?.message,
                        'background-green': getValues().confirm_password,
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
              label=" School Address Line 1"
              labelFor="address_line1"
              isRequired={true}
              errorText={formState?.errors?.address_line1?.message}
            >
              <Controller
                name="address_line1"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="School Address Line 1"
                    innerRef={ref}
                    type="text"
                    id="address_line1"
                    className={classnames({
                      'input-error': formState?.errors?.address_line1?.message,
                      'background-green': getValues().address_line1,
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
              label=" School Address Line 2"
              labelFor="address_line2"
              isRequired={true}
              errorText={formState?.errors?.address_line2?.message}
            >
              <Controller
                name="address_line2"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="School Address Line 2"
                    innerRef={ref}
                    type="text"
                    id="address_line2"
                    className={classnames({
                      'input-error': formState?.errors?.address_line2?.message,
                      'background-green': getValues().address_line2,
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
            <InputWrapper label=" City" labelFor="city" isRequired={true} errorText={formState?.errors?.city?.message}>
              <Controller
                name="city"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="City"
                    innerRef={ref}
                    type="text"
                    id="city"
                    className={classnames({
                      'input-error': formState?.errors?.city?.message,
                      'background-green': getValues().city,
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
            <InputWrapper label=" State" labelFor="state" isRequired={true} errorText={formState?.errors?.state?.message}>
              <Controller
                name="state"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <>
                    <Input
                      {...field}
                      innerRef={ref}
                      type="select"
                      id="state"
                      className={classnames({
                        'input-error': formState?.errors?.state?.message,
                        'background-green': getValues().state,
                        'no-state': !getValues().state,
                      })}
                      onChange={(e: any) => {
                        field.onChange(e);
                        shouldDisableSubmitButton();
                      }}
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
              label=" Postcode"
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
                      'background-green': getValues().postcode,
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
              label=" School Phone Number"
              labelFor="phone_number"
              isRequired={true}
              errorText={formState?.errors?.phone_number?.message}
            >
              <Controller
                name="phone_number"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="School Phone Number"
                    innerRef={ref}
                    type="number"
                    id="phone_number"
                    className={classnames({
                      'input-error': formState?.errors?.phone_number?.message,
                      'background-green': getValues().phone_number,
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

          <div className="green-border" />

          <div className="contact-info">
            <h6>Contact Person Information</h6>
            <p className="contact-person-desc">
              The contact person can be changed during the subscription period by selecting{' '}
              <span className="fweight-600" style={{ color: '#7f7f7f' }}>
                My Account
              </span>
              .
            </p>
          </div>
          <FormGroup>
            <InputWrapper
              label=" Contact Person Name"
              labelFor="contact_person_name"
              isRequired={true}
              errorText={formState?.errors?.contact_person_name?.message}
            >
              <Controller
                name="contact_person_name"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="Contact Person Name"
                    innerRef={ref}
                    type="text"
                    id="contact_person_name"
                    className={classnames({
                      'input-error': formState?.errors?.contact_person_name?.message,
                      'background-green': getValues().contact_person_name,
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
              label=" Contact Person Email Address"
              labelFor="contact_person_email"
              isRequired={true}
              infoText="For Account Retrieval"
              errorText={formState?.errors?.contact_person_email?.message}
            >
              <Controller
                name="contact_person_email"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="Contact Person Email Address"
                    innerRef={ref}
                    type="text"
                    id="contact_person_email"
                    className={classnames({
                      'input-error': formState?.errors?.contact_person_email?.message,
                      'background-green': getValues().contact_person_email,
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
              label=" Contact Person Mobile Number"
              labelFor="contact_person_mobileno"
              isRequired={true}
              infoText="For Account Retrieval"
              errorText={formState?.errors?.contact_person_mobileno?.message}
            >
              <Controller
                name="contact_person_mobileno"
                control={control}
                render={({ field: { ref, ...field } }) => (
                  <Input
                    {...field}
                    placeholder="Contact Person Mobile Phone Number"
                    innerRef={ref}
                    type="number"
                    id="contact_person_mobileno"
                    className={classnames({
                      'input-error': formState?.errors?.contact_person_mobileno?.message,
                      'background-green': getValues().contact_person_mobileno,
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

          <div className="green-border" />

          <div className="grid-agreement">
            <img src={AlpLogoSpinningThinkingGif2} alt="ALP Logo Spinning Thinking" />
            <FormGroup>
              <div className="w-100 flex flex-row agreement-row">
                <Input
                  type="checkbox"
                  onChange={() => {
                    handleAgreementBox();
                  }}
                  checked={agreementInput ? true : false}
                  className={!agreementError ? '' : 'agreement-error'}
                />{' '}
                <Label check>
                  <p>
                    I agree to use these resources in accordance with the{' '}
                    <span>
                      <NavLink to="/agreement/termsandconditions">Terms and Conditions</NavLink>
                    </span>{' '}
                    and confirm that I am not sharing these Resources with anyone without a current Licence to them, and will not
                    use the Resources outside of my Licence.
                  </p>
                </Label>
              </div>
            </FormGroup>
          </div>

          <FormGroup className={`submit-btn-row ${isDisabledButton ? 'external-disable' : 'solid-color'}`}>
            {agreementError && !agreementInput ? (
              <span className="input-error-text">Please read and accept the terms and conditions to continue</span>
            ) : (
              ''
            )}
            <SubmitButton
              btnText={email === '0' ? 'Continue' : 'Save your School Account'}
              formStatus={formStatus}
              disabled={isDisabledButton}
            />
            <div className="create-desc">
              <p>
                A confirmation email will be sent to both email addresses entered above with a one-time-password.
                <br />
                If you do not receive the email, please check your spam/junk folder.
              </p>
              <p>
                Please contact us at <span className="green">subscriptions@alearningplace.com.au</span> if you have any questions.
                We love to hear from you!
              </p>
            </div>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}

export default SchoolAccountPage;
