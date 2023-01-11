<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { DropdownContext } from './types.js';

	export let absolute = false;

	const ctx: DropdownContext = getContext('SNE_Dropdown');

	let value = ctx.value;
	const unsubscribe = ctx.value.subscribe((_value) => (isOpen = _value));

	$: isOpen = $value;
	$: visibility = isOpen ? 'show' : 'hide';

	onDestroy(() => {
		unsubscribe();
	});
</script>

<ul id="menu-list" class="list {visibility}" class:list--absolute={absolute} role="menu">
	<slot />
</ul>
