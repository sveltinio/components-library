<script lang="ts">
	import type { IYouTubeSettings } from '../../types.js';
	import {
		isCommaSepareted,
		toCommaSepareted,
		makeSettingsString,
		toSnakeCase,
		isPropValueSet
	} from '../../utils.js';
	import { IFrame, Thumbnail } from '../basic/index.js';
	/**
	 * Embedded content type.
	 *
	 * Supported values are video, playlist or user_uploads
	 * The default value is video
	 */
	export let type = 'video';
	/** The id for the video or playlist to embed. */
	export let id: string;
	/** The content title. */
	export let title: string;
	/** The user who published the content. */
	export let username = '';
	/**
	 * To control how the embedded video looks and behaves.
	 *
	 * https://developers.google.com/youtube/player_parameters
	 */
	export let settings: IYouTubeSettings = {};

	let iframeURL = '';
	let play = false;
	let renderedComponent: typeof IFrame | typeof Thumbnail;
	let props: Record<string, string>;

	function makeBaseURL(contentType: string, id: string, username: string): string {
		switch (contentType) {
			case 'video':
				return `https://www.youtube.com/embed/${id}`;
			case 'playlist':
				return `https://www.youtube.com/embed?listType=playlist&list=${id}`;
			case 'user_uploads':
				return `https://www.youtube.com/embed?listType=user_uploads&list=${username}`;
			default:
				console.error(`${type} is not a valid options`);
				return '';
		}
	}

	function matchersCallback(key: string, value: string): string {
		switch (typeof value) {
			case 'boolean':
				// To loop a single video
				if (key === 'loop') {
					return `playlist=${id}&loop=${Number(value)}`;
				}
				return `${key}=${Number(value)}`;
			case 'number':
				return `${key}=${String(value)}`;
			default:
				if (key === 'playlist') {
					if (!isCommaSepareted(value)) {
						return `${toSnakeCase(key)}=${toCommaSepareted(value)}`;
					} else {
						return `${toSnakeCase(key)}=${value}`;
					}
				}
				// default behaviour
				return `${toSnakeCase(key)}=${value}`;
		}
	}

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

	const settingsString = makeSettingsString<IYouTubeSettings>(settings, matchersCallback);
	const paramsStrings =
		type === 'video' ? '?'.concat(settingsString) : '&'.concat(settingsString);
	const baseURL = makeBaseURL(type, id, username);

	iframeURL = settingsString != '' ? baseURL.concat(paramsStrings) : baseURL;
	const frame = () => {
		renderedComponent = IFrame;
		props = { id: id, title: title, iframeURL: iframeURL };
	};

	const thumbnail = () => {
		renderedComponent = Thumbnail;
		props = { provider: 'youtube', id: id, title: title, iframeURL: iframeURL };
	};

	if (type != 'video' || settings.autoplay) {
		frame();
	} else {
		thumbnail();
	}

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

<section data-testid="youtube_content_section">
	<svelte:component
		this={renderedComponent}
		{id}
		{title}
		provider="youtube"
		{iframeURL}
		on:component-event={(e) => handleEvent(e)}
		{...props}
	/>
</section>
