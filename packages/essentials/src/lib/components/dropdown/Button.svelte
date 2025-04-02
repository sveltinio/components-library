<script lang="ts">
	import type { DropdownContext } from './Dropdown.js';
	import { isEmpty } from '@sveltinio/ts-utils/is';
	import { getContext } from 'svelte';
	import { Button } from '../button/index.js';

	export let label: string;
	export let styles = {};

	const defaultStyles: Record<string, string> = {
		'bg-color': '#ffffff',
		'border-color': 'var(--gray-2)',
		'ring-color': 'var(--gray-3)'
	};
	const ctx: DropdownContext = getContext('SNE_Dropdown');
	let _isOpen = ctx.isOpen;

	$: isOpen = $_isOpen;
</script>

<Button
	id="dropdown-button-{label.toLowerCase()}"
	variant="ghost"
	border="solid"
	aria-label={label}
	aria-haspopup="true"
	aria-controls="menu-list"
	styles={!isEmpty(styles) ? styles : defaultStyles}
	class={$$props.class}
	data-testid="dropdown-btn"
>
	{label}

	<svg
		slot="rightIcon"
		xmlns="http://www.w3.org/2000/svg"
		width="20"
		height="20"
		class="icon"
		class:flipY={isOpen}
		class:-flipY={!isOpen}
		stroke-width="1.5"
		viewBox="0 0 24 24"
		fill="none"
		color="currentColor"
	>
		<path
			d="M6 9L12 15L18 9"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</Button>

<style src="./styles/Button.postcss">
</style>
