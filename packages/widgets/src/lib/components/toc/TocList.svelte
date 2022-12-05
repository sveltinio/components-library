<script lang="ts">
	import type { TocEntry } from '$lib/types.js';
	import TocItem from './TocItem.svelte';

	export let data: Array<TocEntry>;
	export let isOpen = false;
	export let full = false;
	export let ordered: boolean;
	export let prefixChar: string;
	export let theme: string;

	let listType = ordered ? 'ol' : 'ul';
	let prefix = ordered ? '' : prefixChar;
</script>

<svelte:element
	this={listType}
	class="toc-list"
	class:visible={isOpen}
	class:hidden={!isOpen}
	class:toc-list-style-ordered={ordered}
	data-testid="toc_list"
>
	{#each data as item}
		{#if full}
			{#if item.children}
				<svelte:self
					data={item.children}
					bind:ordered
					bind:theme
					bind:isOpen
					bind:full
					prefixChar={prefix}
				/>
			{:else}
				<TocItem id={item.id} value={item.value} prefixChar={prefix} bind:theme />
			{/if}
		{:else}
			<TocItem id={item.id} value={item.value} prefixChar={prefix} bind:theme />
		{/if}
	{/each}
</svelte:element>
