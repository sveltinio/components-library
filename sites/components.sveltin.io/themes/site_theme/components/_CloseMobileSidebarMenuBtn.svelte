<script lang="ts">
	import { opacityTransition } from '$lib/shared/transitions';
	import { CancelIcon } from '@indaco/svelte-iconoir/icons/CancelIcon';

	export let navIsOpen: boolean;
	export let handleNavMenu = () => {};
</script>

<div
	class="absolute top-0 right-0 -mr-12 pt-2"
	class:hidden={!navIsOpen}
	in:opacityTransition
	out:opacityTransition
>
	<button
		type="button"
		class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
	>
		<span class="sr-only">Close sidebar</span>
		<CancelIcon class="h-6 w-6 text-white" on:click={handleNavMenu} />
	</button>
</div>
