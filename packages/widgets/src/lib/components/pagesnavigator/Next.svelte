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

	let nextPlaceholderTxt = next.placeholder ?? 'next';
	let nextTitle = next.title ?? next.label;
</script>

<a
	href={next.href}
	title="link to {nextTitle}"
	class="link"
	class:next__only={!areRequiredDefined(prev)}
	class:next__only--with-spacer={spacer && !areRequiredDefined(prev)}
	aria-label="link to {nextTitle}"
	data-testid="link_to_next"
>
	<div class="content">
		<div class="content__next">
			{#if placeholders}
				<span class="content__placeholder">{capitalize(nextPlaceholderTxt)}</span>
			{/if}
			{#if labels}
				<p class="content__message" data-testid="next_message_text">
					{next.label}
				</p>
			{/if}
		</div>
		<!-- nextIcon slot-->
		<slot />
	</div>
</a>
