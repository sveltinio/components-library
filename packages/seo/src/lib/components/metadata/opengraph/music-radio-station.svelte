<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.radioStation?.creator}
	<meta property="music:creator" content={data.opengraph.radioStation.creator.url} />
{/if}
