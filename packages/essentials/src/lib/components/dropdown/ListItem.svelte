<script lang="ts">
	import type { SvelteKitPrefetch } from '$lib/types.js';
	import { isString } from '@sveltinio/ts-utils/is';

	export let label: string;
	export let href: string | undefined = undefined;
	export let external = false;
	export let prefetch: SvelteKitPrefetch = 'off';

	const prefetchValue = !external ? prefetch : 'off';
	const target = external ? '_blank' : '_self';
</script>

<li class="list__item" role="none" data-testid="dropdown-list-item">
	{#if isString(href)}
		<a
			{href}
			{target}
			data-sveltekit-preload-data={prefetchValue}
			role="menuitem"
			on:click
			on:dblclick
			on:keydown
			on:keyup
			on:mouseenter
			on:mouseleave
			{...$$restProps}
		>
			{label}
		</a>
	{:else}
		<button
			role="menuitem"
			on:click
			on:dblclick
			on:keydown
			on:keyup
			on:mouseenter
			on:mouseleave
			{...$$restProps}
		>
			{label}
		</button>
	{/if}
</li>

<style src="./styles/ListItem.postcss">
</style>
