<script lang="ts">
	import Tabs from '../../src/lib/components/tabs/index.js';

	import type { ComponentType, SvelteComponent } from 'svelte';

	export let Component: ComponentType<SvelteComponent>;
</script>

<svelte:component this={Component}>
	<Tabs.Tab id="1" label="Tab 1">Sample content for <strong>Tab 1</strong></Tabs.Tab>
	<Tabs.Tab id="2" label="Tab 2">Sample content for <strong>Tab 2</strong></Tabs.Tab>
	<Tabs.Tab id="3" label="Tab 3">Sample content for <strong>Tab 3</strong></Tabs.Tab>
</svelte:component>
