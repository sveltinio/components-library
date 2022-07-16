<script lang="ts">
	export let baseURL: string;
	export let parent = '';
	export let currentTitle: string;
	export let iconColor = '#9ca3af';
	export let textColor = '#6b7280';
	export let hoverColor = '#374151';

	const toTitle = (text: string): string => {
		return text.charAt(0).toUpperCase() + text.slice(1);
	};

	let _iconColor = '';
	function handleMouseIconOver() {
		_iconColor = hoverColor;
	}

	function handleMouseIconOut() {
		_iconColor = iconColor;
	}

	let _textColor = '';
	function handleMouseTextOver() {
		_textColor = hoverColor;
	}

	function handleMouseTextOut() {
		_textColor = textColor;
	}
</script>

<nav aria-label="Breadcrumb">
	<ol>
		<li>
			<div>
				<a href={baseURL}>
					<svg
						class="home-icon"
						style:color={_iconColor}
						width="1.25rem"
						height="1.25rem"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						on:focus={handleMouseIconOver}
						on:mouseover={handleMouseIconOver}
						on:blur={handleMouseIconOut}
						on:mouseout={handleMouseIconOut}
					>
						<path
							d="M3 9.5L12 4L21 9.5"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<span class="sr-only">Home</span>
				</a>
			</div>
		</li>
		{#if parent != ''}
			<li>
				<div class="item">
					<svg
						class="arrow-icon"
						style:color={iconColor}
						width="20"
						height="20"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
						on:focus={handleMouseTextOver}
						on:mouseover={handleMouseTextOver}
						on:blur={handleMouseTextOut}
						on:mouseout={handleMouseTextOut}
					>
						<path
							d="M9 6L15 12L9 18"
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<a
						href="{baseURL}/{parent}"
						class="text-link"
						style:color={_textColor}
						data-testid="linkToParent">{toTitle(parent)}</a
					>
				</div>
			</li>
		{/if}
		<li>
			<div class="item">
				<svg
					class="arrow-icon"
					style:color={iconColor}
					width="20"
					height="20"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
				>
					<path
						d="M9 6L15 12L9 18"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
				<span
					class="text"
					style:color={textColor}
					aria-current="page"
					data-testid="currentPage">{toTitle(currentTitle)}</span
				>
			</div>
		</li>
	</ol>
</nav>

<style>
	nav {
		display: flex;
	}

	ol {
		display: flex;
		align-items: center;
		margin-right: 1rem;
		margin-left: 1rem;
		list-style: none;
	}

	.item {
		display: flex;
		align-items: center;
	}

	a {
		text-decoration: none;
	}

	.text,
	.text-link {
		margin-left: 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
			'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji';
	}

	.home-icon,
	.arrow-icon {
		flex-shrink: 0;
	}

	.arrow-icon {
		margin-left: 1rem;
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
