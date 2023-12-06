import { baseApi } from '../../../../store/baseApi';
import { gql } from 'graphql-request';
import { PersonalAccountModel } from '../models/personalAccountModels';

export const personalAccountApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // queries

    // mutations
    createPersonalAccount: builder.mutation({
      query: ({ user, activationKey }: { user: PersonalAccountModel; activationKey: string; userAccountLicence: any }) => ({
        body: gql`
          mutation CreateUserAccount($user: UserAccountContent!, $activationKey: String) {
            createUserAccount(user: $user, activation_key: $activationKey) {
              user {
                id
                username
                email
                is_institution
                is_verified
                is_active
                user_profile {
                  id
                  first_name
                  last_name
                  primary_email
                  secondary_email
                  mobile_number
                  affiliation
                  state
                  postcode
                }
              }
              token {
                id
                access_token
                refresh_token
              }
            }
          }
        `,
        variables: {
          user: {
            ...user,
            is_institution: false,
          },
          activationKey,
        },
      }),
      transformResponse: (res: any) => res.createUserAccount,
    }),
    //
    createInvitedPersonalAccount: builder.mutation({
      query: ({
        user,
        activationKey,
        userAccountLicence,
      }: {
        user: PersonalAccountModel;
        activationKey: string;
        userAccountLicence: any;
      }) => ({
        body: gql`
          mutation CreateUserInvited($user: UserAccountContent!, $activationKey: String, $userAccountLicence: ID) {
            createUserInvited(user: $user, activation_key: $activationKey, user_account_licence_id: $userAccountLicence) {
              user {
                id
                username
                email
                is_institution
                is_verified
                is_active
                user_profile {
                  id
                  first_name
                  last_name
                  primary_email
                  secondary_email
                  mobile_number
                  affiliation
                  state
                  postcode
                }
              }
              token {
                id
                access_token
                refresh_token
              }
            }
          }
        `,
        variables: {
          user: {
            ...user,
            is_institution: false,
          },
          activationKey,
          userAccountLicence,
        },
      }),
      transformResponse: (res: any) => res.createUserInvited,
    }),
    updateUserAccount: builder.mutation({
      query: (user: PersonalAccountModel) => ({
        body: gql`
          mutation UpdateUserAccount($user: UserAccountContent!) {
            updateUserAccount(user: $user) {
              user {
                id
                email
                user_profile {
                  useraccount_id
                  first_name
                  last_name
                  secondary_email
                  mobile_number
                  affiliation
                  state
                  postcode
                }
                is_institution
                is_verified
                is_active
              }
            }
          }
        `,
        variables: {
          user: {
            ...user,
            is_institution: false,
          },
        },
      }),
      transformResponse: (res: any) => res.updateUserAccount,
    }),
  }),
  overrideExisting: false,
});

export const { useCreatePersonalAccountMutation, useUpdateUserAccountMutation, useCreateInvitedPersonalAccountMutation } =
  personalAccountApi;
