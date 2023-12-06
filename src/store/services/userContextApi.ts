import config from '../../config';
import { basePersistentApi } from '../baseApi';
import { gql } from 'graphql-request';

export const userContextApi = basePersistentApi.injectEndpoints({
  endpoints: (builder: any) => ({
    // queries
    getUserContext: builder.query({
      query: () => ({
        body: gql`
          query GetUserContext {
            getUserContext {
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
              institution_profile {
                id
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
              roles {
                id
                role {
                  name
                  short_code
                  id
                  allowed_subsites {
                    short_code
                    name
                    url
                  }
                }
                assigned_by {
                  id
                  username
                  email
                  is_institution
                  user_profile {
                    id
                    first_name
                    last_name
                  }
                  institution_profile {
                    institution_name
                  }
                }
              }
              licenses {
                id
                license_key
                activation_date
                expiration_date
                license_type
                role_short_code
                subsite {
                  id
                  short_code
                  name
                  url
                }
                assigned_by {
                  email
                  is_institution
                  user_profile {
                    first_name
                    last_name
                  }
                  institution_profile {
                    id
                    institution_name
                  }
                }
              }
            }
          }
        `,
      }),
      transformResponse: (res: any) => res.getUserContext,
      async onQueryStarted(args: any, { queryFulfilled }: any) {
        try {
          const { data } = await queryFulfilled;
          return data;
        } catch (error) {
          // alert('Something went wrong. Please contact administrator');
          return error;
        }
      },
    }),
    getUserLatestSubscription: builder.query({
      query: () => ({
        body: gql`
          query FindUserLatestSubscription($subsiteCode: String) {
            findUserLatestSubscription(subsite_code: $subsiteCode) {
              subscription {
                activation_date
                created_at
                expiration_date
                id
                product_reference_id
                invoices {
                  invoice_no
                  duration_in_month
                  payment_status
                }
                is_auto_renew
                is_self_assign
                purchase_date
                is_active
                subsite {
                  name
                }
                subsite_short_code
                unassigned_license_count
                unpaid_license_count
              }
              active_license_count
              pending_payments_count
              is_subscribed
            }
          }
        `,
        variables: {
          subsiteCode: config.subsiteCode,
        },
      }),
      transformResponse: (res: any) => res.findUserLatestSubscription,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserContextQuery,
  useLazyGetUserContextQuery,
  useGetUserLatestSubscriptionQuery,
  useLazyGetUserLatestSubscriptionQuery,
} = userContextApi;
