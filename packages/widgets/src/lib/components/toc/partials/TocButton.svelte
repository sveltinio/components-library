<script lang="ts">
	import type { TocContext } from '../types';
	import { onMount } from 'svelte';
	import { getContext } from 'svelte';
	import { Button } from '@sveltinio/essentials/button';
	import { TocIcon } from './index.js';

	const ctx: TocContext = getContext('SNE_Toc');
	let value = ctx.value;

	export let label: string;
	export let iconOnly: boolean;
	export let labelOnly: boolean;

	// @media (min-width: 640px)
	let breakpoint = 640;

	$: isOpen = $value;
	$: innerWidth = 0;
	$: isMobile = innerWidth <= breakpoint ? true : false;

	onMount(() => {
		innerWidth = window.innerWidth;
	});
</script>

<svelte:window bind:innerWidth />

<Button
	class="btn"
	aria-label={label}
	aria-haspopup="true"
	aria-controls="toc-list"
	aria-expanded={isOpen}
	data-testid="toc_btn"
>
	{#if !labelOnly}
		<slot name="icon">
			<TocIcon />
		</slot>
	{/if}

	{#if !iconOnly && !isMobile}
		<span>{label}</span>
	{/if}
</Button>
