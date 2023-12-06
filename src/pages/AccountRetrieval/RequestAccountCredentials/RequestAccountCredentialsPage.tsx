import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { Form, FormGroup, Input } from 'reactstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import classnames from 'classnames';
import './RequestAccountCredentialsPage.scss';
import InputWrapper from '../../../components/Form/InputWrapper';
import SubmitButton from '../../../components/Form/SubmitButton/SubmitButton';
import { useLazyRetrievePrimaryCredentialsQuery } from '../../../store/services/authApi';
import ErrorAlert from '../../../components/Alerts/ErrorAlert';
import { AlpLogoSpinningTransparentGif, AlpLogoSpinningThinkingGif2 } from '../../../helpers/imagePreloader';

const schema = Yup.object({
  emailOrMobile: Yup.string().required('Secondary Email or Mobile No is required'),
});

function RequestAccountCredentialsPage() {
  const [retrievePrimaryCredentials, formStatus] = useLazyRetrievePrimaryCredentialsQuery();
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
    retrievePrimaryCredentials(emailOrMobile);
  };

  useEffect(() => {
    if (formStatus?.isError) {
      // @ts-ignore
      setServerError(formStatus?.error?.data?.response?.errors[0]?.message);
    } else if (formStatus?.isSuccess) {
      navigate(`/accountretrieval/confirmationdetails/${getValues()?.emailOrMobile ?? ''}`);
    }
  }, [formStatus]);

  return (
    <div className="email-retrieval-page-wrapper flex relative">
      {/* <Background /> */}
      <div className="logo-no-text">
        <img src={AlpLogoSpinningTransparentGif} alt="A Learning Place Logo" />
      </div>
      <div className="email-retrieval-page-content">
        <div className="email-retrieval-header text-center w-100">
          <h4>
            Retrieve Primary Email Address
            <br />
            or Username
          </h4>
        </div>
        <div className="email-retrieval-body">
          <Form className="alp-form" onSubmit={handleSubmit(saveForm)}>
            <div className="desc1">
              To retrieve your Primary Email or Username, please enter your Secondary Email or Mobile Number registered with your
              Account
            </div>
            {serverError && <ErrorAlert message={serverError} onClose={() => setServerError('')} />}
            <FormGroup>
              <InputWrapper labelFor="emailOrMobile" errorText={formState?.errors?.emailOrMobile?.message}>
                <Controller
                  name="emailOrMobile"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="Enter Secondary Email / Mobile No"
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
                <div className="card-desc3">
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
            <div className="desc2">
              Your Primary Email or Username will be sent to your Secondary Email Address or Mobile Number.
              <br />
              <br /> If you do not receive the email, please check your spam or junk folder.
            </div>
          </Form>
        </div>
        <div className="email-retrieval-footer">
          <NavLink to="/login">Go back to Login</NavLink>
        </div>
      </div>
    </div>
  );
}
export default RequestAccountCredentialsPage;
