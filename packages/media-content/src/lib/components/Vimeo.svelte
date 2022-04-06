<script lang="ts">
	import { onMount } from 'svelte';
	import type { IVimeoSettings } from '../types';
	import {
		makeSettingsString,
		getHexValue,
		isScriptLoaded,
		isValidHex,
		isValidValue
	} from '../utils';

	/** The id for the video to embed. */
	export let id: string;
	/** The user who published the content. */
	export let user = '';
	/** The content description text. */
	export let description = '';
	/** The content title. */
	export let title = '';
	/**
	 * These attributes control which video is embedded and how it looks and behaves.
	 *
	 * https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview
	 */
	export let settings: IVimeoSettings = {};

	const scriptID = 'vimeo-lib-script';
	const scriptSRC = 'https://player.vimeo.com/api/player.js';
	const baseURL = `https://player.vimeo.com/video/${id}`;
	const validQualityValues = ['240p', '360p', '540p', '720p', '1080p', '2k', '4k', 'auto'];

	const settingsString = makeSettingsString<IVimeoSettings>(settings, matchersCallback);
	const iframeURL = settingsString != '' ? baseURL.concat(`?${settingsString}`) : baseURL;

	$: videoLink = `https://vimeo.com/${id}`;
	$: vimeoUserPage = `https://vimeo.com/${user}`;

	function matchersCallback(key: string, value: string): string {
		switch (typeof value) {
			case 'boolean':
				return `${key}=${Number(value)}`;
			case 'number':
				return `${key}=${String(value)}`;
			default:
				if (key == 'quality') {
					return isValidValue<string>(value, validQualityValues)
						? `${key}=${value}`
						: `${key}=auto`;
				} else if (key == 'color') {
					return isValidHex(value) ? `${key}=${getHexValue(value)}` : `${key}=ffffff`;
				} else {
					return `${key}=${value}`;
				}
		}
	}

	async function addVimeoScript(id: string, src: string) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = id;
			script.async = true;
			script.src = src;

			head.appendChild(script);
		});
	}

	onMount(async () => {
		try {
			if (!isScriptLoaded(scriptSRC)) {
				addVimeoScript(scriptID, scriptSRC);
			}
		} catch (err) {
			return;
		}
	});
</script>

<div data-testid="wrapper" id="video-container-{id}" class="vimeo-video-container">
	<iframe
		data-testid="iframe"
		title={title != '' ? title : videoLink}
		src={iframeURL}
		style="position:absolute; top:0; left:0; width:100%; height:100%;"
		frameborder="0"
		allow="autoplay; fullscreen; picture-in-picture"
		allowfullscreen
	/>
</div>
<p>
	{#if title != ''}
		<a href={videoLink}>{title}</a> from
	{/if}
	{#if user != ''}
		<a href={vimeoUserPage}>{user}</a>
	{/if}
	on <a href="https://vimeo.com">Vimeo</a>.
</p>

{#if description != ''}
	<p>
		&ldquo;{description}
	</p>
{/if}

<style>
	.vimeo-video-container {
		padding: 56.49% 0 0 0;
		position: relative;
	}
</style>
