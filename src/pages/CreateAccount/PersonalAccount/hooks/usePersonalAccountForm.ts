import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import useRouterDom from '../../../../hooks/userRouterDom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  phoneRegEx,
  usernameRegex,
  passwordRegex,
  validStringRegex,
  noWhiteSpaceRegex,
  numberOnlyRegex,
} from '../../../../helpers/constants';
import {
  useCreatePersonalAccountMutation,
  useUpdateUserAccountMutation,
  useCreateInvitedPersonalAccountMutation,
} from '../store/personalAccountApi';
import cookie from '../../../../helpers/cookieHelper';

import { extractErrorMessage } from '../../../../helpers/utilityFuncions';
import { userContextApi } from '../../../../store/services/userContextApi';
import { useLocation } from 'react-router-dom';

const schema = Yup.object({
  first_name: Yup.string()
    .required('First Name is required')
    .min(2, 'Invalid First Name')
    .matches(validStringRegex, 'Invalid First Name')
    .trim(),
  last_name: Yup.string()
    .required('Last Name is required')
    .min(2, 'Invalid Last Name')
    .matches(validStringRegex, 'Invalid Last Name')
    .trim(),
  // gender: Yup.string().required('Gender is required'),
  username: Yup.string().required('Username is required').matches(usernameRegex, 'Invalid Username').trim(),
  primary_email: Yup.string().email('Invalid Email Address').required('Primary Email is required').trim(),
  secondary_email: Yup.string()
    .email('Invalid Email Address')
    .required('Secondary Email is required')
    .notOneOf([Yup.ref('primary_email'), null], 'Secondary Email must not be the same with Primary Email')
    .trim(),
  is_institution: Yup.boolean(),
  mobile_number: Yup.string()
    .required('Mobile Number is required')
    .matches(phoneRegEx, 'Invalid Mobile Number')
    .min(10, 'Mobile Number should be 10 digits')
    .max(10, 'Mobile Number should be 10 digits')
    .trim(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      passwordRegex,
      'Password must be at least 8 characters, has upper and lowercase letters, has letters and numbers and at least one special character.'
    ),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
  affiliation: Yup.string().trim(),
  state: Yup.string().required('State is required'),
  postcode: Yup.string()
    .required('Postcode is required')
    .min(4, 'Postcode should 4 digits')
    .max(4, 'Postcode should 4 digits')
    .matches(noWhiteSpaceRegex, 'Invalid Postcode')
    .matches(numberOnlyRegex, 'Invalid Postcode')
    .trim(),
});

