<script lang="ts">
	import { onMount } from 'svelte';
	import { isEmpty } from '@sveltinio/ts-utils/is';
	import { isHex, getHexValue } from '@sveltinio/ts-utils/colors';
	import { contains } from '@sveltinio/ts-utils/collections';
	import type { IVimeoSettings } from '../../types.js';
	import { IFrame, Thumbnail } from '../basic/index.js';
	import { makeSettingsString, isScriptLoaded } from '../../utils.js';

	/** The id for the video to embed. */
	export let id: string;
	/** The user who published the content. */
	export let user = '';
	/** The content description text. */
	export let description = '';
	/** The content title. */
	export let title = '';
	/**
	 * To control how the embedded video looks and behaves..
	 *
	 * https://vimeo.zendesk.com/hc/en-us/articles/360001494447-Player-parameters-overview
	 */
	export let settings: IVimeoSettings = {};

	let iframeURL = '';
	let play = false;
	let renderedComponent: typeof IFrame | typeof Thumbnail;
	let props: Record<PropertyKey, string>;

	/** Used when settings are provided, no matter if with or without autoplay. */
	function turnAutoplayOn() {
		if (!isEmpty(settings.autoplay) && !settings.autoplay) {
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
					return contains(validQualityValues, value) ? `${key}=${value}` : `${key}=auto`;
				} else if (key == 'color') {
					return isHex(value)
						? `${key}=${getHexValue(value).map((v) => v)}`
						: `${key}=ffffff`;
				} else {
					return `${key}=${value}`;
				}
		}
	}

	/**
	 * Adding the script would fail for example if the user is running
	 * and ad blocker. This Promise can handle that case.
	 */
	async function addVimeoScript(id: string, src: string) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = id;
			script.async = true;
			script.src = src;
			script.setAttribute('data-testid', 'vimeo_lib_script');

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

<section data-testid="vimeo_content_section">
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
