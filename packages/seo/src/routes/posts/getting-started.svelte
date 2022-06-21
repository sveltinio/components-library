<script lang="ts">
	import JsonLdBreadcrumbs from '$lib/components/schemaorg/JsonLdBreadcrumbs.svelte';
	import { JsonLdWebPage, PageMetaTags } from '$lib';

	import { website, sampleArticle } from '$lib/__tests__/__fixtures__/data.test.js';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->
<PageMetaTags data={sampleArticle} />
<JsonLdWebPage data={sampleArticle} />
<JsonLdBreadcrumbs baseURL={website.baseURL} parent="posts" currentTitle="Getting Started" />
<!-- END OF USAGE NOTE -->

<section class="main">
	<h1><tt>@sveltinio/seo</tt></h1>
	<h2><tt>Sample Article</tt></h2>
	<section class="container">
		<h3>Inspect the head of the webpage</h3>
	</section>
</section>
