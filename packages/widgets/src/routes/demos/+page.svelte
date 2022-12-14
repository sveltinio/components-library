<script lang="ts">
	import { base } from '$app/paths';

	const demos: Array<Record<string, string>> = [
		{
			name: 'Breadcrumbs',
			headline: 'Breadcrumbs helps users to navigate through the website.',
			url: 'demos/breadcrumbs'
		},
		{
			name: 'Card',
			headline: 'Cards are used to group and display content in a easily readable way.',
			url: 'demos/card'
		},
		{
			name: 'ResponsiveCard',
			headline:
				'ResponsiveCard component display content vertically on small screen, horizontally on large screen.',
			url: 'demos/responsivecard'
		},
		{
			name: 'PagesNavigator',
			headline: 'Pages Navigator components to help users to navigate throught the pages.',
			url: 'demos/pagesnavigator'
		},
		{
			name: 'TOC',
			headline: 'Table of contents component.',
			url: 'demos/toc'
		}
	];
</script>

<section class="main">
	<h1>@sveltinio/widgets</h1>
	<h2><tt>Demos</tt></h2>
</section>

<div class="grid-wrapper">
	<div class="grid">
		{#each demos as demo}
			<a class="demo-card" href="{base}/{demo.url}">
				<h2>{demo.name}</h2>
				<p>{demo.headline}</p>
			</a>
		{/each}
	</div>
</div>
