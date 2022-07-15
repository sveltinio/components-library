<script lang="ts">
	import { setContext } from 'svelte';
	import type { CardContext } from './types';
	export let resource: string;
	export let slug: string;

	const ctx: CardContext = {
		resource: resource,
		slug: slug
	};

	setContext('SveltinCard', ctx);
</script>

<div class="card" id={`card-${slug}`} data-testid="card-container">
	<slot />
</div>

<style>
	.card {
		position: relative;
		max-width: 24rem;
		overflow: hidden;
		border-radius: 0.75rem;
		border-style: solid;
		border-width: 1px;
		border-color: #e2e8f0;
		box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
	}
</style>
