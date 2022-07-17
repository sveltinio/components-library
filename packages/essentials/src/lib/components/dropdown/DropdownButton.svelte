<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import { get } from 'svelte/store';

	import ArrowDownIcon from './ArrowDownIcon.svelte';
	import ArrowUpIcon from './ArrowUpIcon.svelte';
	import type { DropdownContext } from './types';

	/**
	 * Set the dropdown label
	 * @type {string}
	 */
	export let label: string;

	let value = false;
	let isOpen: boolean;

	const ctx: DropdownContext = getContext('Dropdown');
	const unsubscribe = ctx.value.subscribe((_value) => (value = _value));

	const toggleDropdown = () => {
		ctx.setValue(!value);
		isOpen = get(ctx.value);
	};

	$: toggleArrowUp = isOpen ? 'show' : 'hide';
	$: toggleArrowDown = isOpen ? 'hide' : 'show';

	onDestroy(() => {
		unsubscribe();
	});
</script>

<button type="button" aria-expanded={isOpen} aria-haspopup="true" on:click={toggleDropdown}
	>{label}

	<ArrowDownIcon bind:toggleArrowDown />
	<ArrowUpIcon bind:toggleArrowUp />
</button>

<style>
	button {
		--_color: var(--color, rgb(51 65 85)); /* slate-700*/
		--_border-color: var(--border-color, rgb(203 213 225)); /* slate-300*/
		--_bg-color: var(--bg-color, rgb(241 245 249)); /* slate-100*/

		font-size: 1rem /* 16px */;
		line-height: 1.5rem /* 24px */;
		font-weight: 500;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding-left: 1rem /* 16px */;
		padding-right: 1rem /* 16px */;
		padding-top: 0.5rem /* 8px */;
		padding-bottom: 0.5rem /* 8px */;
		font-weight: 400;
		color: var(--_color);
		border-radius: 0.25rem; /* 4px */
		border-color: var(--_border-color);
		border-style: solid;
		border-width: 1px;
		background-color: var(--_bg-color);
	}

	button:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(226 232 240)); /*slate-200*/
		background-color: var(--_bg-color-hover);
	}

	button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
</style>
