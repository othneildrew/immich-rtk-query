import { createApi, fetchBaseQuery, type BaseQueryFn, type FetchBaseQueryArgs } from '@reduxjs/toolkit/query/react'

// Export type alias that accepts all fetchBaseQuery arguments
export type ImmichApiConfig = FetchBaseQueryArgs

let customBaseQuery: BaseQueryFn | undefined

// Function to configure the API before it's used
export const configureImmichApi = (config: ImmichApiConfig) => {
  customBaseQuery = fetchBaseQuery({
    baseUrl: '/',
    ...config,
  })
}

// Base API instance - will use custom config if provided via configureImmichApi
export const immichApi = createApi({
  reducerPath: 'immichApi',
  baseQuery: async (...args) => {
    // Use custom base query if configured, otherwise use default
    const baseQuery = customBaseQuery || fetchBaseQuery({ baseUrl: '/' })
    return baseQuery(...args)
  },
  endpoints: () => ({}),
})
