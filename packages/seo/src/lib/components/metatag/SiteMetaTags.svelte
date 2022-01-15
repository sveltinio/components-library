<script lang="ts">
	import type { WebSite } from '../../types';

	export let websiteData: WebSite;
</script>

<svelte:head>
	<title>{websiteData.title}</title>
	<link rel="canonical" href={websiteData.baseURL} />
	<meta name="description" content={websiteData.seoDescription} />
	<meta name="generator" content="sveltin" />
	{#if websiteData.keywords != ''}
		<meta name="keywords" content={websiteData.keywords} />
	{/if}
	<!-- Robots-->
	<meta
		name="robots"
		content="index,follow,max-snippet:-1,max-image-preview:large,noarchive,max-video-preview:-1"
	/>
	<meta
		name="googlebot"
		content="index,follow,max-snippet:-1,max-image-preview:large,noarchive,max-video-preview:-1"
	/>
	<!-- Google / Search Engine Tags -->
	<meta itemprop="name" content={websiteData.name} />
	<meta itemprop="description" content={websiteData.seoDescription} />
	<meta itemprop="image" content="{websiteData.baseURL}/{websiteData.logo}" />
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content={websiteData.baseURL} />
	<meta property="og:title" content={websiteData.title} />
	<meta property="og:description" content={websiteData.seoDescription} />
	<meta property="og:image" content="{websiteData.baseURL}/{websiteData.logo}" />
	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={websiteData.baseURL} />
	<meta property="twitter:title" content={websiteData.title} />
	<meta property="twitter:description" content={websiteData.seoDescription} />
	<meta property="twitter:image" content="{websiteData.baseURL}/{websiteData.logo}" />
</svelte:head>
