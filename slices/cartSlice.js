import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem: addCartItem } = cartSlice.actions;

export default cartSlice.reducer;
