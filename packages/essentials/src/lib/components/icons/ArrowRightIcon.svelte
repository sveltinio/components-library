<script lang="ts">
	export let width = 24;
	export let height = 24;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	stroke-width="1.5"
	viewBox="0 0 24 24"
	fill="none"
	color="currentColor"
	{...$$restProps}
>
	<path
		d="M9 6L15 12L9 18"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
