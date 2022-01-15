<script lang="ts">
	/**
	 * Based on: "Add Google Analytics' gtag to a Sapper project"
	 * Reference:
	 * https://angelblanco.dev/articles/add-gtag-analytics-to-sapper/#google-analytics-svelte-component
	 */
	import { onMount } from 'svelte';

	// Pass or harcode your google analytics tracking id
	export let trackingId: string;
	export let scriptId = 'google-analytics-script';
	export let domain = 'https://www.googletagmanager.com';
	export let enabled = true;

	let mounted = false;

	// Adding google tag manager will fail for example if the user is running
	// and ad blocker. This Promise can handle that case.
	async function addGoogleAnalyticsScript(dataLayerName = 'dataLayer') {
		return new Promise((resolve, reject) => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const link = document.createElement('link');
			link.href = domain;
			link.rel = 'preconnect';
			head.appendChild(link);

			const script = document.createElement('script');
			script.async = true;
			script.src = `${domain}/gtag/js?id=${trackingId}&l=${dataLayerName}`;
			script.setAttribute('id', scriptId);

			head.appendChild(script);

			script.onload = resolve;
			script.onerror = reject;
		});
	}

	onMount(async () => {
		if (!enabled) {
			return;
		}
		// We add the script only once even when the component rendered twice.
		if (window.document.getElementById(scriptId)) {
			return;
		}

		window.dataLayer = window.dataLayer || [];
		window.gtag = function () {
			window.dataLayer.push(arguments);
		};
		gtag('js', new Date());
		gtag('config', trackingId);

		try {
			await addGoogleAnalyticsScript();
		} catch (err) {
			console.error('gtag failure');
			const s = window.document.getElementById(scriptId);

			if (s) {
				s.remove();
			}
			return;
		}

		mounted = true;
	});

	$: {
		if (mounted && window.gtag) {
			gtag('config', trackingId);
		}
	}
</script>
