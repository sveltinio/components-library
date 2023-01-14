<script lang="ts">
	import TocIcon from './TocIcon.svelte';

	export let label: string;
	export let iconOnly: boolean;
	export let labelOnly: boolean;
	export let isOpen: boolean;
</script>

<button
	class="btn"
	aria-label={label}
	aria-haspopup="true"
	aria-controls="toc-list"
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
