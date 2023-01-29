import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import searchVisabilitySlice from "./slices/searchVisabilitySlice";
import cartVisabilitySlice from "./slices/cartVisabilitySlice";
import languageSlice from "./slices/languageSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    searchVisability: searchVisabilitySlice,
    cartVisability: cartVisabilitySlice,
    language: languageSlice,
  },
});
