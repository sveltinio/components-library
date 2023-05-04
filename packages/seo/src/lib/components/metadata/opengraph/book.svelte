<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { formatDateISO } from '@sveltinio/ts-utils/dates';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.book?.author}
	<meta property="book:author" content={data.opengraph.book.author} />
{/if}

{#if data.opengraph?.book?.isbn}
	<meta property="book:isbn" content={data.opengraph.book.isbn} />
{/if}

{#if data.opengraph?.book?.release_date}
	{@const _release_date = data.opengraph.book.release_date}
	<meta property="book:release_date" content={formatDateISO(_release_date).unwrapOr('')} />
{/if}

{#if Array.isArray(data.opengraph?.book?.tags) && data.opengraph?.book?.tags}
	{@const _tags = data.opengraph?.book?.tags}
	{#each _tags as tag}
		<meta property="book:tag" content={tag} />
	{/each}
{/if}
