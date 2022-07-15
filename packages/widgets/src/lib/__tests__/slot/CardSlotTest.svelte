<script lang="ts">
	import { CardContent, CardTitle, CardButton } from '../../components/card';

	import type { SvelteComponent } from 'svelte';

	export let Component: SvelteComponent;
</script>

<svelte:component this={Component}>
	<CardTitle data-testid="title-slot">Card Title</CardTitle>
	<CardContent data-testid="content-slot">Card Content</CardContent>
	<CardButton data-testid="button-slot" label="Read More »" type="secondary" fullWidth />
</svelte:component>
