<script lang="ts">
	import type {
		ButtonGroupButtonProps as $$ButtonGroupButtonProps,
		ButtonGroupContext
	} from './ButtonGroup.d.ts';
	import { createEventDispatcher, getContext, onDestroy } from 'svelte';

	interface $$Props extends $$ButtonGroupButtonProps {}

	export let id: $$Props['id'];
	export let label: $$Props['label'];
	export let icon: $$Props['icon'] = undefined;
	export let position: $$Props['position'] = 'left';

	const ctx: ButtonGroupContext = getContext('ButtonGroup');
	let _active = ctx.activeButton;
	let _size = ctx.size;
	let _shape = ctx.shape;

	ctx.registerButton(id, icon);

	$: active = $_active;
	$: size = $_size;
	$: shape = $_shape;

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		ctx.setActiveButton(id);
		dispatch('click', { eventDetails: e });
	};

	const isActive = () => (active === id ? 'active' : undefined);

	onDestroy(() => {
		ctx.unregisterButton(id);
	});
</script>

<button
	id="btn-{label}-{id}"
	aria-label={label}
	data-size={size}
	data-shape={shape}
	data-testid="btn-{id}"
	data-state={isActive()}
	on:click={clickDispatcher}
	on:click
	on:keydown
	on:keyup
	on:mouseenter
	on:mouseleave
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

<style src="./styles/ButtonGroupButton.postcss">
</style>
