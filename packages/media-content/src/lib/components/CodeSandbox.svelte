<script lang="ts">
	import type { ICodeSandboxSettings } from '../types';
	import { isCommaSepareted, makeSettingsString, toCommaSepareted } from '../utils';

	/** The id for the sandbox to embed. */
	export let id: string;
	/** The height of the container. */
	export let height = 400;
	/**
	 * These attributes control which sandbox is embedded and how it looks and behaves.
	 *
	 * https://codesandbox.io/docs/embedding#generate-an-embed-url
	 */
	export let settings: ICodeSandboxSettings = {};

	function matchersCallback(key: string, value: string): string {
		if (key === 'highlights' || key === 'module') {
			if (!isCommaSepareted(value)) {
				return `${key}=${toCommaSepareted(value)}`;
			}
		}
		return `${key}=${value}`;
	}

	const baseURL = `https://codesandbox.io/embed/${id}`;
	const settingString = makeSettingsString<ICodeSandboxSettings>(settings, matchersCallback);
	const iframeURL = settingString != '' ? baseURL.concat(`?${settingString}`) : baseURL;
</script>

<div
	data-testid="wrapper"
	id="codesandbox-container-${id}"
	class={$$props.class}
	style:height={`${height}px`}
	style:position="relative"
	style:width="100%"
	style={$$props.style}
>
	<iframe data-testid="iframe" class="frame" title="codeSandbox-${id}" src={iframeURL} />
</div>

<style>
	.frame {
		position: absolute;
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 4px;
		overflow: hidden;
	}
</style>
