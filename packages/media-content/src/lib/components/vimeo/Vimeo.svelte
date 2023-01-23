<script lang="ts">
	import { onMount } from 'svelte';
	import type { IVimeoSettings } from '../../types.js';
	import { IFrame, Thumbnail } from '../basic/index.js';
	import {
		makeSettingsString,
		getHexValue,
		isScriptLoaded,
		isValidHex,
		isValidValue,
		isPropValueSet
	} from '../../utils.js';

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

	let iframeURL = '';
	let play = false;
	let renderedComponent: typeof IFrame | typeof Thumbnail;
	let props: Record<string, string>;
	/** Used when settings are provided, no matter if with or without autoplay. */
	function turnAutoplayOn() {
		if (isPropValueSet(settings.autoplay) && !settings.autoplay) {
			iframeURL = iframeURL.replace('autoplay=0', 'autoplay=1').concat('&mute=1');
		} else {
			iframeURL = iframeURL.concat('&autoplay=1&mute=1');
		}
	}

	/** Used when no settings are provided. */
	function setAutoplayOn() {
		iframeURL = iframeURL.concat('?autoplay=1&mute=1');
	}

	/** Handle the play event dispatched by the Thumbnail component. */
	function handleEvent(e: { detail: { name: any; value: any } }) {
		const { name, value } = e.detail;
		if (name === 'play-video' && value === true) {
			play = true;
		}
	}

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

	const scriptID = 'vimeo-lib-script';
	const scriptSRC = 'https://player.vimeo.com/api/player.js';
	const baseURL = `https://player.vimeo.com/video/${id}`;
	const validQualityValues = ['240p', '360p', '540p', '720p', '1080p', '2k', '4k', 'auto'];

	const settingsString = makeSettingsString<IVimeoSettings>(settings, matchersCallback);
	iframeURL = settingsString != '' ? baseURL.concat(`?${settingsString}`) : baseURL;

	const frame = () => {
		renderedComponent = IFrame;
		props = { id: id, title: title, iframeURL: iframeURL };
	};

	const thumbnail = () => {
		renderedComponent = Thumbnail;
		props = { provider: 'vimeo', id: id, title: title, iframeURL: iframeURL };
	};

	onMount(async () => {
		try {
			if (!isScriptLoaded(scriptSRC)) {
				addVimeoScript(scriptID, scriptSRC);
			}
		} catch (err) {
			return;
		}
	});

	if (settings.autoplay) {
		frame();
	} else {
		thumbnail();
	}

	$: videoLink = `https://vimeo.com/${id}`;
	$: vimeoUserPage = `https://vimeo.com/${user}`;
	$: {
		if (play) {
			if (settingsString != '') {
				turnAutoplayOn();
			} else {
				setAutoplayOn();
			}
			frame();
		}
	}
</script>

<section data-testid="content-section">
	<svelte:component
		this={renderedComponent}
		{id}
		{title}
		{iframeURL}
		provider="vimeo"
		on:component-event={(e) => handleEvent(e)}
		{...props}
	/>
</section>
<p>
	{#if title != ''}
		<a href={videoLink} target="_blank" rel="external noopener noreferrer">{title}</a> from
	{/if}
	{#if user != ''}
		<a href={vimeoUserPage} target="_blank" rel="external noopener noreferrer">{user}</a>
	{/if}
	on <a href="https://vimeo.com" target="_blank" rel="external noopener noreferrer">Vimeo</a>.
</p>

{#if description != ''}
	<p>
		&ldquo;{description}
	</p>
{/if}
