import { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { phoneRegEx, passwordRegex, validStringRegex, noWhiteSpaceRegex, numberOnlyRegex } from '../../../../helpers/constants';
import { useCreateSchoolAccountMutation, useUpdateSchoolAccountMutation } from '../store/schoolAccountApi';
import cookie from '../../../../helpers/cookieHelper';
import { extractErrorMessage } from '../../../../helpers/utilityFuncions';
import { userContextApi } from '../../../../store/services/userContextApi';

const schema = Yup.object({
  institution_name: Yup.string()
    .required('School Name is required')
    .min(2, 'Invalid School Name')
    .matches(validStringRegex, 'Invalid School Name')
    .trim(),
  primary_email: Yup.string().required('School Primary Email Address is required').email('Invalid Email Address').trim(),
  address_line1: Yup.string()
    .required('School Address Line 1 is required')
    .matches(validStringRegex, 'Invalid School Address Line 1')
    .trim(),
  address_line2: Yup.string()
    .required('School Address Line 2 is required')
    .matches(validStringRegex, 'Invalid School Address Line 2')
    .trim(),
  city: Yup.string().required('City is required').matches(validStringRegex, 'Invalid City').trim(),
  state: Yup.string().required('State is required').trim(),
  postcode: Yup.string()
    .required('Postcode is required')
    .min(4, 'Postcode should 4 digits')
    .max(4, 'Postcode should 4 digits')
    .matches(noWhiteSpaceRegex, 'Invalid Postcode')
    .matches(numberOnlyRegex, 'Invalid Postcode')
    .trim(),
  is_institution: Yup.boolean(),
  phone_number: Yup.string()
    .required('School Phone Number is required')
    .matches(phoneRegEx, 'Invalid Phone Number Number')
    .min(10, 'School Phone Number should be 10 digits')
    .max(10, 'School Phone Number should be 10 digits')
    .trim(),
  contact_person_name: Yup.string()
    .required('Contact Person Name is required')
    .matches(validStringRegex, 'Invalid Contact Person Name')
    .trim(),
  contact_person_email: Yup.string()
    .email('Invalid Email Address')
    .required('Contact Person Email is required')
    .notOneOf([Yup.ref('primary_email'), null], 'Contact Person Email must not be the same with Primary Email')
    .trim(),
  password: Yup.string()
    .required('Password is required')
    .matches(
      passwordRegex,
      'Password must be at least 8 characters, has upper and lowercase letters, has letters and numbers and at least one special character.'
    )
    .trim(),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required')
    .trim(),
  contact_person_mobileno: Yup.string()
    .required('Contact Person Mobile Number is required')
    .matches(phoneRegEx, 'Invalid Mobile Number')
    .min(10, 'Mobile Number should be 10 digits')
    .max(10, 'Mobile Number should be 10 digits')
    .trim(),
});

function useSchoolAccountForm(email?: string) {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState('');
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [agreementInput, setAgreementInput] = useState(false);
  const [agreementError, setAgreementError] = useState(false);
  const [formStatus, setFormStatus] = useState<any>({ isLoading: false });
  const [createSchoolAccount, createFormStatus] = useCreateSchoolAccountMutation();
  const [updateSchoolAccount, editFormStatus] = useUpdateSchoolAccountMutation();
  //@ts-ignore
  const { data: userData } = userContextApi.endpoints.getUserContext.useQueryState('', {
    selectFromResult: (result: any) => result,
  });

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState,
    formState: { errors },
    setFocus,
  } = useForm({
    defaultValues: {
      institution_name: '',
      primary_email: '',
      address_line1: '',
      address_line2: '',
      city: '',
      state: '',
      postcode: '',
      is_institution: true,
      phone_number: '',
      contact_person_name: '',
      contact_person_email: '',
      password: '',
      confirm_password: '',
      contact_person_mobileno: '',
    },
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  const handleAgreementBox = () => {
    setAgreementInput(!agreementInput);
  };

  const shouldDisableSubmitButton = () =>
    getValues()?.institution_name &&
    getValues()?.primary_email &&
    getValues()?.password &&
    getValues()?.confirm_password &&
    getValues()?.address_line1 &&
    getValues()?.address_line2 &&
    getValues()?.city &&
    getValues()?.state &&
    getValues()?.postcode &&
    getValues()?.phone_number &&
    getValues()?.contact_person_name &&
    getValues()?.contact_person_email &&
    getValues()?.contact_person_mobileno &&
    agreementInput
      ? setIsDisabledButton(false)
      : setIsDisabledButton(true);

  useEffect(() => {
    shouldDisableSubmitButton();
  }, [agreementInput]);

  useEffect(() => {
    if (email !== '0') {
      if (cookie.isLoggedIn()) {
        //edit mode
        if (userData) {
          setValue('institution_name', userData.institution_profile.institution_name);
          setValue('primary_email', userData.institution_profile.primary_email);
          setValue('address_line1', userData.institution_profile.address_line1);
          setValue('address_line2', userData.institution_profile.address_line2);
          setValue('city', userData.institution_profile.city);
          setValue('state', userData.institution_profile.state);
          setValue('postcode', userData.institution_profile.postcode);
          setValue('is_institution', userData.is_institution);
          setValue('phone_number', userData.institution_profile.phone_number);
          setValue('contact_person_name', userData.institution_profile.contact_person[0].name);
          setValue('contact_person_email', userData.institution_profile.contact_person[0].email);
          setValue('password', 'Test_000');
          setValue('confirm_password', 'Test_000');
          setValue('contact_person_mobileno', userData.institution_profile.contact_person[0].mobile_number);
        }
      } else {
        //@ts-ignore
        localStorage.removeItem(email);
        navigate(`/createaccount/school/0`);
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
      navigate(`/createaccount/school/emailverification/${getValues()?.primary_email ?? '0'}/false`);
    }
  };

  useEffect(() => {
    evaluateFormStatus(createFormStatus);
  }, [createFormStatus]);

  useEffect(() => {
    evaluateFormStatus(editFormStatus);
  }, [editFormStatus]);

  useEffect(() => {
    if (email !== '0') window.scroll(0, 425);
  }, [email]);

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
        getValues()?.institution_name ||
        getValues()?.primary_email ||
        getValues()?.password ||
        getValues()?.confirm_password ||
        getValues()?.address_line1 ||
        getValues()?.address_line2 ||
        getValues()?.city ||
        getValues()?.state ||
        getValues()?.postcode ||
        getValues()?.phone_number ||
        getValues()?.contact_person_name ||
        getValues()?.contact_person_email ||
        getValues()?.contact_person_mobileno
      ) {
        // eslint-disable-next-line no-param-reassign
        event.returnValue = '';
      }
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  useEffect(() => {
    if (email !== '0') setAgreementInput(true);
  }, []);

  const saveForm = async (data: any) => {
    const selectedData = {
      address_line1: data?.address_line1,
      address_line2: data?.address_line2,
      city: data?.city,
      contact_person_email: data?.contact_person_email,
      contact_person_mobileno: data?.contact_person_mobileno,
      contact_person_name: data?.contact_person_name,
      institution_name: data?.institution_name,
      is_institution: data?.is_institution,
      phone_number: data?.phone_number,
      postcode: data?.postcode,
      primary_email: data?.primary_email,
      state: data?.state,
    };

    if (!agreementInput) setAgreementError(true);

    if (email && email !== '0' && !isDisabledButton) {
      //call edit api
      await updateSchoolAccount(selectedData);
      // navigate(`/createaccount/school/emailverification/${getValues()?.primary_email ?? '0'}/false`);
    } else if (!isDisabledButton) await createSchoolAccount(data);
  };

  return {
    //states
    formState,
    control,
    formStatus,
    serverError,
    agreementInput,
    agreementError,
    isDisabledButton,

    //handlers
    getValues,
    setServerError,
    handleSubmit,
    saveForm,
    handleAgreementBox,
    shouldDisableSubmitButton,
  };
}

export default useSchoolAccountForm;
