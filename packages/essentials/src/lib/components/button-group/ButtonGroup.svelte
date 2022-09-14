<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { stylesObjToCSSVars } from '$lib/utils.js';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';

	export let activeButton = '';
	export let type = 'borderless';
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
	<span class="btn-group btn-group-{type} btn-{size}" role="group">
		<slot style={cssStyles} setActiveButton={ctx.setActiveButton} />
	</span>
</div>

<style>
	.btn-group {
		isolation: isolate;
		display: inline-flex;
		border-radius: 0.375rem; /* 6px */
	}
	.btn-group:after {
		content: '';
		clear: both;
		display: table;
	}

	.btn-group-rounded {
		border-radius: 1.5rem; /* 24px */
	}

	/** Label Sizes */
	.btn-xs {
		font-size: 0.75rem;
		line-height: 1rem;
		letter-spacing: 0.025em;
	}

	.btn-sm {
		font-size: 0.85rem;
		line-height: 1rem;
		letter-spacing: 0.05em;
	}

	.btn-base {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.btn-md {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.btn-lg {
		font-size: 1rem;
		line-height: 1.5rem;
	}
</style>
