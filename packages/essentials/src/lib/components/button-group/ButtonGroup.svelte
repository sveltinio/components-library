<script lang="ts">
	import './btngroup-styles.css';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars } from '$lib/utils.js';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';

	export let activeButton = '';
	export let size = 'base';
	export let styles = {};

	let activeButtonsGroupStore = writable(activeButton);
	let buttons: Array<ButtonGroupItemType> = [];

	const cssStyles = stylesObjToCSSVars(styles);
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

<div style={cssStyles} {...$$restProps}>
	<span class="btn-group btn-{size}" role="group">
		<slot style={cssStyles} setActiveButton={ctx.setActiveButton} />
	</span>
</div>
