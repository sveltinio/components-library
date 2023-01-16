<script lang="ts">
	import { onMount } from 'svelte';
	import TocIcon from './TocIcon.svelte';

	export let label: string;
	export let iconOnly: boolean;
	export let labelOnly: boolean;
	export let isOpen: boolean;

	// @media (min-width: 640px)
	let breakpoint = 640;
	$: innerWidth = 0;
	$: isMobile = innerWidth <= breakpoint ? true : false;

	onMount(() => {
		innerWidth = window.innerWidth;
	});
</script>

<svelte:window bind:innerWidth />

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

	{#if !iconOnly && !isMobile}
		<span>{label}</span>
	{/if}
</button>
