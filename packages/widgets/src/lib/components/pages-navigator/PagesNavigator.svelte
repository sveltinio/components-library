<script lang="ts">
	import '../../styles/base.css';
	import '../../styles/components/pages-navigator/variables.css';
	import '../../styles/components/pages-navigator/styles.css';
	import type { PagesNavigatorItem } from './types.js';
	import { mapToCssVars, hasProperties } from '@sveltinio/ts-utils/objects';
	import { contains } from '@sveltinio/ts-utils/collections';
	import Spacer from './Spacer.svelte';
	import Previous from './Previous.svelte';
	import Next from './Next.svelte';

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

	/** ********************************************** **/
	const reservedCssClasses = ['sn-w-colors sn-w-c-pagesnav-vars sn-w-c-pagesnav'];
	const cssClassesArray = String($$props.class).split(' ');

	$: className = '';
	// avoid hacking default class names
	$: cssClassesArray.some((v) => contains(reservedCssClasses, v))
		? (className = '')
		: (className = $$props.class);
</script>

<nav
	class="sn-w-colors sn-w-c-pagesnav-vars sn-w-c-pagesnav {className}"
	class:pagesnav__spacer--bottom={!prev.href || !next.href}
	style={cssStyles.value}
	aria-label="Pages navigation"
	data-testid="pagesnav_main"
>
	{#if hasProperties(prev, mandatoryKeys).unwrapOr(false)}
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

	{#if hasProperties(next, mandatoryKeys).unwrapOr(false)}
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
