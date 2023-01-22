import { createSlice } from "@reduxjs/toolkit";

const initialState = "none";

export const searchVisabilitySlice = createSlice({
  name: "searchVisability",
  initialState,
  reducers: {
    tougle: (state) => {
      return state == "none" ? "flex" : "none";
    },
  },
});

export const { tougle: tougle } = searchVisabilitySlice.actions;

export default searchVisabilitySlice.reducer;
