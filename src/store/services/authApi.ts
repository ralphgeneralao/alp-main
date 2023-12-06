import { baseApi } from '../baseApi';
import { gql } from 'graphql-request';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // queries
    retrievePrimaryCredentials: builder.query({
      query: (secondaryEmailOrMobile: String) => ({
        body: gql`
          query RetrieveCredentials($secondaryEmailOrMobile: String) {
            retrievePrimaryCredentials(secondaryEmailOrMobile: $secondaryEmailOrMobile) {
              id
            }
          }
        `,
        variables: {
          secondaryEmailOrMobile,
        },
      }),
      transformResponse: (res: any): any => res.retrievePrimaryCredentials,
    }),

    // mutations
    login: builder.mutation({
      query: ({ userEmailorUsername, password, accountLicence }: any) => ({
        body: gql`
          mutation Login($userEmailorUsername: String, $password: String, $subsite: String, $accountLicence: String) {
            login(
              userEmailorUsername: $userEmailorUsername
              password: $password
              subsite: $subsite
              accountLicence: $accountLicence
            ) {
              id
              access_token
              refresh_token
              expires_at
              browser
              platform
            }
          }
        `,
        variables: {
          userEmailorUsername,
          password,
          subsite: 'MAIN',
          accountLicence,
        },
      }),
      transformResponse: (res: any): any => res.login,
    }),
    logout: builder.mutation({
      query: () => ({
        body: gql`
          mutation Logout {
            logout {
              success
            }
          }
        `,
      }),
      transformResponse: (res: any): any => res.logout,
      async onQueryStarted(args: any, { queryFulfilled }: any) {
        try {
          const { data } = await queryFulfilled;
          return data;
        } catch (error) {
          //@ts-ignore
          if (error?.error?.status === 500) window.location.href = '/500';
          return error;
        }
      },
    }),
    requestResetPassword: builder.mutation({
      query: (emailOrMobile: String) => ({
        body: gql`
          mutation RequestResetPassword($emailOrMobile: String) {
            requestResetPassword(emailOrMobile: $emailOrMobile) {
              id
            }
          }
        `,
        variables: {
          emailOrMobile,
        },
      }),
      transformResponse: (res: any): any => res.requestResetPassword,
    }),
    resetPassword: builder.mutation({
      query: ({ newPassword, token }: any) => ({
        body: gql`
          mutation ResetPassword($newPassword: String, $token: String) {
            resetPassword(newPassword: $newPassword, token: $token) {
              newPassword
              token {
                access_token
                refresh_token
              }
            }
          }
        `,
        variables: {
          newPassword,
          token,
        },
      }),
      transformResponse: (res: any): any => res.resetPassword,
    }),
  }),
  overrideExisting: false,
});
export const {
  useLoginMutation,
  useLogoutMutation,
  useLazyRetrievePrimaryCredentialsQuery,
  useRequestResetPasswordMutation,
  useResetPasswordMutation,
} = authApi;
