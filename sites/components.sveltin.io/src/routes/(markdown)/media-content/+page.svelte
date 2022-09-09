<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { website } from '$config/website.js';
	import Content from '$themes/site_theme/components/_Content.svelte';
	import { PageMetaTags, JsonLdWebPage, JsonLdBreadcrumbs } from '@sveltinio/seo/dist';
	import { ToTitle, getFavicon, getPageUrl } from '$lib/utils/strings.js';
	import sortBy from 'lodash-es/sortBy';

	export let data: PageData;
	$: ({ resourceName, items } = data);

	$: mediaContentIndexPage = {
		url: getPageUrl(resourceName, website),
		title: website.name,
		description: 'Here you can find the list of all available essentials.',
		keywords: website.keywords ? website.keywords : '',
		image: getFavicon(website),
		opengraph: {
			type: 'website'
		},
		twitter: {
			type: 'summary'
		}
	};

	const orderedByName = sortBy(items, 'metadata.title');
	$: pathname = $page.url.pathname.replace(/^(.)|(.)$/g, '');
</script>

<PageMetaTags data={mediaContentIndexPage} />
<JsonLdWebPage data={mediaContentIndexPage} />
<JsonLdBreadcrumbs
	baseURL={website.baseURL}
	parent={resourceName}
	currentTitle={mediaContentIndexPage.title}
/>
<Content title={ToTitle(resourceName)}>
	{#if orderedByName.length != 0}
		<ul>
			{#each orderedByName as item}
				<li><a href="/{resourceName}/{item.metadata.slug}">{item.metadata.title}</a></li>
			{/each}
		</ul>
	{:else}
		<h2 class="message warning">
			Nothing to show here! Create some content first and reload the page:
			<span
				><pre><code class="text-default">sveltin new content {resourceName}/getting-started</code
					></pre></span
			>
		</h2>
	{/if}
</Content>
