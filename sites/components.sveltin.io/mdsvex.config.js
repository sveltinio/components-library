import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';

import emoji from 'remark-emoji';
import remarkExternalLinks from 'remark-external-links';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import examples from 'mdsvexamples';
import headings from './src/lib/utils/headings.js';

const mdsvexConfig = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		headings,
		emoji,
		[
			examples,
			{
				defaults: {
					Wrapper: '/src/lib/components/_ButtonGroupPreview.svelte'
				}
			}
		],
		relativeImages,
		// external links open in a new tab
		[remarkExternalLinks, { target: '_blank', rel: 'noopener' }]
	],
	rehypePlugins: [
		rehypeSlug[
			(rehypeAutoLinkHeadings,
			{
				behavior: 'wrap'
			})
		]
	]
});

export default mdsvexConfig;
