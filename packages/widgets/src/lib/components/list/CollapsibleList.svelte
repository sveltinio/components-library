<script lang="ts">
	export let headerText: string;
	export let textColor = '#000000';
	export let bgColor = '#f8fafc';
	export let bgColorHover = '#f1f5f9';
	export let borderColorFocus = '#8098fb';

	let expanded = false;
	let _bgColor = bgColor;
	let _borderColor = '';

	const toggleExpand = () => (expanded = !expanded);

	function handleMouseOver() {
		_bgColor = bgColorHover;
	}

	function handleFocus() {
		_borderColor = borderColorFocus;
	}

	function handleMouseOut() {
		_bgColor = bgColor;
	}

	function handleBlur() {
		_borderColor = '';
	}
</script>

<div>
	<button
		aria-expanded={expanded}
		on:click={toggleExpand}
		on:focus={handleFocus}
		on:mouseover={handleMouseOver}
		on:blur={handleBlur}
		on:mouseout={handleMouseOut}
		class="toggleButton"
		style:background-color={_bgColor}
		style:border-left-color={_borderColor}
		data-testid="toggleBtn"
	>
		<span class="header" style:color={textColor} data-testid="headerText">
			{headerText}
		</span>

		<svg
			id="nav-arrow-down"
			width="24"
			height="24"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			class="icon"
			class:hidden={expanded}
			class:block={!expanded}
			style:color={textColor}
			data-testid="arrowDown"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 9L12 15L18 9"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>

		<svg
			id="nav-arrow-up"
			width="24"
			height="24"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			fill="none"
			class="icon"
			class:hidden={!expanded}
			class:block={expanded}
			style:color={textColor}
			data-testid="arrowUp"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 15L12 9L18 15"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</button>

	<div
		class="items-wrapper"
		class:hidden={!expanded}
		style:border-left-color={borderColorFocus}
		data-testid="itemsWrapper"
	>
		<slot />
	</div>
</div>

<style>
	.toggleButton {
		display: inline-flex;
		align-items: center;
		width: 100%;
		padding-right: 1rem;
		border-color: transparent;
		border-left-width: 2px;
		border-left-style: solid;
	}

	.toggleButton:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.header {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 0 0.5rem 1.5rem;
		font-size: 1rem;
	}

	.icon {
		display: inline;
		width: 1.25rem;
		height: 1.25rem;
		margin-left: auto;
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 200ms;
	}

	.hidden {
		display: none;
	}

	.block {
		display: block;
	}

	.items-wrapper {
		padding: 0.5rem 0 0.5rem 1.5rem;
		border-left-width: 1px;
		border-left-style: solid;
	}
</style>
