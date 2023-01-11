<script lang="ts">
	import { base } from '$app/paths';

	const demos: Array<Record<string, string>> = [
		{
			name: 'Button',
			headline:
				'Interactive and accessible component activated by a user to perform an action',
			url: 'demos/button'
		},
		{
			name: 'ButtonGroup',
			headline: 'Accessible component as a container for grouping a set of buttons.',
			url: 'demos/button-group'
		},
		{
			name: 'ColorViewer',
			headline: 'Render a colorful circle with the label set to the color value.',
			url: 'demos/color'
		},
		{
			name: 'Dropdown',
			headline: 'Open a menu when the button is clicked and displays a menu of link targets.',
			url: 'demos/dropdown'
		},
		{
			name: 'Link',
			headline: 'Provide an interactive reference to a resource either external or local.',
			url: 'demos/link'
		},
		{
			name: 'List',
			headline: 'Presents a list of options and allows a user to select one them.',
			url: 'demos/list'
		},
		{
			name: 'Tabs',
			headline: 'A set of tab elements and their associated tab panels.',
			url: 'demos/tabs'
		}
	];
</script>

<div class="header">
	<h1>@sveltinio/essentials</h1>
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
