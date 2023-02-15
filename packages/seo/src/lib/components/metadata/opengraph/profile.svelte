<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.profile?.first_name}
	<meta property="profile:first_name" content={data.opengraph.profile.first_name} />
{/if}

{#if data.opengraph?.profile?.last_name}
	<meta property="profile:last_name" content={data.opengraph.profile.last_name} />
{/if}

{#if data.opengraph?.profile?.username}
	<meta property="profile:username" content={data.opengraph.profile.username} />
{/if}

{#if data.opengraph?.profile?.gender}
	<meta property="profile:gender" content={data.opengraph.profile.gender} />
{/if}
