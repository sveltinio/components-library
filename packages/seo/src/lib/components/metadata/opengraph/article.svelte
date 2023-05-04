<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { formatDateISO } from '@sveltinio/ts-utils/dates';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.article?.published_at}
	{@const _published_at = data.opengraph.article.published_at}
	<meta property="article:published_at" content={formatDateISO(_published_at).unwrapOr('')} />
{/if}

{#if data.opengraph?.article?.modified_at}
	{@const _modified_at = data.opengraph.article.modified_at}
	<meta property="article:modified_at" content={formatDateISO(_modified_at).unwrapOr('')} />
{/if}

{#if data.opengraph?.article?.expiration_time}
	{@const _expiration_time = data.opengraph.article.expiration_time}
	<meta
		property="article:expiration_time"
		content={formatDateISO(_expiration_time).unwrapOr('')}
	/>
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
