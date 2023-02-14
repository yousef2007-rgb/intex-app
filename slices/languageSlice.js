import { createSlice } from "@reduxjs/toolkit";

const initialState = "english";

export const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		tougleLanguage: (state) => {
			let result = state == "english" ? "arabic" : "english"
			window.localStorage.setItem("language", JSON.stringify(result))
			return result;
		},
	},
});

export const { tougleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
