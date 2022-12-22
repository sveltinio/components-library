<script lang="ts">
	import type { SEOWebPageMetadata } from '../../types.js';

	export let data: SEOWebPageMetadata;

	const keywordsArray: Array<string> = [];

	if (data.keywords) {
		const kws = data.keywords.split(',');
		kws.forEach((kw) => {
			keywordsArray.push(kw.trim());
		});
	}
</script>

<svelte:head>
	<!-- OpenGraph / Facebook -->
	{#if data.opengraph}
		{#if data.opengraph.type}
			<meta property="og:type" content={data.opengraph.type} />
			<meta property="og:url" content={data.url} />
			<meta property="og:title" content={data.title} />
			<meta property="og:description" content={data.description} />
			{#if data.image}
				<meta property="og:image" content={data.image} />
			{/if}

			{#if data.opengraph.type == 'article'}
				{#if data.opengraph.article?.published_at}
					<meta
						property="article:published_at"
						content={data.opengraph.article?.published_at}
					/>
				{/if}
				{#if data.opengraph.article?.modified_at}
					<meta
						property="article:modified_at"
						content={data.opengraph.article?.modified_at}
					/>
				{/if}
				{#if data.opengraph.article?.expiration_time}
					<meta
						property="article:expiration_time"
						content={data.opengraph.article?.expiration_time}
					/>
				{/if}
				{#if data.author}
					<meta property="article:author" content={data.author} />
				{/if}
				{#if data.opengraph.article?.section}
					<meta property="article:section" content={data.opengraph.article?.section} />
				{/if}

				{#if keywordsArray.length != 0}
					{#each keywordsArray as keyword}
						<meta property="article:tag" content={keyword} />
					{/each}
				{/if}
			{/if}
		{/if}
	{/if}
</svelte:head>
