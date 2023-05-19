<script lang="ts">
	import type { PagesNavigatorItem } from '../types.js';
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

	let prevTitle = prev.title ?? prev.label;

	const placeholderTxt = () => {
		return isDefined(prev.placeholder)
			? capitalize(prev.placeholder)
					.map((v) => v)
					.mapErr((e) => {
						throw new Error(e.message);
					})
			: 'Prev';
	};

	const isPrevOnly = hasProperties(next, ['label', 'href'])
		.map((v) => v)
		.mapErr((e) => {
			throw new Error(e.message);
		});
</script>

<a
	data-sveltekit-preload-data={prefetch}
	href={prev.href}
	title="link to {prevTitle}"
	class="link"
	class:prev__only={!isPrevOnly}
	class:prev__only--with-spacer={spacer && !isPrevOnly}
	aria-label="link to {prevTitle}"
	data-testid="link_to_previous"
>
	<div class="content">
		<!-- prevIcon slot-->
		<slot />

		<div class="content__previous">
			{#if placeholders}
				<span class="content__placeholder">{placeholderTxt()}</span>
			{/if}
			{#if labels}
				<p class="content__message" data-testid="previous_message_text">
					{prev.label}
				</p>
			{/if}
		</div>
	</div>
</a>
