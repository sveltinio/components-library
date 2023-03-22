<script lang="ts">
	import type { PagesNavigatorItem } from './types.js';
	import { capitalize, areRequiredDefined } from '../../utils.js';

	export let prev: PagesNavigatorItem;
	export let next: PagesNavigatorItem;
	export let placeholders: boolean;
	export let labels: boolean;
	export let spacer: boolean;
	export let prefetch: true | '' | 'hover' | 'off' | 'tap' | null | undefined;

	// ensure to show the labels at least
	if (!placeholders && !labels) {
		placeholders = false;
		labels = true;
	}

	let prevPlaceholderTxt = prev.placeholder ?? 'prev';
	let prevTitle = prev.title ?? prev.label;
</script>

<a
	data-sveltekit-preload-data={prefetch}
	href={prev.href}
	title="link to {prevTitle}"
	class="link"
	class:prev__only={!areRequiredDefined(next)}
	class:prev__only--with-spacer={spacer && !areRequiredDefined(next)}
	aria-label="link to {prevTitle}"
	data-testid="link_to_previous"
>
	<div class="content">
		<!-- prevIcon slot-->
		<slot />

		<div class="content__previous">
			{#if placeholders}
				<span class="content__placeholder">{capitalize(prevPlaceholderTxt)}</span>
			{/if}
			{#if labels}
				<p class="content__message" data-testid="previous_message_text">
					{prev.label}
				</p>
			{/if}
		</div>
	</div>
</a>
