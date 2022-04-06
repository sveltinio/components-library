<script lang="ts">
	import { onMount } from 'svelte';
	import type { ITweetSettings } from '../types';

	/** The id for the tweet to embed. */
	export let id: string;
	/**
	 * These attributes control which Tweet is embedded and how it looks and behaves.
	 *
	 * https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
	 */
	export let settings: ITweetSettings = {};

	const scriptID = 'twitter-lib-script';
	const targetElementID = `tweet-container-${id}`;
	const scriptSRC = 'https://platform.twitter.com/widgets.js';

	async function addTwitterWidgetScript(
		scriptID: string,
		scriptSRC: string,
		id: string,
		targetElementID: string,
		settings: ITweetSettings
	) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = scriptID;
			script.async = true;
			script.setAttribute('data-testid', scriptID);
			script.src = scriptSRC;
			script.onload = () => {
				var tweet = document.getElementById(targetElementID);
				window.twttr['widgets'].createTweet(id, tweet, {
					conversation: settings.conversation || 'none',
					cards: settings.cards || 'hidden',
					theme: settings.theme || 'light'
				});
			};

			head.appendChild(script);
		});
	}

	onMount(async () => {
		try {
			await addTwitterWidgetScript(scriptID, scriptSRC, id, targetElementID, settings);
		} catch (err) {
			console.error('tweet failure');
			const s = window.document.getElementById(scriptID);
			if (s) {
				s.remove();
			}
			return;
		}
	});
</script>

<div data-testid={targetElementID} id={targetElementID} />
