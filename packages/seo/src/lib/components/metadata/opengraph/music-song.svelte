<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.song?.url}
	<meta property="og:audio" content={data.opengraph.song.url} />
{/if}

{#if data.opengraph?.song?.duration}
	{@const _duration = data.opengraph.song.duration.toString()}
	<meta property="music:duration" content={_duration} />
{/if}

{#if data.opengraph?.song?.album}
	{#each data.opengraph?.song?.album as album}
		<meta property="music:album" content={album.url} />
	{/each}
{/if}

{#if data.opengraph?.song?.disc}
	{@const _disc = data.opengraph.song.disc.toString()}
	<meta property="music:album:disc" content={_disc} />
{/if}

{#if data.opengraph?.song?.track}
	{@const _track = data.opengraph.song.track.toString()}
	<meta property="music:album:track" content={_track} />
{/if}

{#if data.opengraph?.song?.musician}
	{#each data.opengraph?.song?.musician as musician}
		<meta property="music:musician" content={musician.url} />
	{/each}
{/if}
