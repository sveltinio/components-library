<script lang="ts">
	import { toISODateString } from '$lib/utils.js';
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if Array.isArray(data.opengraph?.movie?.actor) && data.opengraph?.movie?.actor}
	{#each data.opengraph?.movie?.actor as actor (actor)}
		<meta property="video:actor" content={actor.url} />
	{/each}
{/if}

{#if data.opengraph?.movie?.actorRole}
	<meta property="video:actor:role" content={data.opengraph.movie.actorRole} />
{/if}

{#if Array.isArray(data.opengraph?.movie?.director) && data.opengraph?.movie?.director}
	{#each data.opengraph?.movie?.director as director (director)}
		<meta property="video:director" content={director.url} />
	{/each}
{/if}

{#if Array.isArray(data.opengraph?.movie?.writer) && data.opengraph?.movie?.writer}
	{#each data.opengraph?.movie?.writer as writer (writer)}
		<meta property="video:writer" content={writer.url} />
	{/each}
{/if}

{#if data.opengraph?.movie?.duration}
	{@const _duration = data.opengraph.movie.duration.toString()}
	<meta property="video:duration" content={_duration} />
{/if}

{#if data.opengraph?.movie?.release_date}
	{@const _date = data.opengraph?.movie?.release_date}
	<meta property="video:release_date" content={toISODateString(_date)} />
{/if}

{#if Array.isArray(data.opengraph?.movie?.tags) && data.opengraph?.movie?.tags}
	{@const _tags = data.opengraph?.movie?.tags}
	{#each _tags as tag (tag)}
		<meta property="video:tag" content={tag} />
	{/each}
{/if}
