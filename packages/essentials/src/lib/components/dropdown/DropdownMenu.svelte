<script lang="ts">
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

<style>
	.show {
		display: block;
	}

	.hide {
		display: none;
	}

	.content-container {
		--_bg-color: var(--bg-color, white); /*slate-100*/
		position: absolute;
		transform-origin: top right;
		width: 14rem /* 224px */;
		margin-top: 0.5rem /* 8px */;
		max-width: 24rem /* 384px */;
		background-color: var(--_bg-color);
		z-index: 10;
	}

	.content-container:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.dropdown-container {
		box-shadow: 0 0 0 0px #ffffff, 0 0 0 1px rgb(226 232 240);
	}
</style>
