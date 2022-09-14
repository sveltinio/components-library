<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import type { ButtonGroupItemType, ButtonGroupContext } from './types.js';
	import CodeIcon from '@indaco/svelte-iconoir/icons/CodeIcon.svelte';
	import EyeEmptyIcon from '@indaco/svelte-iconoir/icons/EyeEmptyIcon.svelte';

	export let activeButton = '1';
	// the source of the example, if you want it
	export let src = undefined;
	// all meta tags of the code block
	export let meta = undefined;
	// suppress vite-plugin-svelte warning about unused props
	$: src, meta;

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
	setContext('PreviewButtonGroup', ctx);

	$: activeButton = $activeButtonsGroupStore;
</script>

<section class="not-prose mt-10 flex flex-col pb-px">
	<div class="mb-3 flex items-center justify-between pb-3">
		<div class="flex">
			<h4 class="text-xl capitalize">{meta.name}</h4>
		</div>

		<div class="ml-6 flex items-center">
			<span class="btn-group btn-group-rounded btn" role="group">
				<button
					class="btn-group-item"
					class:active={activeButton === '1'}
					on:click={() => {
						ctx.setActiveButton('1');
					}}
					><EyeEmptyIcon /><span class="ml-2" data-testid="label-1">Preview</span>
				</button>
				<button
					class="btn-group-item"
					class:active={activeButton === '2'}
					on:click={() => {
						ctx.setActiveButton('2');
					}}
					><CodeIcon /><span class="ml-2" data-testid="label-1">Code</span>
				</button>
			</span>
		</div>
	</div>

	<div class="border-t border-t-slate-100 py-10">
		{#if activeButton === '1'}
			<div class="example">
				<slot name="example" setActiveTab={ctx.setActiveButton} />
			</div>
		{:else if activeButton === '2'}
			<div>
				<pre class="language-svelte rounded-md"><slot
						name="code"
						setActiveTab={ctx.setActiveButton}
					/></pre>
			</div>
		{/if}
	</div>
</section>

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

	.btn {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.btn-group-item {
		--_color: var(--color, rgb(75, 85, 99)); /* slate-600*/
		--_bg-color: var(--bg-color, rgb(255, 255, 255));
		--_border-color: var(--border-color, rgb(226, 232, 240)); /* slate-200 */

		position: relative;
		display: inline-flex;
		align-items: center;
		position: relative;
		padding: 0.5rem 1rem;
		color: var(--_color);
		font-weight: 500;
		background-color: var(--_bg-color);
		border-color: var(--_border-color);
		border-style: solid;
		border-width: thin;
		border-radius: 4px !default;
	}

	.btn-group-item:first-child {
		border-top-left-radius: inherit;
		border-bottom-left-radius: inherit;
	}

	.btn-group-item:last-child {
		border-top-right-radius: inherit;
		border-bottom-right-radius: inherit;
	}

	.btn-group-item:not(:first-child) {
		border-left-width: none; /* Prevent double borders */
	}

	.btn-group-item:hover {
		--_bg-color-hover: var(--bg-color-hover, rgb(241, 245, 249)); /* slate-100 */
		background-color: var(--_bg-color-hover);
	}

	.active {
		--_color-active: var(--color-active, rgb(15, 23, 42)); /* slate-900 */
		--_bg-color-active: var(--bg-color-active, rgb(241, 245, 249)); /* slate-100 */
		--_border-color-active: var(--border-color-active, rgb(226, 232, 240)); /* slate-200 */

		color: var(--_color-active);
		border-color: var(--_border-color-active);
		background-color: var(--_bg-color-active);
	}
</style>
