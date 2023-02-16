<script lang="ts">
	import { onMount } from 'svelte';
	import type { IUmamiTrackerSettings } from '../../types.js';
	import { isEmptyObject, isPropValueSet } from '../../utils.js';

	export let websiteID: string;
	export let srcURL: string;
	export let settings: IUmamiTrackerSettings = {};

	let scriptID = 'umami_analytics_script';

	/**
	 * Adding the script would fail for example if the user is running
	 * and ad blocker. This Promise can handle that case.
	 */
	async function addUmamiAnalyticsScript(websiteID: string, srcURL: string, scriptID: string) {
		return new Promise((resolve, reject) => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = scriptID;
			script.async = true;
			script.defer = true;
			script.setAttribute('data-website-id', websiteID);
			script.setAttribute('data-testid', 'umami_analytics_script');
			script.src = srcURL;

			head.appendChild(script);

			script.onload = resolve;
			script.onerror = reject;
		});
	}

	function setScriptSettingsProps(scriptElem: HTMLElement, settings: IUmamiTrackerSettings) {
		if (isPropValueSet(settings.hostURL))
			scriptElem.setAttribute('data-host-url', settings.hostURL || '');
		if (isPropValueSet(settings.autoTrack) && !settings.autoTrack)
			scriptElem.setAttribute('data-auto-track', 'false');
		if (isPropValueSet(settings.doNotTrack) && settings.doNotTrack)
			scriptElem.setAttribute('data-do-not-track', 'true');
		if (isPropValueSet(settings.enableCache) && settings.enableCache)
			scriptElem.setAttribute('data-cache', 'true');
		if (isPropValueSet(settings.domains))
			scriptElem.setAttribute('data-domains', settings.domains || '');
	}

	onMount(async () => {
		// We add the script only once even when the component rendered twice.
		if (window.document.getElementById(scriptID)) return;

		try {
			addUmamiAnalyticsScript(websiteID, srcURL, scriptID);

			if (!isEmptyObject<IUmamiTrackerSettings>(settings)) {
				const umamiScript = document.getElementById(scriptID);
				if (umamiScript) {
					setScriptSettingsProps(umamiScript, settings);
				}
			}
		} catch (err) {
			console.error('umami failure');
			const s = window.document.getElementById(scriptID);
			if (s) {
				s.remove();
			}
		}
	});
</script>
