<script lang="ts">
	import type { ListItem, ToggleListContext } from './ToggleList.d.ts';
	import { getContext } from 'svelte';
	import Item from './Item.svelte';

	export let items: Array<ListItem>;

	const ctx: ToggleListContext = getContext('SNE_ToggleList');
	let _isOpen = ctx.isOpen;
	let _indicator = ctx.indicator;

	$: isOpen = $_isOpen;
	$: indicator = $_indicator;
</script>

<ul data-visible={isOpen} data-indicator={indicator} data-testid="items_list" role="list">
	{#each items as item, id}
		<Item {id} {item} {indicator} />
	{/each}
</ul>

<style src="./styles/List.postcss">
</style>
