import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      console.log(state);
      const item = state.find(
        (c) => c.item.label === action.payload.item.label
      );
      console.log(item);
      if (!item) {
        return [...state, action.payload];
      }
      const index = state.indexOf(item);
      state[index].quantity += action.payload.quantity;
      return state;
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
export const { addCartItem, removeCartItem, resetCartItem } = cartSlice.actions;

export default cartSlice.reducer;
