/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./*.{html,js}'],
	theme: {
		extend: {
			colors: {
				primaryRed: '#ff7a7a',
				primaryGreen: '#38cc8c',
				accentBlue: '#6055a5',
				textDark: '#3e3c49',
				textLight: '#b9b6d3',
			},
			fontFamily: {
				poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
