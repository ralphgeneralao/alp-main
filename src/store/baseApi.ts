import { createApi } from '@reduxjs/toolkit/query/react';
import { gql, GraphQLClient, ClientError } from 'graphql-request';
import config from '../config';
import cookie from '../helpers/cookieHelper';

const client = new GraphQLClient(config.baseApiUrl, {
  credentials: 'include',
  mode: 'cors',
});

const graphqlBaseQuery =
  () =>
  async ({ body, variables = {}, headers = {} }: any) => {
    try {
      // set the Authorization Header here if token exists
      const token = cookie.getToken();

      if (token) {
        // eslint-disable-next-line no-param-reassign
        headers = { ...headers, Authorization: `Bearer ${token}` };
      }
      const result = await client.request(body, variables, headers);
      return { data: result };
    } catch (error) {
      if (error instanceof ClientError) {
        if (error.message.includes('Unauthorized access') || error.message.includes('Invalid session')) {
          if (cookie.isLoggedIn()) {
            //Invalid session was most likely be caused by logging out from other site
            // window.location.reload();
          }
        }

        if (/Session Expired. Please Login again./i.test(error.message)) {
          try {
            let token = cookie.getToken();
            let rtoken = cookie.getRefreshToken();
            if (token) {
              // eslint-disable-next-line no-param-reassign
              headers = { ...headers, Authorization: `Bearer ${token}` };
            }
            await client.request(
              gql`
                mutation Mutation($token: String) {
                  refreshSession(token: $token) {
                    id
                    access_token
                    refresh_token
                    expires_at
                  }
                }
              `,
              {
                token: rtoken,
              },
              headers
            );

            // retry the backend request
            token = cookie.getToken();
            if (token) {
              // eslint-disable-next-line no-param-reassign
              headers = { ...headers, Authorization: token };
            }
            const result = await client.request(body, variables, headers);
            return { data: result };
          } catch (refreshError) {
            // window.location.href = '/login';
          }
          return { error: { status: error.response.status, data: error } };
        }
        return { error: { status: error.response.status, data: error } };
      }
      return { error: { status: 500, data: error } };
    }
  };

export const baseApi = createApi({
  baseQuery: graphqlBaseQuery(),
  endpoints: () => ({}),
  keepUnusedDataFor: 10,
});

//this will cache data longer
export const basePersistentApi = createApi({
  baseQuery: graphqlBaseQuery(),
  reducerPath: 'basePersistentApi',
  endpoints: () => ({}),
  keepUnusedDataFor: 3600,
});
