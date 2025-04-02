<script lang="ts">
	import type { DropdownContext } from './Dropdown.d.ts';
	import { getContext } from 'svelte';

	export let absolute = false;

	const ctx: DropdownContext = getContext('SNE_Dropdown');
	let _isOpen = ctx.isOpen;

	$: isOpen = $_isOpen;
</script>

<ul
	class="list"
	data-open={isOpen}
	data-position={absolute ? 'absolute' : 'relative'}
	role="menu"
	data-testid="dropdown-list"
>
	<slot />
</ul>

<style src="./styles/List.postcss">
</style>
