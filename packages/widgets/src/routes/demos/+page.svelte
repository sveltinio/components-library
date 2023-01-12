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
			name: 'PagesNavigator',
			headline: 'PagesNavigator components to help users navigating throught the pages.',
			url: 'demos/pagesnavigator'
		},
		{
			name: 'ResponsiveCard',
			headline:
				'Display content vertically on small screen and horizontally on large screen.',
			url: 'demos/responsivecard'
		},
		{
			name: 'ScrollToTopButton',
			headline: 'ScrollToTopButton components helps to scroll to the top of the page.',
			url: 'demos/scroll-to-top'
		},
		{
			name: 'TOC',
			headline: 'Responsive Table of contents component for your pages.',
			url: 'demos/toc'
		}
	];
</script>

<div class="header">
	<h1>@sveltinio/widgets</h1>
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
