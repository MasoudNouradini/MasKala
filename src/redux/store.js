import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import searchReducer from "./searchSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    search: searchReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});
