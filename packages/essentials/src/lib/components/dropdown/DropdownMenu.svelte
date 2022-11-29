<script lang="ts">
	import './dropdown-styles.css';
	import { getContext, onDestroy } from 'svelte';
	import type { DropdownContext } from './types.js';

	const ctx: DropdownContext = getContext('Dropdown');

	let value = ctx.value;

	$: isOpen = $value;
	$: visibility = isOpen ? 'show' : 'hide';

	const unsubscribe = ctx.value.subscribe((_value) => (isOpen = _value));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<div class="content-container {visibility}">
	<div class="dropdown-container " role="none">
		<slot />
	</div>
</div>
