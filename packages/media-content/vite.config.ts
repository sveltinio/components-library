import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
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
		environment: 'jsdom'
	}
};

export default config;
