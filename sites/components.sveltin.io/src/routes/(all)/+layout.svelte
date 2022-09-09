<script>
	import { GoogleFonts, UmamiAnalytics } from '@sveltinio/services/dist';
	import DesktopSidebar from '$themes/site_theme/partials/DesktopSidebar.svelte';
	import MobileSidebar from '$themes/site_theme/partials/MobileSidebar.svelte';

	let navIsOpen = false;
	function handleEscape({ key }) {
		if (key === 'Escape') {
			navIsOpen = false;
		}
	}
</script>

<!--
<UmamiAnalytics
	websiteID="4042a9d4-e9e3-470a-9578-03c8a1014914"
	srcURL="https://umami.sveltin.io/umami.js"
/>
-->

<svelte:window on:keyup={handleEscape} />

<MobileSidebar bind:navIsOpen />
<DesktopSidebar />

<slot />
