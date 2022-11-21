/** @format */

module.exports = {
	media: false, // or 'media' or 'class'
	content: [
		'./components/**/*.{html,js}',
		'./pages/**/*.{html,js}',
		'./index.html',
		'./main.js',
		'./index.css',
		'./src/**/*.{html,js}'
	],
	theme: {
		extend: {
			colors: {
				body: '#17171F',
				'selected-text': '#A3A3FF',
				theme: '#3F3FFF',
				lightGrey: '#999999',
				nav: '#404053',
				secondary: '#9191A4',
				'input-border': '#565666',
				input: '#2A2A35'
			},
			fontFamily: {
				poppins: ["'Poppins'", 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	}
};
