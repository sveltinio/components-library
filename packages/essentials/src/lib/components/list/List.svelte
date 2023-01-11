<script lang="ts">
	import Item from './Item.svelte';
	import type { ListItem } from './types.js';

	export let isOpen: boolean;
	export let items: Array<ListItem>;
</script>

<ul id="items-list" class="list" class:hide={!isOpen} data-testid="items_list">
	{#each items as item, id}
		<Item {id} {item} />
	{/each}
</ul>
