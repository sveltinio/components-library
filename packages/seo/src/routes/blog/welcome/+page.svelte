<script lang="ts">
	import { JsonLdBreadcrumbs } from '$lib/index.js';
	import { page } from '$app/stores';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->

<JsonLdBreadcrumbs url={$page.url.href} />
<!-- END OF USAGE NOTE -->

<section class="main">
	<h1><tt>@sveltinio/seo</tt></h1>
	<h2><tt>JsonLdBreadcrumbs</tt></h2>
	<section class="container">
		<h3>Inspect the head of the webpage</h3>
	</section>
</section>
