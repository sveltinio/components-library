<script lang="ts">
	import type { ListItem } from './ToggleList.d.ts';
	import type { SvelteKitPrefetch } from '$lib/types.js';
	import { activeAction } from '$lib/actions.js';

	export let id: number;
	export let item: ListItem;
	export let iconSize = '20px';
	export let prefetch: SvelteKitPrefetch = 'off';
	export let indicator: string;

	const prefetchValue = !item.external ? prefetch : 'off';
	const target = item.external ? '_blank' : '_self';
</script>

<li class="list__item" data-testid="list_item_{id}">
	<a
		href={item.url}
		{target}
		data-indicator={indicator}
		data-sveltekit-preload-data={prefetchValue}
		role="menuitem"
		data-testid="item_link_{id}"
		use:activeAction={{ enabled: true, className: 'is-active' }}
	>
		{#if item.icon}
			<svelte:component this={item.icon} size={iconSize} />
		{/if}
		{item.label}</a
	>
</li>

<style src="./styles/Item.postcss">
</style>
