<script lang="ts">
	import type { TocEntry } from './types.js';
	import TocItem from './TocItem.svelte';

	export let data: Array<TocEntry>;
	export let isOpen = false;
	export let full = false;
	export let ordered: boolean;
	export let prefixChar: string;

	let listType = ordered ? 'ol' : 'ul';
	let prefix = ordered ? '' : prefixChar;
</script>

<svelte:element
	this={listType}
	class="list"
	class:visible={isOpen}
	class:hidden={!isOpen}
	class:list--ordered={ordered}
	data-testid="toc-list"
>
	{#each data as item}
		{#if full}
			{#if item.children}
				<svelte:self
					data={item.children}
					bind:ordered
					bind:isOpen
					bind:full
					prefixChar={prefix}
				/>
			{:else}
				<TocItem id={item.id} value={item.value} prefixChar={prefix} />
			{/if}
		{:else}
			<TocItem id={item.id} value={item.value} prefixChar={prefix} />
		{/if}
	{/each}
</svelte:element>
