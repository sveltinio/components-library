<script lang="ts">
	import { base } from '$app/paths';

	const demos: Record<string, string>[] = [
		{
			name: 'Button',
			headline:
				'Interactive and accessible widget component activated by a user to perform an action.',
			url: 'demos/button'
		},
		{
			name: 'ButtonGroup',
			headline: 'Accessible widget as a container for grouping a set of buttons.',
			url: 'demos/button-group'
		},
		{
			name: 'ColorViewer',
			headline:
				'A widget component to render a colorful circle with the label set to the color value.',
			url: 'demos/color'
		},
		{
			name: 'Dropdown',
			headline:
				'A widget component as menu button that opens a menu of items that behave as links.',
			url: 'demos/dropdown'
		},
		{
			name: 'Link',
			headline:
				'A widget component providing an interactive reference to a resource (external or local).',
			url: 'demos/link'
		},
		{
			name: 'ToggleList',
			headline:
				'A widget component that enables content to be either collapsed or expanded .',
			url: 'demos/list'
		},
		{
			name: 'Tabs',
			headline: 'A widget component to display one panel of content at a time.',
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
