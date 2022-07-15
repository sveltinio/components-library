<script lang="ts">
	import { assets } from '$app/paths';
	export let src: string;
	export let altText: string;
	export let webp = false;
	export let avif = false;
	export let width = '100%';
	export let height = '100%';

	export const filename = (pathToFile: string) => {
		return pathToFile.split('.').slice(0, -1).join('.');
	};
</script>

<picture data-testid="picture-id">
	{#if avif}
		<source data-testid="avif" type="image/avif" srcset="{assets}/avif/{filename(src)}.avif" />
	{/if}

	{#if webp}
		<source data-testid="webp" type="image/webp" srcset="{assets}/webp/{filename(src)}.webp" />
	{/if}

	<img
		data-testid="imgtag"
		src="{assets}/{src}"
		loading="lazy"
		decoding="async"
		alt={altText}
		title={altText}
		aria-label={altText}
		class={$$props.class}
		style={$$props.style}
		{width}
		{height}
	/>
</picture>
