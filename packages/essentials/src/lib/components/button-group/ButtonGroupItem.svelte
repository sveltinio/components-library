<script lang="ts">
	import { createEventDispatcher, getContext, onDestroy } from 'svelte';
	import type { ButtonGroupContext } from './types.js';

	export let id: string;
	export let label: string;
	export let icon: any = undefined;
	export let position = 'left';

	const ctx: ButtonGroupContext = getContext('ButtonGroup');
	let value = ctx.activeButton;

	ctx.registerButton(id, icon);

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		ctx.setActiveButton(id);
		dispatch('click', { eventDetails: e });
	};

	let htmlElem: HTMLElement;
	function keydownHandler(e: KeyboardEvent) {
		if (['Enter', 'Space'].includes(e.code)) {
			e.preventDefault();
			ctx.setActiveButton(id);
			htmlElem.click();
		}
	}

	$: activeButton = $value;

	onDestroy(() => {
		ctx.unregisterButton(id);
	});
</script>

<button
	bind:this={htmlElem}
	id="btn-{label}-{id}"
	on:click={clickDispatcher}
	on:keydown={keydownHandler}
	class="btngroup__item"
	class:is-active={activeButton === id}
	aria-label={label}
	data-testid="btn-{id}"
>
	{#if icon && position == 'left'}
		<svelte:component this={icon} />
	{/if}
	{label}
	{#if icon && position == 'right'}
		<svelte:component this={icon} />
	{/if}
</button>
