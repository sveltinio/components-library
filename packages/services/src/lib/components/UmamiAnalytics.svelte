<script lang="ts">
	import { onMount } from 'svelte';
	// component configurations
	export let scriptID = 'umami-analytics-script';
	export let enabled = true;
	// Umami tracking code configuration
	export let websiteID: string;
	export let srcURL: string;
	//Umami tracker configurations: https://umami.is/docs/tracker-config
	export let hostURL = '';
	export let autoTrack = true;
	export let doNotTrack = false;
	export let enableCache = false;
	export let domains = ''; // comma delimited list of domain names

	let mounted = false;

	async function addUmamiAnalyticsScript() {
		return new Promise((resolve, reject) => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = scriptID;
			script.async = true;
			script.defer = true;
			script.setAttribute('data-website-id', websiteID);
			script.src = srcURL;

			if (hostURL != '') script.setAttribute('data-host-url', hostURL);
			if (!autoTrack) script.setAttribute('data-auto-track', 'false');
			if (doNotTrack) script.setAttribute('data-do-not-track', 'true');
			if (enableCache) script.setAttribute('data-cache', 'true');
			if (domains != '') script.setAttribute('data-domains', domains);

			head.appendChild(script);

			script.onload = resolve;
			script.onerror = reject;
		});
	}

	onMount(async () => {
		if (!enabled) return;
		// We add the script only once even when the component rendered twice.
		if (window.document.getElementById(scriptID)) return;

		try {
			await addUmamiAnalyticsScript();
		} catch (err) {
			console.error('umami failure');
			const s = window.document.getElementById(scriptID);
			if (s) {
				s.remove();
			}
			return;
		}
		mounted = true;
	});

	$: {
		if (mounted && enabled) {
			//console.log('umami enabled');
		} else if (!enabled) {
			console.log('umami not enabled');
		}
	}
</script>
