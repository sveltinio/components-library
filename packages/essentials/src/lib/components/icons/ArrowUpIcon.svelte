<script lang="ts">
	export let width = '24';
	export let height = '24';
</script>

<svg
	class="icon"
	{width}
	{height}
	stroke-width="1.5"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<path
		d="M6 15L12 9L18 15"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>

<style>
	.icon {
		--_color: var(--color, rgb(51 65 85)); /* slate-700 */
		margin-right: -0.25rem /* -4px */;
		margin-left: 0.5rem /* 8px */;
		height: 1.25rem /* 20px */;
		width: 1.25rem /* 20px */;
		color: var(--_color);
	}
</style>
