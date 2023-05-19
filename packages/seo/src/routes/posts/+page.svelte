<script lang="ts">
	import {
		JsonLdWebPage,
		PageMetaTags,
		JsonLdBreadcrumbs,
		JsonLdSiteNavigationElements
	} from '$lib/index.js';
	import { page } from '$app/stores';

	import { website, sampleArticle, menu } from '../../data/sample.js';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->
<PageMetaTags data={sampleArticle} />
<JsonLdWebPage data={sampleArticle} />
<JsonLdBreadcrumbs url={$page.url.href} />
<JsonLdSiteNavigationElements baseURL={website.baseURL} data={menu} />
<!-- END OF USAGE NOTE -->

<div class="header">
	<h1>@sveltinio/seo</h1>
	<h2>Sample Article</h2>
	<h3>Inspect the head of the webpage</h3>
</div>
