import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
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
	ssr: { noExternal: ['@indaco/svelte-iconoir/**'] },
	test: {
		globals: true,
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom',
		setupFiles: ['../config/vitest-setup.ts']
	}
};

export default config;
