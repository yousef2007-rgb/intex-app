import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const checkedoutSlice = createSlice({
	name: "checkedout",
	initialState,
	reducers: {
		addCartItems: (state, action) => {
			return JSON.parse(window.localStorage.getItem("cart"));
		},
	},
});

// Action creators are generated for each case reducer function
export const { addCartItems } =
	checkedoutSlice.actions;

export default checkedoutSlice.reducer;
