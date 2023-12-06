import { baseApi } from '../../../store/baseApi';
import { gql } from 'graphql-request';

export const activeSubscriptionApi = baseApi.injectEndpoints({
  endpoints: (builder: any) => ({
    //queries
    checkIfSubscribed: builder.query({
      query: (email: String) => ({
        body: gql`
          query FindActiveLicences($email: String!) {
            findActiveLicences(email: $email) {
              id
              is_assigned
              is_renewed
              date_assigned
              assigned_by
              assignee_email
            }
          }
        `,
        variables: {
          email,
        },
      }),
      transformResponse: (res: any): any => res.findActiveLicences,
    }),
  }),
});

export const { useLazyCheckIfSubscribedQuery } = activeSubscriptionApi;
