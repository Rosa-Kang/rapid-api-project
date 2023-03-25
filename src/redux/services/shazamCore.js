import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

  
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '896a95c876msh8612c58cf9b9e01p17995ejsn7a0921b19462');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({qurey: '/charts/world'}),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;