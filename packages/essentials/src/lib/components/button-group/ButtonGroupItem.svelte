<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { ButtonGroupContext } from './types.js';

	export let id: string;
	export let icon: any = undefined;

	const ctx: ButtonGroupContext = getContext('ButtonGroup');
	let value = ctx.activeButton;

	ctx.registerButton(id, icon);

	function click() {
		ctx.setActiveButton(id);
		console.log(activeButton);
	}

	$: activeButton = $value;

	onDestroy(() => {
		ctx.unregisterButton(id);
	});
</script>

<button {id} class="btn-group-item" class:active={activeButton === id} on:click={click}>
	{#if icon}
		<svelte:component this={icon} />
	{/if}
	<slot />
</button>

<style>
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

	.borderless {
		border: none;
	}
</style>
