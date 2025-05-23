import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addCartItem: (state, action) => {
			const item = state.find(
				(c) => c.item.label === action.payload.item.label
			);
			if (!item) {
				window.localStorage.setItem("cart", JSON.stringify([...state, action.payload]));
				return [...state, action.payload];
			}
			const index = state.indexOf(item);
			if (!action.payload.replace) {
				state[index].quantity += action.payload.quantity;
			} else {
				state[index].quantity = action.payload.quantity;
			}
			window.localStorage.setItem("cart", JSON.stringify(state));
			return state;
		},
		clearItems: (state, action) => {
			window.localStorage.setItem("checkedout", JSON.stringify(state));
			window.localStorage.setItem("cart", []);
			return [];
		},
		removeCartItem: (state, action) => {
			window.localStorage.setItem(
				"cart",
				JSON.stringify(
					state.filter((item, index) => item.item.label != action.payload)
				)
			);
			return state.filter((item, index) => item.item.label != action.payload);
		},
		resetCartItem: (state, action) => {
			return action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem, resetCartItem, clearItems } =
	cartSlice.actions;

export default cartSlice.reducer;
