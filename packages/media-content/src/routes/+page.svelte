<script lang="ts">
	import { base } from '$app/paths';

	const demos: Record<string, string>[] = [
		{
			name: 'Codepen',
			headline: 'Embed content from CodePen in your pages and customize settings.',
			url: 'demos/codepen'
		},
		{
			name: 'CodeSandbox',
			headline: 'Embed content from CodeSandbox in your pages and customize settings.',
			url: 'demos/codesandbox'
		},
		{
			name: 'Facebook',
			headline: 'Embed content from Facebook in your pages and customize settings.',
			url: 'demos/facebook'
		},
		{
			name: 'SlideShare',
			headline: 'Embed content from SlideShare in your pages and customize settings.',
			url: 'demos/slideshare'
		},
		{
			name: 'Stackblitz',
			headline: 'Embed content from CodStackblitzePen in your pages and customize settings.',
			url: 'demos/stackblitz'
		},
		{
			name: 'Tweet',
			headline: 'Embed content from Twitter in your pages and customize settings.',
			url: 'demos/tweet'
		},
		{
			name: 'Vimeo',
			headline: 'Embed content from Vimeo in your pages and customize settings.',
			url: 'demos/vimeo'
		},
		{
			name: 'YouTube',
			headline: 'Embed content from YouTube in your pages and customize settings.',
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
