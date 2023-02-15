<script lang="ts">
	import { onMount } from 'svelte';
	import type { ITweetSettings } from '../../types.js';

	/** The id for the tweet to embed. */
	export let id: string;
	/**
	 * To control how the embedded tweet looks and behaves..
	 *
	 * https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference
	 */
	export let settings: ITweetSettings = {};

	let wrapperElem: HTMLElement;

	const scriptID = 'twitter-lib-script';
	const targetElementID = `tweet-container-${id}`;
	const scriptSRC = 'https://platform.twitter.com/widgets.js';

	/**
	 * Adding the script would fail for example if the user is running
	 * and ad blocker. This Promise can handle that case.
	 */
	async function addTwitterWidgetScript(
		scriptID: string,
		scriptSRC: string,
		id: string,
		targetElement: HTMLElement,
		settings: ITweetSettings
	) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = scriptID;
			script.async = true;
			script.setAttribute('data-testid', 'twitter_lib_script');
			script.src = scriptSRC;
			script.onload = () => {
				window.twttr['widgets'].createTweet(id, targetElement, {
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
			await addTwitterWidgetScript(scriptID, scriptSRC, id, wrapperElem, settings);
		} catch (err) {
			console.error('tweet failure');
			if (wrapperElem) wrapperElem.remove();
			return;
		}
	});
</script>

<div bind:this={wrapperElem} id={targetElementID} data-testid={targetElementID} />
