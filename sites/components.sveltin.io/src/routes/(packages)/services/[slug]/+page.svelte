<script lang="ts">
	import type { PageData } from './$types';
	import { website } from '$config/website.js';
	import PrevNextButtons from '$themes/site_theme/partials/PrevNextButtons.svelte';
	import { JsonLdWebPage, PageMetaTags, JsonLdBreadcrumbs } from '@sveltinio/seo';
	import { CamelToKebabCase, getCoverImagePath, getSlugPageUrl } from '$lib/utils/strings.js';
	import Content from '$themes/site_theme/components/_Content.svelte';

	export let data: PageData;
	$: ({ actual, before, after, mdsvexComponent } = data);

	$: current = actual;
	$: previous = before;
	$: next = after;

	$: slugPageData = {
		url: getSlugPageUrl(current, website),
		title: current.metadata.title,
		description: current.metadata.headline,
		keywords: website.keywords ? website.keywords : '',
		author: current.metadata.author,
		image: getCoverImagePath(current, website),
		opengraph: {
			type: 'article',
			article: {
				published_at: current.metadata.created_at,
				modified_at: current.metadata.updated_at
			}
		},
		twitter: {
			type: 'summary'
		}
	};
</script>

<PageMetaTags data={slugPageData} />
<JsonLdWebPage data={slugPageData} />
<JsonLdBreadcrumbs
	baseURL={website.baseURL}
	parent={current.resource}
	currentTitle={slugPageData.title}
/>
<Content title="@sveltinio/{CamelToKebabCase(current.resource)}">
	<svelte:component this={mdsvexComponent} />
	<PrevNextButtons
		{previous}
		{next}
		withBorderTop
		--border-top-width="1px"
		--border-top-color="rgb(241 245 249)"
	/>
</Content>
