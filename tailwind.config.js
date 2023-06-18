/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'media',
	theme: {
		extend: {
			width: {
				desktopWidth: '70%'
			}
		}
	},
	plugins: []
};
