import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import mm from 'micromatch';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),
	kit: {
		adapter: adapter()
	},
	package: {
		dir: 'dist',
		emitTypes: true,
		exports: (filepath) => {
			return mm.isMatch(filepath, ['!__tests__/**/*']);
		},
		files: mm.matcher('!__tests__/**/*')
	}
};

export default config;
