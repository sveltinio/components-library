<script lang="ts">
	import { getContext } from 'svelte';
	import { Item } from './index.js';
	import type { ListItem, ToggleListContext } from '../types.js';

	const ctx: ToggleListContext = getContext('SNE_ToggleList');
	let value = ctx.value;

	export let items: Array<ListItem>;
	$: isOpen = $value;
</script>

<ul id="items-list" class="list" class:hide={!isOpen} data-testid="items_list">
	{#each items as item, id}
		<Item {id} {item} />
	{/each}
</ul>
