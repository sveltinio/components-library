<script lang="ts">
	export let toggleArrowUp: string;
</script>

<svg
	class="icon {toggleArrowUp}"
	width="24"
	height="24"
	stroke-width="1.5"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		d="M6 15L12 9L18 15"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style>
	.show {
		display: block;
	}

	.hide {
		display: none;
	}

	.icon {
		--_icon-color: var(--icon-color, rgb(14 116 144 / 1));
		margin-right: -0.25rem /* -4px */;
		margin-left: 0.5rem /* 8px */;
		height: 1.25rem /* 20px */;
		width: 1.25rem /* 20px */;
		color: var(--_icon-color);
	}
</style>
