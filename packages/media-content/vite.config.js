import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	clearScreen: false,
	server: {
		port: 3001
	},
	resolve: {
		alias: {
			$tests: path.resolve('tests')
		}
	},
	plugins: [sveltekit()],
	test: {
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom',
		setupFiles: ['../config/vitest-setup.ts']
	}
};

export default config;
