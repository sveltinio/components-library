import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import relativeImages from 'mdsvex-relative-images';
import preview, { textFormatter, htmlFormatter } from 'remark-preview';

import emoji from 'remark-emoji';
import remarkSlug from 'remark-slug';
import remarkExternalLinks from 'remark-external-links';
import readingTime from 'remark-reading-time';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import headings from './src/lib/utils/headings.js';

const mdsvexConfig = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		remarkSlug,
		headings,
		emoji,
		readingTime(),
		relativeImages,
		// external links open in a new tab
		[remarkExternalLinks, { target: '_blank', rel: 'noopener' }],
		// Add an HTML preview snippet (formatted).
		// It is used on the RSS feed
		preview(
			textFormatter({
				length: 50
			}),
			htmlFormatter({
				length: 200,
				maxBlocks: 1
			}),
			{
				attribute: 'previewHtml'
			}
		)
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
