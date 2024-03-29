<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/pages-navigator/variables.css';
	import '../../styles/components/pages-navigator/styles.css';
	import type { PagesNavigatorItem } from './types.js';
	import { retrieveCssClassNames } from '$lib/utils';
	import { isDefined } from '@sveltinio/ts-utils/is';
	import { mapToCssVars, hasProperties } from '@sveltinio/ts-utils/objects';
	import { Next, Previous, Spacer } from './partials/index.js';

	export let prev: PagesNavigatorItem;
	export let next: PagesNavigatorItem;
	export let placeholders = true;
	export let labels = true;
	export let spacer = false;
	export let prefetch: true | '' | 'hover' | 'off' | 'tap' | null | undefined = 'off';

	export let styles = {};
	const cssStyles = mapToCssVars(styles);
	if (cssStyles.isErr()) {
		throw new Error(cssStyles.error.message);
	}

	// ensure to show the labels at least
	if (!placeholders && !labels) {
		placeholders = false;
		labels = true;
	}

	const mandatoryKeys = ['label', 'href'];

	// avoid hacking reserverd css classes
	const reservedNames = ['sn-w-colors sn-w-c-pagesnav-vars sn-w-c-pagesnav'];
	const cssClasses = retrieveCssClassNames($$props.class, reservedNames);

	const isItemValid = (item: PagesNavigatorItem, mandatoryKeys: string[]): boolean => {
		return (
			isDefined(item.href) &&
			!item.href.includes('undefined') &&
			hasProperties(item, mandatoryKeys).unwrapOr(false)
		);
	};
</script>

<nav
	class="sn-w-colors sn-w-c-pagesnav-vars sn-w-c-pagesnav {cssClasses}"
	class:pagesnav__spacer--bottom={!prev.href || !next.href}
	style={cssStyles.value}
	aria-label="Pages navigation"
	data-testid="pagesnav_main"
>
	{#if isItemValid(prev, mandatoryKeys)}
		<Previous {prefetch} {prev} {next} {placeholders} {labels} {spacer}>
			<slot name="prevIcon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20px"
					height="20px"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					class="content__icon"
					color="currentColor"
					><path
						d="M18.5 12H6m0 0l6-6m-6 6l6 6"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</slot>
		</Previous>
	{/if}

	{#if spacer}
		<Spacer {spacer} {prev} {next} />
	{/if}

	{#if isItemValid(next, mandatoryKeys)}
		<Next {prefetch} {prev} {next} {placeholders} {labels} {spacer}>
			<slot name="nextIcon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="20px"
					height="20px"
					stroke-width="1.5"
					viewBox="0 0 24 24"
					fill="none"
					class="content__icon"
					color="currentColor"
					><path
						d="M6 12h12.5m0 0l-6-6m6 6l-6 6"
						stroke="currentColor"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/></svg
				>
			</slot>
		</Next>
	{/if}
</nav>
