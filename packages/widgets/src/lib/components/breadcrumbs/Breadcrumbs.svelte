<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/breadcrumbs/variables.css';
	import '../../styles/components/breadcrumbs/styles.css';
	import { isEmpty } from '@sveltinio/ts-utils/is';
	import { capitalize, toTitle } from '@sveltinio/ts-utils/strings';
	import { mapToCssVars } from '@sveltinio/ts-utils/objects';
	import { pathSegments } from '@sveltinio/ts-utils/urls';
	import { contains } from '@sveltinio/ts-utils/collections';

	export let url = '';
	export let showRootOnly = false;
	export let showCurrent = true;

	const baseURL = new URL(url).origin;
	const segments = pathSegments(url);
	if (segments.isErr()) {
		throw new Error(segments.error.message);
	}

	const segmentsValues = segments.value;
	const current = segmentsValues.pop() || '';
	const parents = segmentsValues.map((segment, segmentIndex) => {
		const previousParts = segmentsValues.slice(0, segmentIndex);
		return {
			label: segment,
			href:
				previousParts?.length > 0 ? `${previousParts?.join('/')}/${segment}` : `${segment}`
		};
	});

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	/** ********************************************** **/
	const reservedCssClasses = ['sn-w-colors', 'sn-w-c-breadcrumbs-vars', 'sn-w-c-breadcrumbs'];
	const cssClassesArray = String($$props.class).split(' ');

	$: className = '';
	// avoid hacking default class names
	$: cssClassesArray.some((v) => contains(reservedCssClasses, v))
		? (className = '')
		: (className = $$props.class);
</script>

<nav
	class="sn-w-colors sn-w-c-breadcrumbs-vars sn-w-c-breadcrumbs {className}"
	style={cssStyles.value}
	aria-label="Breadcrumb"
	data-testid="breadcrumbs_main"
>
	<ol class="list">
		{#if !isEmpty(current) || showRootOnly}
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
			{@const arialLabelTxt = capitalize(parent?.label).unwrapOr('')}
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
					aria-label={arialLabelTxt}
					data-testid="link_to_parent">{arialLabelTxt}</a
				>
			</li>
		{/each}
		{#if showCurrent && !isEmpty(current)}
			{@const currentTitleTxt = toTitle(current).unwrapOr('')}
			<li
				class="item is-current"
				aria-current="page"
				aria-label={currentTitleTxt}
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
				{currentTitleTxt}
			</li>
		{/if}
	</ol>
</nav>
