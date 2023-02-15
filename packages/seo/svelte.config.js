import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		preserve: ['ld+json']
	}),

	kit: {
		adapter: adapter()
	},
	package: {
		dir: 'dist',
		emitTypes: true,
		// files to not be part of the package
		files: (filepath) => {
			const ds = /.DS_Store/;
			const mdFiles = /^_|\/_|\.md$/;
			return !ds.test(filepath) && !mdFiles.test(filepath);
		}
	}
};

export default config;
