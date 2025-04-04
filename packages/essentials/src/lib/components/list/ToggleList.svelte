<script lang="ts">
	import type { IndicatorType, ListItem, ToggleListContext } from './ToggleList.d.ts';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import { a11y } from './a11y-action.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils.js';
	import Title from './Title.svelte';
	import List from './List.svelte';

	export let title: string;
	export let items: Array<ListItem>;
	export let open = false;
	export let full = false;
	export let showIcon = true;
	export let indicator: IndicatorType = 'dot';

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		console.error(`@sveltinio/essentials(ToggleList): ${cssStyles.error.message}`);
		throw new Error(cssStyles.error.message);
	}

	const setIndicator = (indicator: IndicatorType) => {
		if (indicator != 'dot' && indicator != 'square' && indicator != 'line') {
			return 'custom';
		}
		return indicator;
	};

	const initialOpenState = writable(open);
	const selectedIndicator = writable(setIndicator(indicator));

	const ctx: ToggleListContext = {
		isOpen: initialOpenState,
		setIsOpen: (value: boolean) => initialOpenState.set(value),
		indicator: selectedIndicator,
		setIndicator: (value: IndicatorType) => selectedIndicator.set(value)
	};
	setContext('SNE_ToggleList', ctx);

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-togglelist'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);
</script>

<div
	class="sn-e-c-togglelist {cssClasses}"
	style={cssStyles.value}
	role="group"
	aria-label="sn-e-c-togglelist_{title}"
	data-testid="list_wrapper"
	use:a11y={{ enabled: true, isOpen: open, ctx }}
>
	<Title text={title} {full}>
		<slot name="leftIcon" slot="leftIcon" />

		<slot name="rightIcon" slot="rightIcon">
			{#if showIcon}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					class="icon"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					color="currentColor"
					data-testid="right_side_icon"
					><path
						d="M9 6l6 6-6 6"
						stroke="#000000"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			{/if}
		</slot>
	</Title>

	<List {items} />
</div>
