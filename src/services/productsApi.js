// src/services/productsApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/"
  }),
  endpoints: (builder) => ({
    getSmartphones: builder.query({
      query: () => "products/category/smartphones"
    })
  })
});

export const { useGetSmartphonesQuery } = productsApi;
