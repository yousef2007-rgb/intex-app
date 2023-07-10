import { createSlice } from "@reduxjs/toolkit";
import data from '../data/content.json'
import { useRouter } from "next/router";
import { useState } from "react";

let lang;
export async function getServerSideProps({ context }) {
	// context value contains the query params
	lang = context.query.lang;
}
const ar = data.ar;
const en = data.en;

const initialState = lang == "arabic" ? ar : en;

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
