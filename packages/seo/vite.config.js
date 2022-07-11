import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	server: {
		port: 3002
	},
	plugins: [sveltekit()]
};

export default config;
