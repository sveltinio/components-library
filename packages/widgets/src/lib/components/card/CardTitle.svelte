<script lang="ts">
	import { getContext } from 'svelte';
	import type { CardContext } from './types.js';

	const ctx: CardContext = getContext('SveltinCard');

	let resource = ctx.resource;
	let slug = ctx.slug;
</script>

<h2>
	<a href={`/${resource}/${slug}`} data-sveltekit-prefetch data-testid="card-title"><slot /></a>
</h2>

<style>
	h2 {
		color: #475569;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2rem;
		margin: 2rem 1.75rem 0 1.75rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	@media screen and (min-width: 1024px) {
		h2 {
			font-size: 1.5rem;
			line-height: 2.25rem;
		}
	}
</style>
