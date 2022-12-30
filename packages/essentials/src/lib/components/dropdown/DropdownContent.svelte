<script lang="ts">
	import { getContext, onDestroy } from 'svelte';
	import type { DropdownContext } from './types.js';

	const ctx: DropdownContext = getContext('SNE_Dropdown');

	let value = ctx.value;
	export let absolute = false;

	$: isOpen = $value;
	$: visibility = isOpen ? 'show' : 'hide';

	const unsubscribe = ctx.value.subscribe((_value) => (isOpen = _value));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<ul class="list {visibility}" class:list--absolute={absolute}>
	<slot />
</ul>
