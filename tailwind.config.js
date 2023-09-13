/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
		"node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
		"./node_modules/flowbite/**/*.js",
	],
	theme: {
		extend: {
			colors: {
				primary: "#6fcf97",
        		secondary: "#222222",
				black: "#222222",
			},
			spacing: {
				"1000": "1000px",
				"10rem": "10rem",
				"500px": "500px",
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
	],
}

