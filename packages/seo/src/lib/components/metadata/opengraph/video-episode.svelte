<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { formatDate } from '../../../utils.js';
	import VideoMovie from './video-movie.svelte';

	export let data: SEOWebPage;
</script>

{#if Array.isArray(data.opengraph?.episode?.actor) && data.opengraph?.episode?.actor}
	{#each data.opengraph?.episode?.actor as actor}
		<meta property="video:actor" content={actor.url} />
	{/each}
{/if}

{#if data.opengraph?.episode?.actorRole}
	<meta property="video:actor:role" content={data.opengraph.episode.actorRole} />
{/if}

{#if Array.isArray(data.opengraph?.episode?.director) && data.opengraph?.episode?.director}
	{#each data.opengraph?.episode?.director as director}
		<meta property="video:director" content={director.url} />
	{/each}
{/if}

{#if Array.isArray(data.opengraph?.episode?.writer) && data.opengraph?.episode?.writer}
	{#each data.opengraph?.episode?.writer as writer}
		<meta property="video:writer" content={writer.url} />
	{/each}
{/if}

{#if data.opengraph?.episode?.duration}
	{@const _duration = data.opengraph.episode.duration.toString()}
	<meta property="video:duration" content={_duration} />
{/if}

{#if data.opengraph?.episode?.release_date}
	{@const _date = data.opengraph?.episode?.release_date}
	<meta property="video:release_date" content={formatDate(_date)} />
{/if}

{#if Array.isArray(data.opengraph?.episode?.tags) && data.opengraph?.episode?.tags}
	{@const _tags = data.opengraph?.episode?.tags}
	{#each _tags as tag}
		<meta property="video:tag" content={tag} />
	{/each}
{/if}

{#if data.opengraph?.episode?.series}
	<VideoMovie {data} />
{/if}
