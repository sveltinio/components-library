<script lang="ts">
	import { JsonLdBreadcrumbs } from '$lib/index.js';
	import { page } from '$app/stores';
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->

<JsonLdBreadcrumbs url={$page.url.href} />
<!-- END OF USAGE NOTE -->

<div class="header">
	<h1>@sveltinio/seo</h1>
	<h2>JsonLdBreadcrumbs</h2>
	<h3>Inspect the head of the webpage</h3>
</div>
