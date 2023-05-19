<script lang="ts">
	import type { ToggleListContext } from '../types.js';
	import { getContext } from 'svelte';

	const ctx: ToggleListContext = getContext('SNE_ToggleList');
	let value = ctx.value;

	export let title: string;
	export let full: boolean;
	$: isOpen = $value;
</script>

<button
	class="btn"
	class:btn--full={full}
	aria-controls="items-list"
	aria-expanded={isOpen}
	data-testid="list_toggle_btn"
>
	<span class="btn__icon">
		{#if $$slots.leftSideIcon}
			<slot name="leftSideIcon" />
		{/if}
	</span>

	{title}

	<span
		class="btn__icon"
		class:icon-to-right={full}
		class:rotate90={isOpen}
		class:rotate0={!isOpen}
	>
		<slot name="rightSideIcon" />
	</span>
</button>
