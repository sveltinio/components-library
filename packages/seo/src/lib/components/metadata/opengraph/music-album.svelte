<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { formatDate } from '../../../utils.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.album?.url}
	<meta property="og:audio" content={data.opengraph.album.url} />
{/if}

{#if data.opengraph?.album?.release_date}
	{@const _date = data.opengraph?.album?.release_date}
	<meta property="music:release_date" content={formatDate(_date)} />
{/if}

{#if Array.isArray(data.opengraph?.album?.musicians) && data.opengraph?.album?.musicians}
	{#each data.opengraph?.album?.musicians as musician}
		<meta property="music:musician" content={musician.url} />
	{/each}
{/if}

{#if Array.isArray(data.opengraph?.album?.songs) && data.opengraph?.album?.songs}
	{#each data.opengraph?.album?.songs as song}
		<meta property="music:song" content={song.url} />
	{/each}
{/if}

{#if data.opengraph?.album?.disc}
	{@const _disc = data.opengraph.album.disc.toString()}
	<meta property="music:album:disc" content={_disc} />
{/if}

{#if data.opengraph?.album?.track}
	{@const _track = data.opengraph.album.track.toString()}
	<meta property="music:album:track" content={_track} />
{/if}
