import Typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#005cc5',
			},
			textUnderlineOffset: {
				6: '6px',
			},
			fontFamily: {
				wenkai: ['LXGW WenKai Lite', ...defaultTheme.fontFamily.sans],
				monaspace: ['Monaspace Neon', ...defaultTheme.fontFamily.sans],
				handwrite: ['Architects Daughter', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [Typography],
}
