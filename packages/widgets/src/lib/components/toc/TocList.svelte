<script lang="ts">
	import type { TocEntry, TocContext } from './types.js';
	import { getContext } from 'svelte';
	import TocItem from './TocItem.svelte';

	export let data: Array<TocEntry>;
	export let full = false;
	export let ordered: boolean;
	export let prefixChar: string;
	// mainly used to assign an unique id to recursive lists
	export let id = '';

	const ctx: TocContext = getContext('SNE_Toc');
	let value = ctx.value;

	let listType = ordered ? 'ol' : 'ul';

	$: isOpen = $value;
</script>

<svelte:element
	this={listType}
	id={id != '' ? `toc-list-${id}` : 'toc-list'}
	class="list"
	class:visible={isOpen}
	class:hidden={!isOpen}
	class:list--ordered={ordered}
	role="menu"
	data-testid="toc_list"
>
	{#each data as item, idx (item.id)}
		<TocItem id={item.id} value={item.value} {prefixChar} />
		{#if full && item.children}
			<svelte:self
				data={item.children}
				bind:ordered
				bind:full
				id="{idx}-nested"
				{prefixChar}
			/>
		{/if}
	{/each}
</svelte:element>
