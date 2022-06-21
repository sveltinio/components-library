<script lang="ts">
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

	let hidden = true;
	export let showOnPx = 400;
	export let iconColor = '#ffffff';
	export let fillColor = '#4b5563';
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="scroll-to-top">
	<a
		data-testid="scrollBtn"
		href="#top"
		aria-label="Back to top"
		on:click={goTop}
		style:color={iconColor}
		style:background-color={fillColor}
		class="animate-bounce"
		class:hide={hidden}
		class:show={!hidden}
	>
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
	</a>
</div>

<style>
	.scroll-to-top {
		z-index: 50;
	}

	.scroll-to-top a {
		position: fixed;
		bottom: 0px;
		right: 0px;
		padding: 0.5rem;
		margin: 1.25rem;
		border-radius: 9999px;
		transition-property: all;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 1000ms;
	}

	.scroll-to-top a:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.hide {
		opacity: 0;
		transform: translateY(6rem);
	}

	.show {
		opacity: 1;
		transform: translateY(0.5rem);
	}

	.animate-bounce {
		animation: bounce 1s infinite;
	}

	@keyframes bounce {
		0%,
		100% {
			transform: translateY(-25%);
			animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
		}
		50% {
			transform: none;
			animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
		}
	}
</style>
