import daisyUI from 'daisyui'
import defaultTheme from 'tailwindcss/defaultTheme'
import themes from 'daisyui/src/theming/themes'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
		  body: ['"Plus Jakarta Sans"', ...defaultTheme.fontFamily.sans]
		},
		extend: {},
	},
	plugins: [daisyUI],
	daisyui: {
	  themes: [{
		light: {
		  ...themes['light'],
		  primary: '#cf4536',
		  'base-100': '#ffffff'
		}
	  }, {
		dark: {
		  ...themes['dark'],
		  primary: '#ffbc27',
		  'base-100': '#13131f'
		}
	  }]
	}
}
