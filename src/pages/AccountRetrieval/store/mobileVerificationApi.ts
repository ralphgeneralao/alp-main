import { baseApi } from '../../../store/baseApi';
import { gql } from 'graphql-request';

export const mobileVerificationApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // queries

    // mutations
    verifyMobile: builder.mutation({
      query: (otpCode: string, phoneNumber: string) => ({
        body: gql`
          mutation VerifyMobile($otpCode: String, $phoneNumber: String) {
            verifyMobile(otp_code: $otpCode, phoneNumber: $phoneNumber) {
              id
            }
          }
        `,
        variables: {
          otpCode,
          phoneNumber,
        },
      }),
      transformResponse: (res: any) => res.verifyMobile,
    }),
    resendOtpCodeSms: builder.mutation({
      query: (email: string) => ({
        body: gql`
          mutation ResendOtpCodeSms($email: String) {
            resendOtpCodeSms(email: $email) {
              id
              username
              email
            }
          }
        `,
        variables: {
          email,
        },
      }),
      transformResponse: (res: any) => res.resendOtpCodeSms,
    }),
  }),
  overrideExisting: false,
});

export const { useVerifyMobileMutation, useResendOtpCodeSmsMutation } = mobileVerificationApi;
