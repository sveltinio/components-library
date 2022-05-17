import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		package: {
			dir: 'dist',
			emitTypes: true,
			exports: (filepath) => {
				return mm.isMatch(filepath, ['!__tests__/**/*']);
			},
			files: mm.matcher('!__tests__/**/*')
		},
		vite: {
			test: {
				globals: true,
				reporters: ['dot'],
				silent: true,
				environment: 'jsdom',
				setupFiles: ['../config/vitest-setup.ts', '../config/vitest-preset.ts']
			}
		}
	}
};

export default config;
