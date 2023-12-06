import moment from 'moment';

export const getFormattedDate = (dateToFormat?: string, dateformat?: string): string => {
  if (dateToFormat)
    return `${moment(new Date(dateToFormat ?? ''))
      .format(dateformat ?? 'MMM DD, yyyy')
      .toUpperCase()}`;
  else return 'N/A';
};

export const extractErrorMessage = (formStatus: any): string => {
  try {
    if (formStatus?.isError) {
      if (formStatus?.error?.status === 500) return 'Something went wrong. Please contact administrator.';
      else return formStatus?.error?.data?.response?.errors[0]?.message;
    }
  } catch (error) {
    return 'Something went wrong. Please contact administrator.';
  }

  return 'No error found';
};
