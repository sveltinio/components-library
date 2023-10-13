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
		// https://github.com/vitest-dev/vitest/issues/2834#issuecomment-1427435467
		conditions: ['browser'],
		alias: {
			$tests: path.resolve('tests')
		}
	},
	plugins: [sveltekit()],
	test: {
		globals: true,
		environment: 'jsdom',
		reporters: ['dot'],
		silent: true,
		setupFiles: ['./tests/setup/vitest_setup.ts']
	},
	ssr: { noExternal: ['@indaco/svelte-iconoir/**'] }
};

export default config;
