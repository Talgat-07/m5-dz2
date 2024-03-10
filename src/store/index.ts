import { configureStore } from "@reduxjs/toolkit";
import getProductsReducer from "./getProductsSlice.ts";

const store = configureStore({
  reducer: {
    getProducts: getProductsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
