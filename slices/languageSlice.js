import { createSlice } from "@reduxjs/toolkit";
import data from '../data/content.json'

const ar = data.ar;
const en = data.en;

const initialState = en;

export const languageSlice = createSlice({
	name: "language",
	initialState,
	reducers: {
		tougleLanguage: (state) => {
			let result = state.language == "english" ? ar : en;
			// window.localStorage.setItem("language", JSON.stringify(result))
			return result;
		},
	},
});

export const { tougleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
