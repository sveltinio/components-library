import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	clearScreen: false,
	server: {
		port: 3002
	},
	resolve: {
		// https://github.com/vitest-dev/vitest/issues/2834#issuecomment-1427435467
		conditions: ['browser'],
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
