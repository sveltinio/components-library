<script lang="ts">
	import { base } from '$app/paths';

	const demos: Array<Record<string, string>> = [
		{
			name: 'Button',
			headline: 'Breadcrumbs helps users to navigate through the website.',
			url: 'demos/button'
		},
		{
			name: 'ButtonGroup',
			headline: 'Cards are used to group and display content in a easily readable way.',
			url: 'demos/button-group'
		},
		{
			name: 'ColorViewer',
			headline: 'Pages Navigator components to help users to navigate throught the pages.',
			url: 'demos/color'
		},
		{
			name: 'Dropdown',
			headline:
				'ResponsiveCard component display content vertically on small screen, horizontally on large screen.',
			url: 'demos/dropdown'
		},
		{
			name: 'Link',
			headline: 'ScrollToTopButton components helps to scroll to the top of the page.',
			url: 'demos/link'
		},
		{
			name: 'List',
			headline: 'Table of contents component.',
			url: 'demos/list'
		},
		{
			name: 'Tabs',
			headline: 'Table of contents component.',
			url: 'demos/tabs'
		}
	];
</script>

<section class="main">
	<h1>@sveltinio/essentials</h1>
	<h2>Demos</h2>
</section>

<div class="demo-grid-wrapper">
	<div class="demo-grid">
		{#each demos as demo}
			<a class="demo-card" href="{base}/{demo.url}">
				<h2>{demo.name}</h2>
				<p>{demo.headline}</p>
			</a>
		{/each}
	</div>
</div>
