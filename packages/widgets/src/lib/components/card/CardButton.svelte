<script lang="ts">
	import { getContext } from 'svelte';
	import Button from '../buttons/Button.svelte';
	import type { CardContext } from './types.js';

	const ctx: CardContext = getContext('SveltinCard');

	let resource = ctx.resource;
	let slug = ctx.slug;

	export let label: string;
	export let type = 'primary';
	export let size = 'sm';
	export let outlined = false;
	export let fullWidth = false;

	let href = '';
	if (resource && slug) {
		href = `/${resource}/${slug}`;
	}
</script>

<div class="card-button" data-testid="card-button-link">
	<Button {label} {type} {size} {outlined} {fullWidth} {href} />
</div>

<style>
	.card-button {
		width: 100%;
		height: auto;
		padding: 0.5rem 1.75rem 1.25rem 1.75rem;
		text-align: right;
	}
</style>
