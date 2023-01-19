<script lang="ts">
	import type { TocEntry } from './types.js';
	import TocItem from './TocItem.svelte';

	export let data: Array<TocEntry>;
	export let isOpen = false;
	export let full = false;
	export let ordered: boolean;
	export let prefixChar: string;
	// mainly used to assign an unique id to recursive lists
	export let id = '';

	let listType = ordered ? 'ol' : 'ul';
</script>

<svelte:element
	this={listType}
	id={id != '' ? `toc-list-${id}` : 'toc-list'}
	class="list"
	class:visible={isOpen}
	class:hidden={!isOpen}
	class:list--ordered={ordered}
	role="menu"
	data-testid="toc-list"
>
	{#each data as item, idx (item.id)}
		<TocItem id={item.id} value={item.value} {prefixChar} />
		{#if full && item.children}
			<svelte:self
				data={item.children}
				bind:ordered
				bind:isOpen
				bind:full
				id="{idx}-nested"
				{prefixChar}
			/>
		{/if}
	{/each}
</svelte:element>
