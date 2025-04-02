<script lang="ts">
	import type { DropdownContext } from './Dropdown.d.ts';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { clickOutsideAction } from '$lib/actions.js';
	import { a11y } from './a11y-action.js';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';

	export let open = false;
	export let keepOpen = false;
	export let styles: Record<string, string> = {};
	export let className: string | undefined = undefined;
	export { className as class };

	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		console.error(`@sveltinio/essentials(Dropdown): ${cssStyles.error.message}`);
		throw new Error(cssStyles.error.message);
	}

	const initialOpenState = writable(open);
	const initialKeepOpenState = writable(keepOpen);
	const ctx: DropdownContext = {
		isOpen: initialOpenState,
		setIsOpen: (_value: boolean) => initialOpenState.set(_value),
		keepOpen: initialKeepOpenState,
		setKeepOpen: (_value: boolean) => initialKeepOpenState.set(_value)
	};
	setContext('SNE_Dropdown', ctx);
</script>

<div
	class={className}
	style={cssStyles.value}
	use:a11y={{ enabled: true, isOpen: open, ctx }}
	use:clickOutsideAction={{
		enabled: true,
		cb: () => {
			ctx.setIsOpen(false);
			open = false;
		}
	}}
>
	<slot />
</div>

<style src="./styles/Dropdown.postcss">
</style>
