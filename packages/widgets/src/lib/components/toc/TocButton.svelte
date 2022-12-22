<script lang="ts">
	import TocIcon from './TocIcon.svelte';

	export let label: string;
	export let iconOnly: boolean;
	export let labelOnly: boolean;
	export let isOpen: boolean;

	const toggleVisibility = () => (isOpen = !isOpen);
</script>

<button
	class="btn"
	on:click|preventDefault={toggleVisibility}
	alt={label}
	aria-label={label}
	aria-expanded={isOpen}
	data-testid="toc-btn"
>
	{#if !labelOnly}
		<slot name="icon">
			<TocIcon />
		</slot>
	{/if}
	{#if !iconOnly}
		<span>{label}</span>
	{/if}
</button>
