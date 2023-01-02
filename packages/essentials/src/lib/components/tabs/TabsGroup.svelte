<script lang="ts">
	import { getContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { TabItem, TabsContext } from './types.js';

	export let activeTab: string;
	export let size: string;
	export let justify: string;
	export let bordered: boolean;
	export let tabs: Array<TabItem>;

	const ctx: TabsContext = getContext('SNE_Tabs');

	let activeTabStore = writable(activeTab);

	$: activeTab = $activeTabStore;
	$: activeClass = (id: string): boolean => activeTab == id;
</script>

<ul class="tabs__group tabs__group--justify-{justify}" data-testid="tabs-group">
	{#each tabs as tab}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<li
			class="tab tab--{size}"
			class:tab--bordered={bordered}
			class:is-active={!bordered && activeClass(tab.id)}
			class:is-active--bordered={bordered && activeClass(tab.id)}
			on:click={() => {
				ctx.setActiveTab(tab.id);
				activeTab = tab.id;
			}}
			data-testid="tab-{tab.id}"
		>
			{#if tab.icon}
				<svelte:component this={tab.icon} />
			{/if}

			{tab.label}
		</li>
	{/each}
</ul>
