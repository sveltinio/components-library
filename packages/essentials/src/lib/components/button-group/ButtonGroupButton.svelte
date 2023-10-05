<script lang="ts">
	import { createEventDispatcher, getContext, onDestroy } from 'svelte';
	import type { ButtonGroupContext } from './types.js';

	export let id: string;
	export let label: string;
	export let icon: any = undefined;
	export let position = 'left';

	const ctx: ButtonGroupContext = getContext('ButtonGroup');
	let _active = ctx.activeButton;
	let _size = ctx.size;
	let _shape = ctx.shape;

	ctx.registerButton(id, icon);

	$: active = $_active;
	$: console.log(active);
	$: size = $_size;
	$: shape = $_shape;

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		ctx.setActiveButton(id);
		dispatch('click', { eventDetails: e });
	};

	onDestroy(() => {
		ctx.unregisterButton(id);
	});
</script>

<button
	id="btn-{label}-{id}"
	class:is-active={active === id}
	aria-label={label}
	data-size={size}
	data-shape={shape}
	data-testid="btn-{id}"
	on:click={clickDispatcher}
	{...$$restProps}
>
	{#if icon && position == 'left'}
		<svelte:component this={icon} />
	{/if}
	{label}
	{#if icon && position == 'right'}
		<svelte:component this={icon} />
	{/if}
</button>
