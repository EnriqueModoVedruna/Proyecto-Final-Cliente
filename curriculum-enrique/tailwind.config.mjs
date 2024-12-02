/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			// Para poder utilizar los colores personalizados los tuve que importar / crear aqui
			colors: {
				amarilloMostaza: '#A69A35',
			}
		},
	},
	plugins: [],
}
