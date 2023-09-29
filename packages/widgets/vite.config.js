import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	clearScreen: false,
	server: {
		port: 3005,
		fs: {
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
		reporters: ['dot'],
		silent: true,
		environment: 'jsdom',
		deps: {
			// [Unknown file extension ".svelte" when importing Svelte files](https://github.com/vitest-dev/vitest/issues/3191)
			// [Deprecate deps.inline in favour of deps.optimizer](https://github.com/vitest-dev/vitest/issues/3521)
			optimizer: [/essentials\/dist/]
		}
	},
	ssr: { noExternal: ['@indaco/svelte-iconoir/**'] }
};

export default config;
