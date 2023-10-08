<script lang="ts">
	import { onMount } from 'svelte';
	import { isBool, isEmpty } from '@sveltinio/ts-utils/is';
	import { contains } from '@sveltinio/ts-utils/collections';
	import { isHex } from '@sveltinio/ts-utils/colors';
	import { camelToKebab } from '@sveltinio/ts-utils/strings';
	import type { ICodePenSettings } from '../../types.js';
	import { isScriptLoaded } from '../../utils.js';

	/** The user who created the pen. */
	export let user: string;
	/** The id(slug) for the pen to embed. */
	export let id: string;
	/** The pen title. */
	export let title = '';
	/**
	 * To control how the embedded looks and behaves.
	 *
	 * https://blog.codepen.io/documentation/embedded-pens/
	 */
	export let settings: ICodePenSettings = {};

	let targetElem: HTMLElement;

	const scriptID = 'codepen-lib-script';
	const scriptSRC = 'https://cpwebassets.codepen.io/assets/embed/ei.js';
	const colorPropsList = [
		'borderColor',
		'tabBarColor',
		'tabLinkColor',
		'activeTabColor',
		'activeLinkColor',
		'linkLogoColor'
	];

	$: spanTitle = title != '' ? title : user;

	/**
	 * Adding the script would fail for example if the user is running
	 * and ad blocker. This Promise can handle that case.
	 */
	async function addCodepenScript(id: string, src: string) {
		return new Promise(() => {
			const head = document.head || document.getElementsByTagName('head')[0];

			const script = document.createElement('script');
			script.id = id;
			script.src = src;
			script.async = true;
			script.setAttribute('data-testid', 'codepen_lib_script');

			head.appendChild(script);
		});
	}

	async function setOptionsProps(elem: HTMLElement, opts: ICodePenSettings) {
		const [colorsProps, otherProps] = Object.entries(opts).reduce(
			(result, element) => {
				result[contains(element, colorPropsList) ? 0 : 1].push(element);
				return result;
			},
			[[], []]
		);

		Object.entries(Object.fromEntries(colorsProps)).map(([key, val]) => {
			if (!isEmpty(val) && isHex(val)) {
				const dataStr = camelToKebab(key).match(
					(s) => `data-${s}`,
					(e) => `${e.message}`
				);

				elem.setAttribute(dataStr, String(val));
			} else {
				console.error(key + ' is not a valid hex color');
				return;
			}
		});

		Object.entries(Object.fromEntries(otherProps)).map(([key, val]) => {
			if (isBool(val) || !isEmpty(val)) {
				const dataStr = camelToKebab(key).match(
					(s) => `data-${s}`,
					(e) => `${e.message}`
				);

				elem.setAttribute(dataStr, String(val));
			} else {
				return;
			}
		});
	}

	onMount(async () => {
		try {
			if (!isScriptLoaded(scriptSRC)) {
				addCodepenScript(scriptID, scriptSRC);
			}
			if (!isEmpty<ICodePenSettings>(settings)) {
				if (targetElem) setOptionsProps(targetElem, settings);
			}
		} catch (err) {
			if (targetElem) targetElem.remove();

			return;
		}
	});
</script>

<div
	id="wrapper-{user}-{id}"
	class={$$props.class}
	style={$$props.style}
	data-testid="codepen_wrapper"
>
	<p
		bind:this={targetElem}
		id="codepen-{user}-{id}"
		class="codepen"
		data-height={!isEmpty(settings.height) ? String(settings.height) : '400'}
		data-default-tab={!isEmpty(settings.defaultTab) ? settings.defaultTab : 'html,result'}
		data-slug-hash={id}
		data-user={user}
		style:height={!isEmpty(settings.height) ? String(settings.height) + 'px' : '400px'}
		style="box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
		data-testid="codepen_p_wrapper"
	>
		<span
			>See the Pen <a href="https://codepen.io/{user}/pen/{id}"> {spanTitle}</a> by
			{id} (<a href="https://codepen.io/{user}">@{user}</a>) on
			<a href="https://codepen.io">CodePen</a>.</span
		>
	</p>
</div>
