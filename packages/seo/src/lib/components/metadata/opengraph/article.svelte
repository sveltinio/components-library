<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { formatDate } from '../../../utils.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.article?.published_at}
	{@const _published_at = data.opengraph.article.published_at}
	<meta property="article:published_at" content={formatDate(_published_at)} />
{/if}

{#if data.opengraph?.article?.modified_at}
	{@const _modified_at = data.opengraph.article.modified_at}
	<meta property="article:modified_at" content={formatDate(_modified_at)} />
{/if}

{#if data.opengraph?.article?.expiration_time}
	{@const _expiration_time = data.opengraph.article.expiration_time}
	<meta property="article:expiration_time" content={formatDate(_expiration_time)} />
{/if}

{#if data.author}
	<meta property="article:author" content={data.author} />
{/if}

{#if data.opengraph?.article?.section}
	<meta property="article:section" content={data.opengraph.article.section} />
{/if}

{#if Array.isArray(data.opengraph?.article?.tags) && data.opengraph?.article?.tags}
	{@const _tags = data.opengraph?.article?.tags}
	{#each _tags as tag}
		<meta property="article:tag" content={tag} />
	{/each}
{/if}
