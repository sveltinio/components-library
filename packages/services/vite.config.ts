import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	clearScreen: false,
	server: {
		port: 3003,
		fs: {
			// Allow serving files from one level up to the project root
			// Alternatevaly set server.fs.strict to false
			allow: ['..']
		}
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
