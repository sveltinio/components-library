<script>
	export let title;

	let expanded = false;

	const toggleExpand = () => (expanded = !expanded);
</script>

<div>
	<button
		class="toggleButton"
		data-testid="toggleBtn"
		aria-expanded={expanded}
		on:click={toggleExpand}
	>
		<slot name="leftIcon" />

		{title}

		<slot name="arrowDown">
			<svg
				id="nav-arrow-down"
				width="24"
				height="24"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				class="arrow-icon"
				class:hidden={expanded}
				class:block={!expanded}
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
		</slot>
		<slot name="arrowUp">
			<svg
				id="nav-arrow-up"
				width="24"
				height="24"
				stroke-width="1.5"
				viewBox="0 0 24 24"
				fill="none"
				class="arrow-icon"
				class:hidden={!expanded}
				class:block={expanded}
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
		</slot>
	</button>

	<div class="items-wrapper" class:hidden={!expanded} data-testid="itemsWrapper">
		<slot name="content" />
	</div>
</div>

<style>
	.toggleButton {
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0.5rem /* 8px */;
		font-weight: 500;
		font-size: 0.875rem /* 14px */;
		line-height: 1.25rem /* 20px */;
		border-radius: 0.375rem /* 6px */;
		--_color: var(--color, rgb(75 85 99)); /* gray-600 */
		color: var(--_color);
	}

	.toggleButton:hover {
		--_color: var(--color, rgb(17 24 39));
		--_bg-color: var(--bg-color, rgb(249 250 251));

		color: var(--_color);
		background-color: var(--_bg-color);
	}

	.arrow-icon {
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
