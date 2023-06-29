import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import checkedoutReducer from "./slices/checkedoutSlice";
import searchVisabilitySlice from "./slices/searchVisabilitySlice";
import cartVisabilitySlice from "./slices/cartVisabilitySlice";
import languageSlice from "./slices/languageSlice";
export const store = configureStore({
	reducer: {
		cart: cartReducer,
		checkedout: checkedoutReducer,
		searchVisability: searchVisabilitySlice,
		cartVisability: cartVisabilitySlice,
		language: languageSlice,
	},
});
