<script lang="ts">
	import { onMount } from 'svelte';
	import { isEmpty, isDefined } from '@sveltinio/ts-utils/is';
	import { camelToKebab } from '@sveltinio/ts-utils/strings';
	import { isUrl } from '@sveltinio/ts-utils/urls';
	import type { IFacebookSettings, IFacebookVideoSettings } from '../../types.js';
	import { toID, isScriptLoaded } from '../../utils.js';

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
	export let fbScriptVersion = '16.0';
	/**
	 * To control how the embedded post or video look and behave.
	 *
	 * https://developers.facebook.com/docs/plugins/embedded-posts
	 * https://developers.facebook.com/docs/plugins/embedded-videos
	 */
	export let settings: IFacebookSettings = {};

	let scriptLoaded = false;
	let fbElem: HTMLElement;
	let _id = isUrl(id) ? toID(id) : id;
	let baseURL = `https://www.facebook.com/${_id}`;

	const scriptID = 'facebook-lib-script';
	const scriptSRC = `https://connect.facebook.net/${langCode}/sdk.js#xfbml=1&version=v${fbScriptVersion}`;
	const scriptNonce = 'b4hrDiHF';
	const identifier = baseURL.substring(baseURL.lastIndexOf('/' + 1)).replace(/\//g, '');

	/**
	 * Adding the script would fail for example if the user is running
	 * and ad blocker. This Promise can handle that case.
	 */
	async function addFacebookScript(id: string, src: string, nonce: string) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];
			const script = document.createElement('script');
			script.id = id;
			script.async = true;
			script.crossOrigin = 'anonymous';
			script.defer = true;
			script.src = src;
			script.nonce = nonce;
			script.setAttribute('data-testid', 'facebook_lib_script');

			head.appendChild(script);
		});
	}

	async function setOptionsProps(
		elem: HTMLElement,
		opts: IFacebookSettings | IFacebookVideoSettings
	) {
		Object.entries(opts).map(([key, val]) => {
			if (isDefined(val)) {
				const dataStr = camelToKebab(key).match(
					(s) => `data-${s}`,
					(e) => `${e.message}`
				);
				elem.setAttribute(dataStr, String(val));
			}
		});
	}

	onMount(async () => {
		try {
			if (!isScriptLoaded(scriptSRC)) {
				addFacebookScript(scriptID, scriptSRC, scriptNonce);
				scriptLoaded = true;
			}

			if (isDefined(settings) && !isEmpty(settings)) {
				if (fbElem) {
					setOptionsProps(fbElem, settings);
				}
			}

			scriptLoaded = true;
		} catch (err) {
			if (fbElem) fbElem.remove();

			return;
		}
	});
</script>

{#if !scriptLoaded}
	<div data-testid="fb-root" id="fb-root" />
{/if}
<div id="wrapper" class={$$props.class} style={$$props.style} data-testid="fb_wrapper">
	{#if type == 'post'}
		<div
			bind:this={fbElem}
			id="facebook-{type}-{identifier}"
			data-href={baseURL}
			class="fb-post"
			data-testid="fb_post"
		/>
	{:else if type == 'video'}
		<div
			bind:this={fbElem}
			id="facebook-{type}-{identifier}"
			data-href={baseURL}
			class="fb-video"
			data-testid="fb_video"
		/>
	{/if}
</div>
