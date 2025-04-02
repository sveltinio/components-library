<script lang="ts">
	import type { SEOWebPage } from '../../../types.js';
	import { OpenGraphType } from '../../../types.js';
	import Article from './article.svelte';
	import Book from './book.svelte';
	import Business from './business.svelte';
	import MusicAlbum from './music-album.svelte';
	import MusicPlaylist from './music-playlist.svelte';
	import MusicRadioStation from './music-radio-station.svelte';
	import MusicSong from './music-song.svelte';
	import Product from './product.svelte';
	import Profile from './profile.svelte';
	import VideoEpisode from './video-episode.svelte';
	import VideoMovie from './video-movie.svelte';

	export let data: SEOWebPage;
</script>

{#if data.opengraph && data.opengraph.type}
	<meta property="og:type" content={data.opengraph.type} />
	<meta property="og:url" content={data.url} />
	<meta property="og:title" content={data.title} />
	<meta property="og:description" content={data.description} />
	{#if data.image?.url}
		<meta property="og:image" content={data.image.url} />
		{#if data.image.alt}
			<meta property="og:image:alt" content={data.image.alt} />
		{/if}
	{/if}

	{#if data.opengraph.type == OpenGraphType.Article}
		<Article {data} />
	{:else if data.opengraph.type == OpenGraphType.Profile}
		<Profile {data} />
	{:else if data.opengraph.type == OpenGraphType.Book}
		<Book {data} />
	{:else if data.opengraph.type == OpenGraphType.Business}
		<Business {data} />
	{:else if data.opengraph.type == OpenGraphType.Product}
		<Product {data} />
	{:else if data.opengraph.type == OpenGraphType.MusicSong}
		<MusicSong {data} />
	{:else if data.opengraph.type == OpenGraphType.MusicAlbum}
		<MusicAlbum {data} />
	{:else if data.opengraph.type == OpenGraphType.MusicPlaylist}
		<MusicPlaylist {data} />
	{:else if data.opengraph.type == OpenGraphType.MusicRadioStation}
		<MusicRadioStation {data} />
	{:else if data.opengraph.type == OpenGraphType.VideoMovie || data.opengraph.type == OpenGraphType.VideoTVShow || data.opengraph.type == OpenGraphType.VideoOther}
		<VideoMovie {data} />
	{:else if data.opengraph.type == OpenGraphType.VideoEpisode}
		<VideoEpisode {data} />
	{/if}
{/if}
