<script lang="ts">
	import { assets } from '$app/paths';
	export let src: string;
	export let alt = '';
	export let webp = false;
	export let avif = false;

	export const filename = (pathToFile: string): string => {
		return pathToFile.split('.').slice(0, -1).join('.');
	};

	$: _altText = alt != '' ? alt : filename(src).concat(' image');
</script>

<picture data-testid="picture-id">
	{#if avif}
		<source srcset="{assets}/avif/{filename(src)}.avif" type="image/avif" data-testid="avif" />
	{/if}

	{#if webp}
		<source srcset="{assets}/webp/{filename(src)}.webp" type="image/webp" data-testid="webp" />
	{/if}

	<img
		src="{assets}/{src}"
		alt={_altText}
		title={_altText}
		loading="lazy"
		decoding="async"
		aria-label={_altText}
		data-testid="imgtag"
		{...$$restProps}
	/>
</picture>

<style>
	img {
		width: 100%;
		height: auto;
		aspect-ratio: attr(width) / attr(height);
	}
</style>
