<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { CardAction } from '../../src/lib/index.js';

	export let Component: SvelteComponent;
</script>

<svelte:component this={Component}>
	<CardAction
		slot="cardAction"
		data-testid="btn_slot"
		label="Read More"
		href="/getting-starded"
	/>
</svelte:component>
