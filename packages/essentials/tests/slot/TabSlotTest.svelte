<script lang="ts">
	import { Tab } from '../../src/lib';

	import type { SvelteComponent } from 'svelte';

	export let Component: SvelteComponent;
</script>

<svelte:component this={Component}>
	<Tab id="1" title="Tab 1">Sample content for <strong>Tab 1</strong></Tab>
	<Tab id="2" title="Tab 2">Sample content for <strong>Tab 2</strong></Tab>
	<Tab id="3" title="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</svelte:component>
