<script lang="ts">
	import { menu, website } from '../lib/__tests__/__fixtures__/data.test.js';

	import {
		SiteMetaTags,
		JsonLdWebSite,
		JsonLdWebPage,
		JsonLdSiteNavigationElements,
		JsonLdBreadcrumbs
	} from '../lib/index';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->
<SiteMetaTags websiteData={website} />
<JsonLdWebSite websiteData={website} />
<JsonLdWebPage websiteData={website} />
<JsonLdSiteNavigationElements websiteData={website} menuData={menu} />
<JsonLdBreadcrumbs websiteData={website} menuData={menu} />
<!-- END OF USAGE NOTE -->

<section class="main">
	<h1><tt>@sveltinio/seo</tt></h1>
	<h2><tt>Demos</tt></h2>
	<section class="container">
		<h3>Inspect the head of the webpage</h3>
	</section>
</section>
