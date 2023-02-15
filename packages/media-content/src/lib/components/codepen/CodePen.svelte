<script lang="ts">
	import { onMount } from 'svelte';
	import type { ICodePenSettings } from '../../types.js';
	import {
		toKebabCase,
		isValidValue,
		isEmptyObject,
		isValidHex,
		isPropValueSet,
		isScriptLoaded
	} from '../../utils.js';

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
				result[isValidValue<string>(element[0], colorPropsList) ? 0 : 1].push(element);
				return result;
			},
			[[], []]
		);

		Object.entries(Object.fromEntries(colorsProps)).map(([key, val]) => {
			if (isPropValueSet(val) && isValidHex(val)) {
				elem.setAttribute('data-' + toKebabCase(key), val);
			} else {
				console.error(key + ' is not a valid hex color');
				return;
			}
		});

		Object.entries(Object.fromEntries(otherProps)).map(([key, val]) => {
			if (isPropValueSet(val)) {
				elem.setAttribute('data-' + toKebabCase(key), val);
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
			if (!isEmptyObject<ICodePenSettings>(settings)) {
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
		data-height={isPropValueSet(settings.height) ? String(settings.height) : '400'}
		data-default-tab={isPropValueSet(settings.defaultTab) ? settings.defaultTab : 'html,result'}
		data-slug-hash={id}
		data-user={user}
		style:height={isPropValueSet(settings.height) ? String(settings.height) + 'px' : '400px'}
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
