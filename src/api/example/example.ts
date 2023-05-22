import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'example',
  }),
  tagTypes: ['exampleApi'],
  endpoints: (builder) => ({
    // first generic type is response type and seconde type is param type
    login: builder.mutation<any, any>({
      query: (data) => ({
        url: '/create',
        method: 'POST',
        //todo create a base query to send authorization if it was true
        sendAuthorization: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        data: data,
      }),
    }),
  }),
});

export const { useLoginMutation } = exampleApi;
