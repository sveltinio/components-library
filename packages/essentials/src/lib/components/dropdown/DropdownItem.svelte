<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let id: number;
	export let label: string;
	export let href = '';
	export let prefetch = true;
	export let target = '_self';
	export let mode = 'button';

	const dispatch = createEventDispatcher();

	const btnClick = () => {
		dispatch('click', id);
	};
</script>

{#if href != ''}
	{#if prefetch}
		<a {href} {target} sveltekit:prefetch role="menuitem" class="dropdown-item">
			{label}
		</a>
	{:else}
		<a {href} {target} role="menuitem" class="dropdown-item">
			{label}
		</a>
	{/if}
{:else}
	<button type={mode} role="menuitem" on:click={btnClick} class="dropdown-item">
		{label}
	</button>
{/if}

<style>
	a {
		text-decoration: none;
	}

	button {
		border: none;
		background: none;
		text-align: left;
		width: 100%;
	}

	a,
	button {
		--_text-color: var(--text-color, rgb(51 65 85 / 1));
		--_font-weight: var(--font-weight, 400);
		--_font-size: var(--font-size, 16px);

		display: flex;
		flex-direction: column;
		color: var(--_text-color);
		font-weight: var(--_font-weight);
		font-size: var(--_font-size);
		padding-top: 0.5rem /* 8px */;
		padding-right: 1rem /* 16px */;
		padding-bottom: 0.5rem /* 8px */;
		padding-left: 1rem /* 16px */;
	}

	a:hover,
	button:hover {
		--_background-color-hover: var(--background-color-hover, rgb(241 245 249 / 1));
		background-color: var(--_background-color-hover);
	}
</style>
