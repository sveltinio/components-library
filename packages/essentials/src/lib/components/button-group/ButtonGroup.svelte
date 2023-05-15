<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/button-group/variables.css';
	import '../../styles/components/button-group/styles.css';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { retrieveCssClassNames } from '$lib/utils';

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

	// avoid hacking reserved css class names
	const reservedNames = ['sn-e-colors', 'sn-e-c-btngroup-vars', 'sn-e-c-btngroup'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

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
</script>

<div
	class="sn-e-colors sn-e-c-btngroup-vars sn-e-c-btngroup size--{size} {cssClasses}"
	class:sn-e-c-btngroup--responsive={responsive}
	style={cssStyles.value}
	role="group"
>
	<slot style={cssStyles} setActiveButton={ctx.setActiveButton} />
</div>
