<script lang="ts">
	import type { SEOWebPage } from '../../types.js';
	import { OpenGraph } from './opengraph/index.js';
	import { TwitterCard } from './twittercard/index.js';

	export let data: SEOWebPage;
</script>

<svelte:head>
	<title>{data.title}</title>
	<link rel="canonical" href={data.url} />
	<meta name="description" content={data.description} />
	<meta name="generator" content="sveltin" />
	{#if data.keywords && data.keywords.length != 0}
		<meta name="keywords" content={data.keywords.join(', ')} />
	{/if}

	<OpenGraph {data} />

	<TwitterCard {data} />
</svelte:head>
