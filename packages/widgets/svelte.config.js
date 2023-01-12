import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter()
	},
	package: {
		dir: 'dist',
		emitTypes: true,
		// files to not be part of the package
		files: (filepath) => {
			const postcssFileRegex = /^_|\/_|\.postcss$/;
			const d2FileRegex = /^_|\/_|\.d2$/;
			const assetsFolderRegex = /assets/;
			const ds = /.DS_Store/;
			const mdFiles = /^_|\/_|\.md$/;
			return (
				!postcssFileRegex.test(filepath) &&
				!assetsFolderRegex.test(filepath) &&
				!d2FileRegex.test(filepath) &&
				!ds.test(filepath) &&
				!mdFiles.test(filepath)
			);
		}
	}
};

export default config;
