<script lang="ts">
	import type { PagesNavigatorItem } from './types.js';
	import { capitalize, areRequiredDefined } from '../../utils.js';

	export let prev: PagesNavigatorItem;
	export let next: PagesNavigatorItem;
	export let placeholders: boolean;
	export let labels: boolean;
	export let spacer: boolean;

	// ensure to show the labels at least
	if (!placeholders && !labels) {
		placeholders = false;
		labels = true;
	}

	let prevPlaceholderTxt = prev.placeholder ?? 'prev';
	let prevAltText = prev.alt ?? prev.label;
</script>

<a
	href={prev.href}
	title="link to {prevAltText}"
	aria-label="link to {prevAltText}"
	class="link"
	class:prev__only={!areRequiredDefined(next)}
	class:prev__only--with-spacer={spacer && !areRequiredDefined(next)}
	data-testid="link-to-previous"
>
	<div class="content">
		<!-- prevIcon slot-->
		<slot />

		<div class="content__previous">
			{#if placeholders}
				<span class="content__placeholder">{capitalize(prevPlaceholderTxt)}</span>
			{/if}
			{#if labels}
				<p class="content__message" data-testid="previous-message-text">
					{prev.label}
				</p>
			{/if}
		</div>
	</div>
</a>
