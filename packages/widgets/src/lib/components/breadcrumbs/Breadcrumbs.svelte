<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/breadcrumbs/variables.css';
	import '../../styles/components/breadcrumbs/styles.css';
	import {
		pathSegments,
		stylesObjToCSSVars,
		isValidClassName,
		capitalize,
		makeTitle
	} from '../../utils.js';

	export let url = '';
	export let showRootOnly = false;
	export let showCurrent = true;

	const baseURL = new URL(url).origin;
	const segments = pathSegments(url);
	const current = segments.pop() || '';

	const parents =
		segments.map((segment, segmentIndex) => {
			const previousParts = segments.slice(0, segmentIndex);
			return {
				label: segment,
				href:
					previousParts?.length > 0
						? `${previousParts?.join('/')}/${segment}`
						: `${segment}`
			};
		}) || [];

	export let styles = {};
	const cssStyles = stylesObjToCSSVars(styles);

	$: className = '';
	// avoid hacking default class names
	$: isValidClassName($$props.class ?? '', [
		'sn-w-colors',
		'sn-w-c-breadcrumbs-vars',
		'sn-w-c-breadcrumbs'
	])
		? (className = $$props.class)
		: (className = '');
</script>

<nav
	class="sn-w-colors sn-w-c-breadcrumbs-vars sn-w-c-breadcrumbs {className}"
	style={cssStyles}
	aria-label="Breadcrumb"
	data-testid="breadcrumbs_main"
>
	<ol class="list">
		{#if current != '' || showRootOnly}
			<li class="item">
				<a href={baseURL} aria-label="Home, top level page">
					<slot name="baseIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1.25rem"
							height="1.25rem"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
							class="icon icon__home"
							aria-hidden="true"
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
					<span class="sr--only">Home</span>
				</a>
			</li>
		{/if}
		{#each parents as parent}
			<li class="item">
				<span class="icon icon__divider">
					<slot name="dividerIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
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
				</span>
				<a
					href="{baseURL}/{parent.href}"
					class="is-parent"
					aria-label={capitalize(parent?.label)}
					data-testid="link_to_parent">{capitalize(parent?.label)}</a
				>
			</li>
		{/each}
		{#if showCurrent && current != ''}
			<li
				class="item is-current"
				aria-current="page"
				aria-label={makeTitle(current)}
				data-testid="current_page"
			>
				<span class="icon icon__divider">
					<slot name="dividerIcon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							stroke-width="1.5"
							viewBox="0 0 24 24"
							fill="none"
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
				</span>
				{makeTitle(current)}
			</li>
		{/if}
	</ol>
</nav>
