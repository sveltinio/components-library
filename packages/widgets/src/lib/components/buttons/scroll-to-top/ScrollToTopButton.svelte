<script lang="ts">
	import './styles.postcss';
	import { stylesObjToCSSVars } from '../../../utils.js';

	export let showOnPx = 400;
	export let iconColor = '#ffffff';
	export let fillColor = '#4b5563';

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

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
</script>

<svelte:window on:scroll={handleOnScroll} />

<div
	class="sw__scroll_to_top sw__scroll_to_top_container"
	style={cssStyles}
	data-testid="scroll-to-top-container"
>
	<a
		class="bounce-btn animate-bounce"
		data-testid="bounce_btn"
		href="#top"
		aria-label="Back to top"
		on:click={goTop}
		style:color={iconColor}
		style:background-color={fillColor}
		class:hide={hidden}
		class:show={!hidden}
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
