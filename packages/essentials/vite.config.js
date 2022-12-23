import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	clearScreen: false,
	server: {
		port: 3001,
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
	},
	ssr: { noExternal: ['@indaco/svelte-iconoir/**'] }
};

export default config;
