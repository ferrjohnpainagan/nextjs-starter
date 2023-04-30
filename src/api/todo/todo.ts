import { apiQuery } from '@api/Query';
import { baseApiQuery } from '@base/Api/query/BaseApiQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: baseApiQuery({
    preUrl: '/todos',
  }),
  tagTypes: ['todoApi'],
  endpoints: (builder) => ({
    getTodos: apiQuery<any, any>({
      builder,
      query: () => ({
        url: '/',
        method: 'GET',
        sendAuthorization: false,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetTodosQuery } = todoApi;
