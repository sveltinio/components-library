<script lang="ts">
	import { getContext } from 'svelte';
	import { Item } from './index.js';
	import type { ListItem, ToggleListContext } from '../types.js';

	export let items: Array<ListItem>;

	const ctx: ToggleListContext = getContext('SNE_ToggleList');
	let _isOpen = ctx.isOpen;
	let _indicator = ctx.indicator;

	$: isOpen = $_isOpen;
	$: indicator = $_indicator;
</script>

<ul id="items-list" data-visible={isOpen} data-testid="items_list" role="list">
	{#each items as item, id}
		<Item {id} {item} {indicator} />
	{/each}
</ul>
