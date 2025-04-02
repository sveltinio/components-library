<script lang="ts">
	import { toISODateString } from '$lib/utils.js';
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#each [['published_time', data.opengraph?.article?.published_time], ['modified_time', data.opengraph?.article?.modified_time], ['expiration_time', data.opengraph?.article?.expiration_time]] as [key, value] (key)}
	{#if value}
		<meta property={`article:${key}`} content={toISODateString(value)} />
	{/if}
{/each}

{#if data.author}
	<meta property="article:author" content={data.author} />
{/if}

{#if data.opengraph?.article?.section}
	<meta property="article:section" content={data.opengraph.article.section} />
{/if}

{#if Array.isArray(data.opengraph?.article?.tags) && data.opengraph?.article?.tags}
	{@const _tags = data.opengraph?.article?.tags}
	{#each _tags as tag (tag)}
		<meta property="article:tag" content={tag} />
	{/each}
{/if}
