import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
	},
	package: {
		dir: 'dist',
		emitTypes: true,
		// exclude postcss and d2 files to be part of the package.
		files: (filepath) => {
			const postcssFileRegex = /^_|\/_|\.postcss$/;
			const d2FileRegex = /^_|\/_|\.d2$/;
			return !postcssFileRegex.test(filepath) && !d2FileRegex.test(filepath);
		}
	}
};

export default config;
