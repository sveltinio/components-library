<script lang="ts">
	/**
	 * Based on: "Add Google Analytics' gtag to a Sapper project"
	 * Reference:
	 * https://angelblanco.dev/articles/add-gtag-analytics-to-sapper
	 */
	import { onMount } from 'svelte';

	export let propertyID: string;

	let domain = 'https://www.googletagmanager.com';
	let scriptID = 'google-analytics-script';
	let mounted = false;

	// Adding google tag manager will fail for example if the user is running
	// and ad blocker. This Promise can handle that case.
	async function addGoogleAnalyticsScript(
		propID: string,
		domain: string,
		dataLayerName = 'dataLayer'
	) {
		return new Promise((resolve, reject) => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const link = document.createElement('link');
			link.href = domain;
			link.rel = 'preconnect';
			head.appendChild(link);

			const script = document.createElement('script');
			script.id = scriptID;
			script.async = true;
			script.src = `${domain}/gtag/js?id=${propID}&l=${dataLayerName}`;
			script.onload = resolve;
			script.onerror = reject;

			head.appendChild(script);
		});
	}

	onMount(async () => {
		// We add the script only once even when the component rendered twice.
		if (window.document.getElementById(scriptID)) {
			return;
		}

		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		window.gtag('js', new Date());
		window.gtag('config', propertyID);

		try {
			await addGoogleAnalyticsScript(propertyID, domain);
		} catch (err) {
			console.error('gtag failure');
			const s = window.document.getElementById(scriptID);

			if (s) {
				s.remove();
			}
			return;
		}

		mounted = true;
	});

	$: {
		if (mounted && window.gtag) {
			window.gtag('config', propertyID);
		}
	}
</script>
