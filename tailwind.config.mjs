import Typography from '@tailwindcss/typography';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary-color)',
				'light-bg': 'var(--light-bg)',
				'light-1': 'var(--light-1)',
				'light-2': 'var(--light-2)',
				'light-3': 'var(--light-3)',
				'dark-bg': 'var(--dark-bg)',
				'dark-1': 'var(--dark-1)',
				'dark-2': 'var(--dark-2)',
				'dark-3': 'var(--dark-3)',
				'code-dark-bg': 'var(--code-dark-bg)',
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
