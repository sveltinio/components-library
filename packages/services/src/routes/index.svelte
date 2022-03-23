<script lang="ts">
	import { externals, umamiConf } from '../lib/__tests__/__fixtures__/data.test.js';
	import { GoogleFonts, GoogleAnalytics, UmamiAnalytics } from '../lib/index';
	import type { ExternalServices } from '../lib/types.js';
	const externalsData = externals as unknown as ExternalServices;
</script>

<!-- BEGIN OF svelte:head -->
<svelte:head>
	<GoogleFonts fonts={externalsData.googleFonts} />
	<GoogleAnalytics trackingId={externalsData.googleAnalytics.propertyID} />
</svelte:head>
<!-- END OF svelte:head -->

<UmamiAnalytics websiteID={umamiConf.websiteID} srcURL={umamiConf.srcURL} />

<section class="main">
	<hgroup>
		<h1><tt>@sveltinio/services</tt></h1>
		<h2><tt>Demos</tt></h2>

		<section class="container">
			<h3>Inspect the head of the webpage</h3>
		</section>
	</hgroup>
</section>
