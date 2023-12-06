import { baseApi } from '../../../../store/baseApi';
import { gql } from 'graphql-request';

export const emailVerificationApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // queries

    // mutations
    verifyEmail: builder.mutation({
      query: (otpCode: string) => ({
        body: gql`
          mutation VerifyEmail($otpCode: String) {
            verifyEmail(otp_code: $otpCode) {
              id
              username
              email
              is_institution
              is_verified
              is_active
            }
          }
        `,
        variables: {
          otpCode,
        },
      }),
      transformResponse: (res: any) => res.verifyEmail,
    }),
    resendOtpCode: builder.mutation({
      query: () => ({
        body: gql`
          mutation ResendOtpCode {
            resendOtpCode {
              id
              username
              email
            }
          }
        `,
        variables: {},
      }),
      transformResponse: (res: any) => res.resendOtpCode,
    }),
  }),
  overrideExisting: false,
});

export const { useVerifyEmailMutation, useResendOtpCodeMutation } = emailVerificationApi;
