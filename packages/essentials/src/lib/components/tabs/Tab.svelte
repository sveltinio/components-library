<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { TabsContext } from './types.js';

	export let id: string;
	export let label: string;
	export let icon: any = undefined;

	const ctx: TabsContext = getContext('SNE_Tabs');
	let value = ctx.activeTab;

	ctx.registerTab(id, label, icon);

	$: activeTab = $value;

	onDestroy(() => {
		ctx.unregisterTab(id);
	});
</script>

{#if activeTab === id}
	<slot />
{/if}
