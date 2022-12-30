<script lang="ts">
	import './styles.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils.js';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';

	export let activeButton = '';
	export let size = 'base';

	let className = '';
	export { className as class };

	// to avoid hacking default class names
	if (!isValidClassName(className, ['sn-e-c-btn-vars', 'sn-e-c-btn'])) {
		console.error('@sveltinio ERROR: Invalid class name for the ButtonGroup component!');
		className = '';
	}

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	let activeButtonsGroupStore = writable(activeButton);
	let buttons: Array<ButtonGroupItemType> = [];

	const ctx: ButtonGroupContext = {
		activeButton: activeButtonsGroupStore,
		setActiveButton: (_value) => activeButtonsGroupStore.set(_value),
		registerButton: (id: string, icon: any) => {
			buttons.push({ id, icon });
			buttons = buttons;
		},
		unregisterButton(id: string) {
			const buttonIndex = buttons.findIndex((button) => button.id === id);
			if (buttonIndex > -1) {
				buttons.splice(buttonIndex, 1);
				buttons = buttons;
			}
		}
	};
	setContext('ButtonGroup', ctx);

	$: activeButton = $activeButtonsGroupStore;
</script>

<div
	class="sn-e-c-btngroup-vars sn-e-c-btngroup {className} btn-{size}"
	style={cssStyles}
	role="group"
	{...$$restProps}
>
	<slot style={cssStyles} setActiveButton={ctx.setActiveButton} />
</div>
