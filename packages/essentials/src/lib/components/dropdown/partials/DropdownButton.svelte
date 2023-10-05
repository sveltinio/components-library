<script lang="ts">
	import { Button } from '../../button/index.js';
	export let label: string;
	export let iconSize = 20;
	export let iconStroke = 1.5;

	const buttonStyles = {
		'ghost-bg-color-hover': 'var(--gray-50)'
	};
</script>

<Button
	id="dropdown-button-{label.toLowerCase()}"
	variant="ghost"
	styles={buttonStyles}
	aria-label={label}
	aria-haspopup="true"
	aria-controls="menu-list"
>
	{label}

	<svg
		slot="rightIcon"
		xmlns="http://www.w3.org/2000/svg"
		width={iconSize}
		height={iconSize}
		class="btn__icon"
		stroke-width={iconStroke}
		viewBox="0 0 24 24"
		fill="none"
		color="currentColor"
	>
		<path
			d="M6 9L12 15L18 9"
			stroke="currentColor"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</Button>
