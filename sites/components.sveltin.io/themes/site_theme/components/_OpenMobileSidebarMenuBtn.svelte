<script lang="ts">
	import MenuIcon from '@indaco/svelte-iconoir/icons/MenuIcon.svelte';
	export let navIsOpen: boolean;

	function handleNavMenu(): void {
		navIsOpen = !navIsOpen;
	}
</script>

<div class="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 md:hidden">
	<button
		type="button"
		class="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
	>
		<span class="sr-only">Open sidebar</span>
		<MenuIcon class="h6 w-6" on:click={handleNavMenu} />
	</button>
</div>
