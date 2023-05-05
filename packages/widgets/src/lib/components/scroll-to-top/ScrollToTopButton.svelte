<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/scroll-to-top/variables.css';
	import '../../styles/components/scroll-to-top/styles.css';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { contains } from '@sveltinio/ts-utils/collections';

	export let showOnPx = 400;
	export let iconColor = '#ffffff';
	export let fillColor = '#4b5563';
	export let shape = 'circle';
	export let bounce = false;

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	let hidden = true;

	function goTop(): void {
		document.body.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
	}

	function scrollContainer(): HTMLElement {
		return document.documentElement || document.body;
	}

	function handleOnScroll(): void {
		if (!scrollContainer()) {
			return;
		}
		hidden = scrollContainer().scrollTop > showOnPx ? false : true;
	}

	/** ********************************************** **/
	const reservedCssClasses = ['sn-w-colors', 'sn-w-c-sttb-vars', 'sn-w-c-sttb'];
	const cssClassesArray = String($$props.class).split(' ');

	$: className = '';
	// avoid hacking default class names
	$: cssClassesArray.some((v) => contains(reservedCssClasses, v))
		? (className = '')
		: (className = $$props.class);
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="sn-w-colors sn-w-c-sttb-vars sn-w-c-sttb {className}"
	style={cssStyles.value}
	data-testid="scroll_to_top_main"
>
	<a
		class="btn"
		class:circle={shape == 'circle'}
		class:rounded={shape == 'rounded'}
		class:square={shape == 'square'}
		class:bounce
		href="#top"
		aria-label="Back to top"
		on:click={goTop}
		style:color={iconColor}
		style:background-color={fillColor}
		class:hide={hidden}
		class:show={!hidden}
		data-testid="sct_btn"
	>
		<slot name="icon">
			<svg
				width="24"
				height="24"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M12 16V8M12 8L15.5 11.5M12 8L8.5 11.5"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
				<path
					d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</slot>
	</a>
</div>
