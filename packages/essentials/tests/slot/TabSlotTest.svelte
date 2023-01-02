<script lang="ts">
	import { Tab } from '../../src/lib';

	import type { SvelteComponent } from 'svelte';

	export let Component: SvelteComponent;
</script>

<svelte:component this={Component}>
	<Tab id="1" label="Tab 1">Sample content for <strong>Tab 1</strong></Tab>
	<Tab id="2" label="Tab 2">Sample content for <strong>Tab 2</strong></Tab>
	<Tab id="3" label="Tab 3">Sample content for <strong>Tab 3</strong></Tab>
</svelte:component>
