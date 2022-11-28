<script>
	export let altText = 'list icon';
	export let size = '1.5em';
	export let color = '';
	$: fillColor = color != '' ? color : 'none';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	stroke-width={1.5}
	viewBox="0 0 24 24"
	fill={fillColor}
	aria-hidden="true"
	aria-labelledby={altText}
	class={$$props.class}
	style={$$props.style}
	on:click
	on:dblclick
	><path d="M8 6L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
	<path
		d="M4 6.01L4.01 5.99889"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M4 12.01L4.01 11.9989"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d="M4 18.01L4.01 17.9989"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/> <path d="M8 12L20 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
	<path
		d="M8 18L20 18"
		stroke="currentColor"
		stroke-linecap="round"
		stroke-linejoin="round"
	/></svg
>
