<script lang="ts">
	import { getContext } from 'svelte';
	import type { TabsContext } from './Tabs.d.ts';

	export let variant: 'default' | 'border';

	const ctx: TabsContext = getContext('SNE_Tabs');
	let _activeTab = ctx.activeTab;

	$: activeTab = $_activeTab;
</script>

<div
	id="content-{activeTab}"
	tabindex="0"
	class="tab__content"
	data-variant={variant}
	role="tabpanel"
	aria-labelledby={activeTab}
	aria-current="page"
	data-testid="content-{activeTab}"
>
	<slot />
</div>

<style src="./styles/TabContent.postcss">
</style>
