<script lang="ts">
	import type { IWebPageMetadata } from '../../types';
	import { TwitterCardType } from '../../types';

	export let data: IWebPageMetadata;

	const keywordsArray: Array<string> = [];

	if (data.keywords) {
		const kws = data.keywords.split(',');
		kws.forEach((kw) => {
			keywordsArray.push(kw.trim());
		});
	}
</script>

<svelte:head>
	<title>{data.title}</title>
	<link rel="canonical" href={data.url} />
	<meta name="description" content={data.description} />
	<meta name="generator" content="sveltin" />
	{#if data.keywords != ''}
		<meta name="keywords" content={data.keywords} />
	{/if}

	<!-- OpenGraph / Facebook -->
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
				<meta property="article:published_at" content={data.opengraph.article?.published_at} />
			{/if}
			{#if data.opengraph.article?.modified_at}
				<meta property="article:modified_at" content={data.opengraph.article?.modified_at} />
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

	<!-- TwitterCard -->
	{#if data.twitter.type}
		<meta property="twitter:card" content={data.twitter.type} />
		<meta property="twitter:title" content={data.title} />
		{#if data.twitter.site}
			<meta property="twitter:site" content={data.twitter.site} />
		{/if}
		{#if data.description}
			<meta property="twitter:description" content={data.description} />
		{/if}
		{#if data.image}
			<meta property="twitter:image" content={data.image} />
		{/if}
		{#if data.imageAlt}
			<meta property="twitter:image:alt" content={data.imageAlt} />
		{/if}

		{#if data.twitter.type == TwitterCardType.Player}
			<meta property="twitter:player" content={data.twitter.player.url} />
			<meta property="twitter:player:width" content={data.twitter.player.width} />
			<meta property="twitter:player:height" content={data.twitter.player.height} />
		{/if}

		{#if data.twitter.type == TwitterCardType.App}
			{#if data.twitter.app.country}
				<meta property="twitter:app:country" content={data.twitter.app.country} />
			{/if}
			<meta property="twitter:app:id:iphone" content={data.twitter.app.idIPhone} />
			<meta property="twitter:app:id:ipad" content={data.twitter.app.idIPad} />
			<meta property="twitter:app:id:googleplay" content={data.twitter.app.idGooglePlay} />
		{/if}
	{/if}
</svelte:head>
