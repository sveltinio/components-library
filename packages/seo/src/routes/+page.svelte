<script lang="ts">
	import {
		JsonLdSiteNavigationElements,
		JsonLdWebPage,
		JsonLdWebSite,
		PageMetaTags
	} from '$lib/index.js';

	import { homePage, website, menu } from '../data/sample.js';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->
<PageMetaTags data={homePage} />
<JsonLdWebSite websiteData={website} />
<JsonLdSiteNavigationElements websiteData={website} menuData={menu} />
<JsonLdWebPage data={homePage} />
<!-- END OF USAGE NOTE -->

<section class="main">
	<h1><tt>@sveltinio/seo</tt></h1>
	<section class="container">
		<h3>Inspect the head of the webpage</h3>
	</section>
</section>
