<script lang="ts">
	import { onMount } from 'svelte';
	import type { IUmamiTrackerSettings } from '../../types.js';
	import { isEmptyObject, isPropValueSet } from '../../utils.js';

	export let websiteID: string;
	export let srcURL: string;
	export let settings: IUmamiTrackerSettings = {};

	let scriptElem: HTMLScriptElement;
	let scriptID = 'umami_analytics_script';

	function setScriptSettingsProps(
		scriptElem: HTMLScriptElement,
		settings: IUmamiTrackerSettings
	) {
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
		if (scriptElem || window.document.getElementById(scriptID)) return;

		try {
			if (!isEmptyObject<IUmamiTrackerSettings>(settings)) {
				setScriptSettingsProps(scriptElem, settings);
			}
			console.log(scriptElem);
		} catch (err) {
			console.error('umami failure: ' + err);
			const elem = window.document.getElementById(scriptID);
			if (elem) elem.remove;
			return;
		}
	});
</script>

<svelte:head>
	<script
		bind:this={scriptElem}
		id={scriptID}
		async
		defer
		data-website-id={websiteID}
		src={srcURL}
		data-testid="umami_analytics_script"
	></script>
</svelte:head>
