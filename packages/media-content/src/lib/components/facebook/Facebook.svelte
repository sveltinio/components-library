<script lang="ts">
	import { onMount } from 'svelte';
	import type { IFacebookSettings, IFacebookVideoSettings } from '../../types';
	import {
		toKebabCase,
		isEmptyObject,
		isPropValueSet,
		isScriptLoaded,
		toID,
		isValidURL
	} from '../../utils';

	/**
	 * Embedded content type.
	 *
	 * Supported values are post or video
	 * The default value is post
	 */
	export let type = 'post';
	/**
	 * The id for the post or the video to embed.
	 *
	 * From the URL of the post or the video, the id is the substring after https://www.facebook.com/
	 *
	 * E.g.
	 * POST URL: https://www.facebook.com/20531316728/posts/10154009990506729/
	 * ID: 20531316728/posts/10154009990506729/
	 */
	export let id: string;
	/**
	 * Language code.
	 * You can change the language of the Embedded Video Player plugin by loading a localized version of the Facebook JavaScript SDK
	 *
	 * https://developers.facebook.com/docs/javascript/internationalization.
	 */
	export let langCode = 'en_US';
	export let fbScriptVersion = '13.0';
	/**
	 * These attributes control which post or video is embedded and how it looks and behaves.
	 *
	 * https://developers.facebook.com/docs/plugins/embedded-posts
	 * https://developers.facebook.com/docs/plugins/embedded-videos
	 */
	export let settings: IFacebookSettings | IFacebookVideoSettings = {};

	let scriptLoaded = false;
	const _id = isValidURL(id) ? toID(id) : id;
	let baseURL = `https://www.facebook.com/${_id}`;

	const scriptID = 'facebook-lib-script';
	const scriptSRC = `https://connect.facebook.net/${langCode}/sdk.js#xfbml=1&version=v${fbScriptVersion}`;
	const scriptNonce = 'b4hrDiHF';
	const identifier = baseURL.substring(baseURL.lastIndexOf('/' + 1)).replace(/\//g, '');

	async function addFacebookScript(id: string, src: string, nonce: string) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];
			const script = document.createElement('script');
			script.id = id;
			script.async = true;
			script.defer = true;
			script.src = src;
			script.nonce = nonce;

			head.appendChild(script);
		});
	}
	async function setOptionsProps(
		elem: HTMLElement,
		opts: IFacebookSettings | IFacebookVideoSettings
	) {
		Object.entries(opts).map(([key, val]) => {
			if (isPropValueSet(val)) {
				elem.setAttribute('data-' + toKebabCase(key), String(val));
			}
		});
	}

	onMount(async () => {
		try {
			if (!isScriptLoaded(scriptSRC)) {
				addFacebookScript(scriptID, scriptSRC, scriptNonce);
				scriptLoaded = true;
			}
			if (!isEmptyObject<IFacebookSettings | IFacebookVideoSettings>(settings)) {
				const targetElem = document.getElementById(`facebook-${type}-${identifier}`);
				setOptionsProps(targetElem, settings);
			}
		} catch (err) {
			return;
		}
	});
</script>

{#if !scriptLoaded}
	<div data-testid="fb-root" id="fb-root" />
{/if}
<div data-testid="wrapper" id="wrapper" class={$$props.class} style={$$props.style}>
	{#if type == 'post'}
		<div
			id="facebook-{type}-{identifier}"
			data-testid="fb-post"
			class="fb-post"
			data-href={baseURL}
		/>
	{:else if type == 'video'}
		<div
			id="facebook-{type}-{identifier}"
			data-testid="fb-video"
			class="fb-video"
			data-href={baseURL}
		/>
	{/if}
</div>
