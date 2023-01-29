import { createSlice } from "@reduxjs/toolkit";

const initialState = "english";

export const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    tougleLanguage: (state) => {
      return state == "english" ? "arabic" : "english";
    },
  },
});

export const { tougleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
