import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  QueryDefinition,
} from '@reduxjs/toolkit/query/react';
import type { UseQuery } from '@reduxjs/toolkit/dist/query/react/buildHooks';

export const cardsApi = createApi({
  reducerPath: '',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/people/' }),

  endpoints: (build) => ({
    getCardsByParam: build.query({
      query: (params: string | number) =>
        typeof params === 'string'
          ? { url: `?search=${params}` }
          : { url: `?page=${params}` },
    }),

    getCardDetail: build.query({
      query: (params: string | null) =>
        params !== null ? { url: `${params}` } : { url: '1' },
    }),
  }),
});

export const {
  useGetCardsByParamQuery,
  useGetCardDetailQuery,
}: {
  useGetCardsByParamQuery: UseQuery<
    QueryDefinition<
      unknown,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        unknown,
        FetchBaseQueryMeta
      >,
      never,
      unknown,
      ''
    >
  >;
  useGetCardDetailQuery: UseQuery<
    QueryDefinition<
      unknown,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        unknown,
        FetchBaseQueryMeta
      >,
      never,
      unknown,
      ''
    >
  >;
} = cardsApi;
