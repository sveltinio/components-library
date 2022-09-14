<script>
	import DesktopSidebar from '$themes/site_theme/partials/DesktopSidebar.svelte';
	import MobileSidebar from '$themes/site_theme/partials/MobileSidebar.svelte';

	let navIsOpen = false;
	function handleEscape({ key }) {
		if (key === 'Escape') {
			navIsOpen = false;
		}
	}
</script>

<svelte:window on:keyup={handleEscape} />

<MobileSidebar bind:navIsOpen />
<DesktopSidebar />

<main class="mx-auto max-w-7xl  bg-white md:pl-64">
	<slot />
</main>
