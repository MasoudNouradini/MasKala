import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import searchReducer from "./searchSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    search: searchReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
});
