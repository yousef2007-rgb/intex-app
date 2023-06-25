/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				mobile: "260px",
				tablet: "800px",
				laptop: "900px",
				desktop: "1280px",
			},
			colors: {
				primary: "#2596BE",
				blue_gray: "#55a4b6",
				secondery: "#f7c44a",
			}
		},
	},
	plugins: [],
};
