<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/dropdown/variables.css';
	import '../../styles/components/dropdown/styles.css';
	import type { DropdownContext } from './types.js';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { clickOutsideAction } from '$lib/actions.js';
	import { a11yKeyboardAction } from './a11y-keyboard.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';

	export let isOpen = false;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	const initialState = writable(isOpen);
	const ctx: DropdownContext = {
		value: initialState,
		setValue: (_value) => initialState.set(_value)
	};
	setContext('SNE_Dropdown', ctx);

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-colors', 'sn-e-c-dropdown-vars', 'sn-e-c-dropdown'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-e-colors sn-e-c-dropdown-vars sn-e-c-dropdown {cssClasses}"
	style={cssStyles.value}
	use:a11yKeyboardAction={{ enabled: true, isOpen, ctx }}
	use:clickOutsideAction={{
		enabled: true,
		cb: () => {
			ctx.setValue(false);
			isOpen = false;
		}
	}}
>
	<slot {isOpen} />
</div>
