<script lang="ts">
	import './styles.css';
	import { createEventDispatcher, getContext, onDestroy } from 'svelte';
	import type { ButtonGroupContext } from './types.js';

	export let id: string;
	export let icon: any = undefined;

	const ctx: ButtonGroupContext = getContext('ButtonGroup');
	let value = ctx.activeButton;

	ctx.registerButton(id, icon);

	const dispatch = createEventDispatcher();
	const clickDispatcher = (e: MouseEvent) => {
		ctx.setActiveButton(id);
		dispatch('click', { eventDetails: e });
	};

	$: activeButton = $value;

	onDestroy(() => {
		ctx.unregisterButton(id);
	});
</script>

<button {id} class="btn-group-item" class:active={activeButton === id} on:click={clickDispatcher}>
	{#if icon}
		<svelte:component this={icon} />
	{/if}
	<slot />
</button>
