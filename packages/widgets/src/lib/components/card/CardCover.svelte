<script lang="ts">
	import { getContext } from 'svelte';
	import type { CardContext } from './types';

	export let altText: string;
	export let src: string;

	const ctx: CardContext = getContext('SveltinCard');

	let resource = ctx.resource;
	let slug = ctx.slug;
</script>

<div class="card-header">
	<img
		src={`/resources/${resource}/${slug}/${src}`}
		alt={`cover for ${altText}`}
		title={`cover for ${altText}`}
	/>
</div>

<style>
	.card-header {
		width: 100%;
		height: auto;
	}

	.card-header img {
		object-fit: cover;
		width: 100%;
	}
</style>
