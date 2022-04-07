<script lang="ts">
	import type { IStackBlitzSettings } from '../types';
	import { makeSettingsString, toKebabCase } from '../utils';

	/** The id for the project to embed. */
	export let id: string;
	export let title = '';
	/**
	 * These attributes control which project is embedded and how it looks and behaves.
	 *
	 * https://developer.stackblitz.com/docs/platform/embedding/
	 */
	export let settings: IStackBlitzSettings = {};

	function matchersCallback(key: string, value: string): string {
		switch (typeof value) {
			case 'boolean':
				return `${key}=${Number(value)}`;
			case 'number':
				return `${key}=${String(value)}`;
			default:
				// default behaviour
				return `${toKebabCase(key)}=${value}`;
		}
	}

	const baseURL = `https://stackblitz.com/edit/${id}`;
	const settingsString = makeSettingsString<IStackBlitzSettings>(settings, matchersCallback);
	const iframeURL = settingsString != '' ? baseURL.concat(`?${settingsString}`) : baseURL;
</script>

<div data-testid="wrapper" id="stackblitz-container-{id}" class="stackblitz-video-container">
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
	.stackblitz-video-container {
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
