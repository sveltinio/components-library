<script lang="ts">
	import type {
		ButtonGroupSize,
		ButtonGroupShape,
		ButtonGroupItemType,
		ButtonGroupContext
	} from './ButtonGroup.d.ts';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils.js';

	export let activeButton = '';
	export let size: ButtonGroupSize = 'base';
	export let responsive = true;
	export let shape: ButtonGroupShape = 'rounded';
	export let styles = {};

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		console.error(`@sveltinio/essentials(ButtonGroup): ${cssStyles.error.message}`);
		throw new Error(cssStyles.error.message);
	}

	let buttons: Array<ButtonGroupItemType> = [];
	let activeButtonStore = writable(activeButton);
	let sizeStore = writable(size);
	let shapeStore = writable(shape);

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-c-btngroup'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	const ctx: ButtonGroupContext = {
		activeButton: activeButtonStore,
		setActiveButton: (_value) => activeButtonStore.set(_value),
		size: sizeStore,
		setSize: (_value) => sizeStore.set(_value),
		shape: shapeStore,
		setShape: (_value) => shapeStore.set(_value),
		registerButton: (id: string, icon: any) => {
			buttons.push({ id, icon });
		},
		unregisterButton(id: string) {
			const buttonIndex = buttons.findIndex((button) => button.id === id);
			if (buttonIndex > -1) {
				buttons.splice(buttonIndex, 1);
			}
		}
	};
	setContext('ButtonGroup', ctx);
</script>

<div
	class="sn-e-c-btngroup {cssClasses}"
	data-responsive={responsive}
	style={cssStyles.value}
	role="group"
>
	<slot style={cssStyles} />
</div>

<style src="./styles/ButtonGroup.postcss"></style>
