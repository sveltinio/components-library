<script lang="ts">
	import './styles.css';
	import { stylesObjToCSSVars, capitalize } from '../../utils.js';

	export let baseURL = '/';
	export let parent = '';
	export let current: string;

	let themeClassName = '';
	export { themeClassName as theme };

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);
</script>

<nav
	class="sw__breadcrumbs sw__breadcrumbs__main {themeClassName}"
	style={cssStyles}
	aria-label="breadcrumb"
	data-testid="breadcrumbs_main"
>
	<ol class="list">
		<li class="item">
			<a href={baseURL}>
				<slot name="base-icon">
					<svg
						class="icon icon_home"
						width="1.25rem"
						height="1.25rem"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
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
				</slot>
				<span class="sr_only">Home</span>
			</a>
		</li>
		{#if parent}
			<li class="item">
				<slot name="divider-icon">
					<svg
						class="icon icon_divider"
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
				</slot>
				<a href="{baseURL}/{parent}" class="parent" data-testid="linkToParent"
					>{capitalize(parent)}</a
				>
			</li>
		{/if}
		<li class="item">
			<slot name="divider-icon">
				<svg
					class="icon icon_divider"
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
			</slot>
			<span class="current" aria-current="page" data-testid="currentPage"
				>{capitalize(current)}</span
			>
		</li>
	</ol>
</nav>
