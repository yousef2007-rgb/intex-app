import { createSlice } from "@reduxjs/toolkit";

const initialState = "none";

export const cartVisabilitySlice = createSlice({
  name: "cartVisability",
  initialState,
  reducers: {
    tougleCart: (state) => {
      return state == "none" ? "flex" : "none";
    },
  },
});

export const { tougleCart } = cartVisabilitySlice.actions;

export default cartVisabilitySlice.reducer;
