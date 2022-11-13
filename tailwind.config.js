/** @format */

module.exports = {
	content: [
		"./components/**/*.{html,js}",
		"./pages/**/*.{html,js}",
		"./index.html",
		"./index.css"
	],
	media: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				body: "#17171F",
				"selected-text": "#A3A3FF",
				theme: "#3F3FFF",
				nav: "#404053",
				secondary: "#5656db",
				// #9191A4
				badge: "#3F3F51",
				"input-border": "#565666",
				input: "#2A2A35"
			},
			fontFamily: {
				poppins: ["'Poppins'", "sans-serif"]
			}
		}
	}
};
