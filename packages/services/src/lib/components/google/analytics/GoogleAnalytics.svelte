<script lang="ts">
	/**
	 * Based on: "Add Google Analytics' gtag to a Sapper project":
	 * https://angelblanco.dev/articles/add-gtag-analytics-to-sapper
	 */
	import { onMount } from 'svelte';

	export let propertyID: string;

	let scriptElem: HTMLScriptElement;
	let domain = 'https://www.googletagmanager.com';
	let scriptID = 'google-analytics-script';
	let mounted = false;

	onMount(async () => {
		// We add the script only once even when the component rendered twice.
		if (scriptElem || window.document.getElementById(scriptID)) return;

		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};

		try {
			window.gtag('js', new Date());
			window.gtag('config', propertyID);
		} catch (err) {
			console.error('gtag failure: ' + err);
			const elem = window.document.getElementById(scriptID);
			if (elem) elem.remove();

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

<svelte:head>
	<link rel="preconnect" href={domain} />
	<script
		bind:this={scriptElem}
		id={scriptID}
		src="{domain}/gtag/js?id={propertyID}&l=dataLayer"
		async
		data-testid="google_analytics_script"
	></script>
</svelte:head>
