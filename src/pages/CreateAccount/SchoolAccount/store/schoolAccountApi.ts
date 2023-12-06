import { baseApi } from '../../../../store/baseApi';
import { gql } from 'graphql-request';
import { SchoolAccountModel } from '../models/schoolAccountModels';

export const schoolAccountApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // queries

    // mutations
    createSchoolAccount: builder.mutation({
      query: (user: SchoolAccountModel) => ({
        body: gql`
          mutation CreateUserAccount($user: UserAccountContent!) {
            createUserAccount(user: $user) {
              user {
                id
                username
                email
                is_institution
                is_verified
                is_active
                lastlogin_datetime
                institution_profile {
                  institution_name
                  primary_email
                  address_line1
                  address_line2
                  city
                  state
                  postcode
                  phone_number
                  contact_person {
                    name
                    email
                    mobile_number
                  }
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
            is_institution: true,
          },
        },
      }),
      transformResponse: (res: any) => res.createUserAccount,
    }),
    updateSchoolAccount: builder.mutation({
      query: (user: SchoolAccountModel) => ({
        body: gql`
          mutation UpdateUserAccount($user: UserAccountContent!) {
            updateUserAccount(user: $user) {
              user {
                id
                email
                institution_profile {
                  institution_name
                  address_line1
                  address_line2
                  city
                  state
                  postcode
                  phone_number
                  contact_person {
                    email
                    mobile_number
                    name
                  }
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
            is_institution: true,
          },
        },
      }),
      transformResponse: (res: any) => res.updateUserAccount,
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSchoolAccountMutation, useUpdateSchoolAccountMutation } = schoolAccountApi;
