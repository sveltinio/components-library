<script lang="ts">
	import { onMount } from 'svelte';
	import type { IUmamiTrackerSettings } from '../../types.js';
	import { isEmptyObject, isPropValueSet } from '../../utils.js';

	export let websiteID: string;
	export let srcURL: string;
	export let settings: IUmamiTrackerSettings = {};

	let scriptID = 'umami-analytics-script';

	async function addUmamiAnalyticsScript(websiteID: string, srcURL: string, scriptID: string) {
		return new Promise((resolve, reject) => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = scriptID;
			script.async = true;
			script.defer = true;
			script.setAttribute('data-website-id', websiteID);
			script.src = srcURL;

			head.appendChild(script);

			script.onload = resolve;
			script.onerror = reject;
		});
	}

	function setScriptSettingsProps(script: HTMLElement, settings: IUmamiTrackerSettings) {
		if (isPropValueSet(settings.hostURL))
			script.setAttribute('data-host-url', settings.hostURL || '');
		if (isPropValueSet(settings.autoTrack) && !settings.autoTrack)
			script.setAttribute('data-auto-track', 'false');
		if (isPropValueSet(settings.doNotTrack) && settings.doNotTrack)
			script.setAttribute('data-do-not-track', 'true');
		if (isPropValueSet(settings.enableCache) && settings.enableCache)
			script.setAttribute('data-cache', 'true');
		if (isPropValueSet(settings.domains))
			script.setAttribute('data-domains', settings.domains || '');
	}

	onMount(async () => {
		// We add the script only once even when the component rendered twice.
		if (window.document.getElementById(scriptID)) return;

		try {
			addUmamiAnalyticsScript(websiteID, srcURL, scriptID);

			if (!isEmptyObject<IUmamiTrackerSettings>(settings)) {
				const umamiScript = document.getElementById(scriptID);
				if (umamiScript) setScriptSettingsProps(umamiScript, settings);
			}
		} catch (err) {
			console.error('umami failure');
			const s = window.document.getElementById(scriptID);
			if (s) {
				s.remove();
			}
			return;
		}
	});
</script>
