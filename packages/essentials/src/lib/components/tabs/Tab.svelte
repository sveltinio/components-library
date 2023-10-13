<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { TabsContext } from './Tabs.d.ts';

	export let id: string;
	export let label: string;
	export let icon: any = undefined;

	const ctx: TabsContext = getContext('SNE_Tabs');
	let _activeTab = ctx.activeTab;

	ctx.registerTab(id, label, icon);

	$: activeTab = $_activeTab;

	onDestroy(() => {
		ctx.unregisterTab(id);
	});
</script>

{#if activeTab === id}
	<slot />
{/if}
