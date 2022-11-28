<script lang="ts">
	export let width = 24;
	export let height = 24;
</script>

<svg
	{width}
	{height}
	stroke-width="1.5"
	viewBox="0 0 24 24"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
>
	<path
		d="M6 9L12 15L18 9"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
