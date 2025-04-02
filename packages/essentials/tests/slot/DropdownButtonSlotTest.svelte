<script lang="ts">
	import type { ComponentType, SvelteComponent } from 'svelte';
	import Dropdown from '../../src/lib/components/dropdown/index.js';

	export let Component: ComponentType<SvelteComponent>;
</script>

<svelte:component this={Component}>
	<Dropdown.Button label="Menu" />
</svelte:component>
