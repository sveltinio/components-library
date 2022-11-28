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
		<a {href} {target} data-sveltekit-preload-data={prefetch ? 'hover' : ''} role="menuitem">
			{label}
		</a>
	{:else}
		<button type="button" role="menuitem" on:click={btnClick}>
			{label}
		</button>
	{/if}
</span>
