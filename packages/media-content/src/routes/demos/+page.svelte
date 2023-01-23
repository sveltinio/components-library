<script lang="ts">
	import { base } from '$app/paths';

	const demos: Array<Record<string, string>> = [
		{
			name: 'Codepen',
			headline:
				'Interactive and accessible component activated by a user to perform an action',
			url: 'demos/codepen'
		},
		{
			name: 'CodeSandbox',
			headline: 'Accessible component as a container for grouping a set of buttons.',
			url: 'demos/codesandbox'
		},
		{
			name: 'Facebook',
			headline: 'Render a colorful circle with the label set to the color value.',
			url: 'demos/facebook'
		},
		{
			name: 'SlideShare',
			headline: 'Open a menu when the button is clicked and displays a menu of link targets.',
			url: 'demos/slideshare'
		},
		{
			name: 'Stackblitz',
			headline: 'Provide an interactive reference to a resource either external or local.',
			url: 'demos/stackblitz'
		},
		{
			name: 'Tweet',
			headline: 'Presents a list of options and allows a user to select one them.',
			url: 'demos/tweet'
		},
		{
			name: 'Vimeo',
			headline: 'A set of tab elements and their associated tab panels.',
			url: 'demos/vimeo'
		},
		{
			name: 'YouTube',
			headline: 'A set of tab elements and their associated tab panels.',
			url: 'demos/youtube'
		}
	];
</script>

<div class="header">
	<h1>@sveltinio/media-content</h1>
	<h2>Demos</h2>
</div>

<div class="demos-grid">
	{#each demos as demo}
		<div class="demo-card">
			<a href="{base}/{demo.url}">
				<h2>{demo.name}</h2>
				<p>{demo.headline}</p>
			</a>
		</div>
	{/each}
</div>
