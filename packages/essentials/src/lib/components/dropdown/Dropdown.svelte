<script lang="ts">
	import '../../styles/baseline.css';
	import '../../styles/components/dropdown/styles.css';
	import type { DropdownContext } from './types.js';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { clickOutsideAction } from '$lib/actions.js';
	import { a11yKeyboardAction } from './a11y-keyboard.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils.js';

	export let open = false;
	export let keepOpen = false;
	export let styles: Record<string, string> = {};

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	const initialOpenState = writable(open);
	const initialKeepOpenState = writable(keepOpen);
	const ctx: DropdownContext = {
		isOpen: initialOpenState,
		setIsOpen: (_value: boolean) => initialOpenState.set(_value),
		keepOpen: initialKeepOpenState,
		setKeepOpen: (_value: boolean) => initialKeepOpenState.set(_value)
	};
	setContext('SNE_Dropdown', ctx);

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-dropdown'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-e-c-dropdown {cssClasses}"
	style={cssStyles.value}
	use:a11yKeyboardAction={{ enabled: true, isOpen: open, ctx }}
	use:clickOutsideAction={{
		enabled: true,
		cb: () => {
			ctx.setIsOpen(false);
			open = false;
		}
	}}
>
	<slot />
</div>
