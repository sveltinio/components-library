<script lang="ts">
	import { JsonLdWebPage, PageMetaTags } from '../../lib/index';

	import { sampleArticle } from '../../lib/__tests__/__fixtures__/data.test.js';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head
<JsonLdBreadcrumbs websiteData={website} menuData={menu} />
-->
<PageMetaTags data={sampleArticle} />
<JsonLdWebPage data={sampleArticle} />
<!-- END OF USAGE NOTE -->

<section class="main">
	<h1><tt>@sveltinio/seo</tt></h1>
	<h2><tt>PageMetaTags - Article</tt></h2>
	<section class="container">
		<h3>Inspect the head of the webpage</h3>
	</section>
</section>
