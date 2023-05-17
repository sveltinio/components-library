<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/list/variables.css';
	import '../../styles/components/list/styles.css';
	import type { ListItem, ToggleListContext } from './types';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { a11yKeyboardAction } from './a11y-keyboard.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';
	import ToggleButton from './ToggleButton.svelte';
	import List from './List.svelte';

	export let title: string;
	export let items: Array<ListItem>;
	export let full = false;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	let isOpen = false;

	const initialState = writable(isOpen);
	const ctx: ToggleListContext = {
		value: initialState,
		setValue: (_value) => initialState.set(_value)
	};
	setContext('SNE_ToggleList', ctx);

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-colors', 'sn-e-c-togglelist-vars', 'sn-e-c-togglelist'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-e-colors sn-e-c-togglelist-vars sn-e-c-togglelist {cssClasses}"
	style={cssStyles.value}
	use:a11yKeyboardAction={{ enabled: true, isOpen, ctx }}
	data-testid="list_wrapper"
>
	<ToggleButton {title} {full}>
		<slot name="leftSideIcon" slot="leftSideIcon" />
		<slot name="rightSideIcon" slot="rightSideIcon">
			<svg
				data-testid="right_side_icon"
				xmlns="http://www.w3.org/2000/svg"
				width="20px"
				height="20px"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				color="currentColor"
				><path
					d="M9 6l6 6-6 6"
					stroke="#000000"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
				/></svg
			>
		</slot>
	</ToggleButton>

	<List {items} />
</div>
