<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';

	export let data: SEOWebPage;
</script>

{#if data.opengraph?.playlist?.song}
	<meta property="music:song" content={data.opengraph.playlist.song.url} />
{/if}

{#if data.opengraph?.playlist?.disc}
	{@const _disc = data.opengraph.playlist.disc.toString()}
	<meta property="music:song:disc" content={_disc} />
{/if}

{#if data.opengraph?.playlist?.track}
	{@const _track = data.opengraph.playlist.track.toString()}
	<meta property="music:song:track" content={_track} />
{/if}

{#if data.opengraph?.playlist?.creator}
	<meta property="music:creator" content={data.opengraph.playlist.creator.url} />
{/if}
