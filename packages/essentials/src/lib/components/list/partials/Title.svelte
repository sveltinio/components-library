<script lang="ts">
	import type { ToggleListContext } from '../types.js';
	import { getContext } from 'svelte';

	export let text: string;
	export let full: boolean;

	const ctx: ToggleListContext = getContext('SNE_ToggleList');
	let _isOpen = ctx.isOpen;

	$: isOpen = $_isOpen;
</script>

<button aria-controls="items-list" aria-haspopup="true" data-testid="list_toggle_btn">
	{#if $$slots.leftIcon}
		<span class="icon">
			<slot name="leftIcon" />
		</span>
	{/if}

	{text}

	{#if $$slots.rightIcon}
		<span
			class="icon"
			class:icon-to-right={full}
			class:rotate90={isOpen}
			class:rotate0={!isOpen}
		>
			<slot name="rightIcon" />
		</span>
	{/if}
</button>
