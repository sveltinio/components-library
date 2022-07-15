<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { DropdownContext } from './types.js';

	export let isOpen = false;
	const initialState = writable(isOpen);

	const ctx: DropdownContext = {
		value: initialState,
		setValue: (_value) => initialState.set(_value)
	};

	setContext('Dropdown', ctx);

	function clickOutside(node: HTMLElement, handler: () => void): { destroy: () => void } {
		const onClick = (event: MouseEvent) =>
			node &&
			!node.contains(event.target as HTMLElement) &&
			!event.defaultPrevented &&
			handler();

		document.addEventListener('click', onClick, true);

		return {
			destroy() {
				document.removeEventListener('click', onClick, true);
			}
		};
	}

	$: initialState.set(isOpen);
	$: isOpen = $initialState;
</script>

<div
	use:clickOutside={() => {
		ctx.setValue(false);
		isOpen = false;
	}}
>
	<slot {isOpen} setValue={ctx.setValue} />
</div>
