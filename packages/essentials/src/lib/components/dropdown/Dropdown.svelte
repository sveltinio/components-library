<script lang="ts">
	import './styles.postcss';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils.js';
	import type { DropdownContext } from './types.js';

	export let isOpen = false;

	let className = '';
	export { className as class };

	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-c-dropdown-vars', 'sn-e-c-dropdown'])) {
		console.error('@sveltinio ERROR: Invalid class name for the Dropdown component!');
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	const initialState = writable(isOpen);

	const ctx: DropdownContext = {
		value: initialState,
		setValue: (_value) => initialState.set(_value)
	};

	setContext('SNE_Dropdown', ctx);

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
	class="sn-e-c-dropdown-vars sn-e-c-dropdown {className}"
	style={cssStyles}
	use:clickOutside={() => {
		ctx.setValue(false);
		isOpen = false;
	}}
>
	<slot {isOpen} setValue={ctx.setValue} />
</div>
