<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import { get } from 'svelte/store';
	import type { DropdownContext } from './types.js';

	export let label: string;
	export let iconSize = 20;

	let value = false;
	let isOpen: boolean;

	const ctx: DropdownContext = getContext('SNE_Dropdown');
	const unsubscribe = ctx.value.subscribe((_value) => (value = _value));

	const toggleDropdown = () => {
		ctx.setValue(!value);
		isOpen = get(ctx.value);
	};

	onDestroy(() => {
		unsubscribe();
	});
</script>

<button class="btn" aria-expanded={isOpen} aria-haspopup="true" on:click={toggleDropdown}
	>{label}

	<span class="btn__icon" class:rotate180={isOpen} class:rotate0={!isOpen}>
		<slot name="btnIcon">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width={iconSize}
				height={iconSize}
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
		</slot>
	</span></button
>
