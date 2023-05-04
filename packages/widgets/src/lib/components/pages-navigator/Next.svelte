<script lang="ts">
	import type { PagesNavigatorItem } from './types.js';
	import { isDefined } from '@sveltinio/ts-utils/is';
	import { hasProperties } from '@sveltinio/ts-utils/objects';
	import { capitalize } from '@sveltinio/ts-utils/strings';

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

	let nextTitle = next.title ?? next.label;

	const placeholderTxt = () => {
		return isDefined(next.placeholder)
			? capitalize(next.placeholder)
					.map((v) => v)
					.mapErr((e) => {
						throw new Error(e.message);
					})
			: 'Next';
	};

	const isNextOnly = hasProperties(prev, ['label', 'href'])
		.map((v) => v)
		.mapErr((e) => {
			throw new Error(e.message);
		});
</script>

<a
	data-sveltekit-preload-data={prefetch}
	href={next.href}
	title="link to {nextTitle}"
	class="link"
	class:next__only={!isNextOnly}
	class:next__only--with-spacer={spacer && !isNextOnly}
	aria-label="link to {nextTitle}"
	data-testid="link_to_next"
>
	<div class="content">
		<div class="content__next">
			{#if placeholders}
				<span class="content__placeholder">{placeholderTxt()}</span>
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