function usePersonalAccountForm(email?: string) {
  const location = useLocation();
  const { navigate, searchParams } = useRouterDom();
  const [serverError, setServerError] = useState('');
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [agreementInput, setAgreementInput] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [isEmailDisabled, setIsEmailDisabled] = useState(false);
  const [formStatus, setFormStatus] = useState<any>({ isLoading: false });
  const [createPersonalAccount, createFormStatus] = useCreatePersonalAccountMutation();
  const [createUserInvited, createInviteFormStatus] = useCreateInvitedPersonalAccountMutation();
  const [updateUserAccount, editFormStatus] = useUpdateUserAccountMutation();
  //@ts-ignore
  const { data: userData } = userContextApi.endpoints.getUserContext.useQueryState('', {
    selectFromResult: (result: any) => result,
  });

  const {
    control,
    handleSubmit,
    formState,
    formState: { errors },
    getValues,
    setFocus,
    setValue,
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      // gender: '',
      username: '',
      primary_email: '',
      secondary_email: '',
      is_institution: false,
      mobile_number: '',
      password: '',
      confirm_password: '',
      affiliation: '',
      state: '',
      postcode: '',
    },
    shouldUnregister: true,
    shouldFocusError: true,
    resolver: yupResolver(schema),
  });

  //these lines of code are added an added email for a licence has no prior UserAccount
  const parts = location?.search.split('?');

  let assigneeEmail = '';
  let userAccountLicenceId = '';

  for (const part of parts) {
    if (part.startsWith('email=')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      assigneeEmail = part.substring('email='.length);
      break;
    }
  }

  for (const part of parts) {
    if (part.startsWith('useraccountlicence=')) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      userAccountLicenceId = part.substring('useraccountlicence='.length);
      break;
    }
  }
  //end

  useEffect(() => {
    if (assigneeEmail?.length) setValue('primary_email', assigneeEmail);
  }, []);

  useEffect(() => {
    //verify if this is a license invite registration thru url search parameters
    if (searchParams.get('assigneeEmail') && searchParams.get('activationKey')) {
      setValue('primary_email', searchParams.get('assigneeEmail') ?? '');
      setIsEmailDisabled(true);
    }
  }, []);

  useEffect(() => {
    if (email !== '0') {
      if (cookie.isLoggedIn()) {
        //edit mode
        if (userData) {
          setValue('first_name', userData.user_profile.first_name);
          setValue('last_name', userData.user_profile.last_name);
          // setValue('gender', userData.user_profile.gender);
          setValue('username', userData.username);
          setValue('primary_email', userData.user_profile.primary_email);
          setValue('secondary_email', userData.user_profile.secondary_email);
          setValue('is_institution', userData.is_institution);
          setValue('mobile_number', userData.user_profile.mobile_number);
          setValue('password', 'dummy_Pass123');
          setValue('confirm_password', 'dummy_Pass123');
          setValue('affiliation', userData.user_profile.affiliation);
          setValue('state', userData.user_profile.state);
          setValue('postcode', userData.user_profile.postcode);
        }
      } else {
        //@ts-ignore
        localStorage.removeItem(email);
        navigate(`/createaccount/personal/0`);
      }
    }
  }, [userData]);

  const evaluateFormStatus = (status: any) => {
    setFormStatus(status);

    if (status.isError) {
      // @ts-ignore
      setServerError(extractErrorMessage(status));
      window.scroll(0, 300);
    } else if (status.isSuccess) {
      navigate(
        `/createaccount/personal/emailverification/${getValues()?.primary_email ?? '0'}/false/?secondaryemail=${getValues()
          ?.secondary_email}`
      );
    }
  };

  const handleAgreementBox = () => {
    setAgreementInput(!agreementInput);
  };

  const shouldDisableSubmitButton = () =>
    getValues()?.first_name &&
    getValues()?.last_name &&
    // getValues()?.gender &&
    getValues()?.username &&
    getValues()?.primary_email &&
    getValues()?.secondary_email &&
    getValues()?.mobile_number &&
    getValues()?.password &&
    getValues()?.confirm_password &&
    getValues()?.state &&
    getValues()?.postcode &&
    agreementInput
      ? setIsDisabledButton(false)
      : setIsDisabledButton(true);

  useEffect(() => {
    shouldDisableSubmitButton();
  }, [agreementInput]);

  useEffect(() => {
    evaluateFormStatus(createFormStatus);
  }, [createFormStatus]);

  useEffect(() => {
    evaluateFormStatus(editFormStatus);
  }, [editFormStatus]);

  useEffect(() => {
    evaluateFormStatus(createInviteFormStatus);
  }, [createInviteFormStatus]);

  useEffect(() => {
    if (email !== '0') window.scroll(0, 675);
  }, [email]);

  useEffect(() => {
    if (serverError?.toLocaleLowerCase()?.includes('email')) {
      window.scroll(0, 675);
    }
  }, [serverError]);

  useEffect(() => {
    const firstError = (Object.keys(errors) as Array<keyof typeof errors>).reduce<keyof typeof errors | null>((field, a) => {
      const fieldKey = field as keyof typeof errors;
      return !!errors[fieldKey] ? fieldKey : a;
    }, null);

    if (firstError) {
      //@ts-ignore
      setFocus(firstError);
    }
  }, [errors]);

  // prevent reload
  useEffect(() => {
    const unloadCallback = (event: any) => {
      if (
        getValues()?.first_name ||
        getValues()?.last_name ||
        // getValues()?.gender ||
        getValues()?.username ||
        getValues()?.primary_email ||
        getValues()?.secondary_email ||
        getValues()?.mobile_number ||
        getValues()?.password ||
        getValues()?.confirm_password ||
        getValues()?.affiliation ||
        getValues()?.state ||
        getValues()?.postcode
      ) {
        event.preventDefault();
        // eslint-disable-next-line no-param-reassign
        event.returnValue = '';
      }
      return '';
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  useEffect(() => {
    if (email !== '0') setAgreementInput(true);
  }, []);

  const saveForm = async (data: any) => {
    let finalData = data;

    const selectedData = {
      affiliation: finalData?.affiliation,
      first_name: finalData?.first_name,
      // gender: finalData?.gender,
      is_institution: finalData?.is_institution,
      last_name: finalData?.last_name,
      mobile_number: finalData?.mobile_number,
      postcode: finalData?.postcode,
      primary_email: finalData?.primary_email,
      secondary_email: finalData?.secondary_email,
      state: finalData?.state,
      username: finalData?.username,
    };

    if (!agreementInput) setAgreementError(true);

    if (email && email !== '0' && !isDisabledButton) {
      await updateUserAccount(selectedData);
    } else if (!isDisabledButton && userAccountLicenceId) {
      createUserInvited({
        user: finalData,
        activationKey: searchParams.get('activationKey') ?? '',
        userAccountLicence: userAccountLicenceId,
      });
    } else if (!isDisabledButton) {
      await createPersonalAccount({
        user: finalData,
        activationKey: searchParams.get('activationKey') ?? '',
      });
    }
  };

  return {
    //states
    formState,
    control,
    formStatus,
    serverError,
    isDisabledButton,
    agreementInput,
    agreementError,
    isEmailDisabled,
    assigneeEmail,

    //handlers
    setValue,
    getValues,
    setServerError,
    handleSubmit,
    saveForm,
    shouldDisableSubmitButton,
    handleAgreementBox,
  };
}

export default usePersonalAccountForm;
