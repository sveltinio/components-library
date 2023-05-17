<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/toc/variables.css';
	import '../../styles/components/toc/styles.css';
	import type { TocContext, TocEntry } from './types.js';
	import { retrieveCssClassNames } from '$lib/utils';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import TocList from './TocList.svelte';
	import TocButton from './TocButton.svelte';
	import { clickOutsideAction } from '$lib/actions.js';
	import { a11yKeyboardAction } from './a11y-keyboard.js';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';

	export let data: Array<TocEntry>;
	export let label = 'Table of Contents';
	export let full = true;
	export let iconOnly = false;
	export let labelOnly = false;
	export let prefixChar = '#';
	export let isOpen = false;
	export let ordered = false;
	export let styles = {};

	let prefix = ordered ? '' : prefixChar;

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	const initialState = writable(isOpen);
	const ctx: TocContext = {
		value: initialState,
		setValue: (_value) => initialState.set(_value)
	};
	setContext('SNE_Toc', ctx);

	// avoid hacking reserverd css classes
	const reservedNames = ['sn-w-colors', 'sn-w-c-toc-vars', 'sn-w-c-toc'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<nav
	class="sn-w-colors sn-w-c-toc-vars sn-w-c-toc {cssClasses}"
	style={cssStyles.value}
	aria-label={label}
	data-testid="toc_main"
	use:a11yKeyboardAction={{ enabled: true, isOpen, prefixChar, ctx }}
	use:clickOutsideAction={{ enabled: true, cb: () => ctx.setValue(false) }}
>
	<TocButton {label} {iconOnly} {labelOnly} />
	<TocList {data} {ordered} {full} prefixChar={prefix} />
</nav>
