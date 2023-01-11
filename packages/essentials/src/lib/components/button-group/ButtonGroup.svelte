<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/button-group/variables.css';
	import '../../styles/components/button-group/styles.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars, isValidClassName } from '$lib/utils.js';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';

	export let activeButton = '';
	export let size = 'base';
	export let responsive = false;

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	let buttons: Array<ButtonGroupItemType> = [];
	let activeButtonsGroupStore = writable(activeButton);

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
	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', [
		'sn-e-colors',
		'sn-e-c-btngroup-vars',
		'sn-e-c-btngroup'
	])
		? (className = $$props.class)
		: (className = '');
</script>

<div
	class="sn-e-colors sn-e-c-btngroup-vars sn-e-c-btngroup size--{size} {className}"
	class:sn-e-c-btngroup--responsive={responsive}
	style={cssStyles}
	role="group"
>
	<slot style={cssStyles} setActiveButton={ctx.setActiveButton} />
</div>
