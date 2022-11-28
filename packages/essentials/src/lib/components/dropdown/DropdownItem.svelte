<script lang="ts">
	import './styles.css';
	import { createEventDispatcher } from 'svelte';

	export let id: number;
	export let label: string;
	export let href = '';
	export let prefetch = true;
	export let target = '_self';

	const dispatch = createEventDispatcher();

	const btnClick = () => {
		dispatch('click', id);
	};
</script>

<span class="dropdown-item">
	{#if href != ''}
		{#if prefetch}
			<a {href} {target} data-sveltekit-prefetch role="menuitem">
				{label}
			</a>
		{:else}
			<a {href} {target} role="menuitem">
				{label}
			</a>
		{/if}
	{:else}
		<button type="button" role="menuitem" on:click={btnClick}>
			{label}
		</button>
	{/if}
</span>
