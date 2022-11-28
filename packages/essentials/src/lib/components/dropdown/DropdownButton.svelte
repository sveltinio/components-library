<script lang="ts">
	import './styles.css';
	import { getContext, onDestroy } from 'svelte';
	import { get } from 'svelte/store';

	import type { DropdownContext } from './types.js';
	import { ArrowDownIcon, ArrowUpIcon } from '../icons/index.js';

	export let label: string;

	let value = false;
	let isOpen: boolean;

	const ctx: DropdownContext = getContext('Dropdown');
	const unsubscribe = ctx.value.subscribe((_value) => (value = _value));

	const toggleDropdown = () => {
		ctx.setValue(!value);
		isOpen = get(ctx.value);
	};

	onDestroy(() => {
		unsubscribe();
	});
</script>

<button type="button" aria-expanded={isOpen} aria-haspopup="true" on:click={toggleDropdown}
	>{label}

	<span class:show={!isOpen} class:hide={isOpen}>
		<ArrowDownIcon />
	</span>

	<span class:show={isOpen} class:hide={!isOpen}>
		<ArrowUpIcon />
	</span>
</button>
