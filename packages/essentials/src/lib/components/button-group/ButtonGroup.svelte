<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/button-group/variables.css';
	import '../../styles/components/button-group/styles.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { contains } from '@sveltinio/ts-utils/collections';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';

	export let activeButton = '';
	export let size = 'base';
	export let responsive = false;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	let buttons: Array<ButtonGroupItemType> = [];
	let activeButtonsGroupStore = writable(activeButton);

	const ctx: ButtonGroupContext = {
		activeButton: activeButtonsGroupStore,
		setActiveButton: (_value) => activeButtonsGroupStore.set(_value),
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

	const reservedCssClasses = ['sn-e-colors', 'sn-e-c-btngroup-vars', 'sn-e-c-btngroup'];
	const cssClassesArray = String($$props.class).split(' ');

	$: className = '';
	// avoid hacking default class names
	$: cssClassesArray.some((v) => contains(reservedCssClasses, v))
		? (className = '')
		: (className = $$props.class);
</script>

<div
	class="sn-e-colors sn-e-c-btngroup-vars sn-e-c-btngroup size--{size} {className}"
	class:sn-e-c-btngroup--responsive={responsive}
	style={cssStyles.value}
	role="group"
>
	<slot style={cssStyles} setActiveButton={ctx.setActiveButton} />
</div>
