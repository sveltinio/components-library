<script lang="ts">
	import type { IYouTubeSettings } from '../types';
	import {
		isCommaSepareted,
		toCommaSepareted,
		makeSettingsString,
		toSnakeCase,
		isPropValueSet
	} from '../utils';

	/** The id for the video or playlist to embed. */
	export let id: string;
	/** The content title. */
	export let title: string;
	/**
	 * Embedded content type.
	 *
	 * Supported values are video, playlist or user_uploads
	 * The default value is video
	 */
	export let type = 'video';
	/** The user who published the content. */
	export let username = '';
	/**
	 * These attributes control which video is embedded and how it looks and behaves.
	 *
	 * https://developers.google.com/youtube/player_parameters
	 */
	export let settings: IYouTubeSettings = {};

	let baseURL = '';
	switch (type) {
		case 'video':
			baseURL = `https://www.youtube.com/embed/${id}`;
			break;
		case 'playlist':
			baseURL = `https://www.youtube.com/embed?listType=playlist&list=${id}`;
			break;
		case 'user_uploads':
			if (!isPropValueSet<string>(username)) {
				console.error(`${username} must be defined`);
			} else {
				baseURL = `https://www.youtube.com/embed?listType=user_uploads&list=${username}`;
			}
			break;
		default:
			console.error(`${type} is not a valid options`);
			break;
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

	const settingsString = makeSettingsString<IYouTubeSettings>(settings, matchersCallback);
	const paramsStrings = type === 'video' ? '?'.concat(settingsString) : '&'.concat(settingsString);
	const iframeURL = settingsString != '' ? baseURL.concat(paramsStrings) : baseURL;
</script>

<div data-testid="wrapper" id="video-container-{id}" class="youtube-video-container">
	<iframe
		data-testid="iframe"
		id="frame-{id}"
		class="frame"
		src={iframeURL}
		frameborder="0"
		allowfullscreen
		allow-same-origin
		{title}
	/>
</div>

<style>
	.youtube-video-container {
		position: relative;
		width: 100%;
		padding-bottom: calc(var(--aspect-ratio, 0.5625) * 100%);
		height: 0;
	}

	.frame {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 4px;
	}
</style>
