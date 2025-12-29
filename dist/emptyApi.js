import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
let customBaseQuery;
// Function to configure the API before it's used
export const configureImmichApi = (config) => {
    customBaseQuery = fetchBaseQuery({
        baseUrl: '/',
        ...config,
    });
};
// Base API instance - will use custom config if provided via configureImmichApi
export const immichApi = createApi({
    reducerPath: 'immichApi',
    baseQuery: async (...args) => {
        // Use custom base query if configured, otherwise use default
        const baseQuery = customBaseQuery || fetchBaseQuery({ baseUrl: '/' });
        return baseQuery(...args);
    },
    endpoints: () => ({}),
});
