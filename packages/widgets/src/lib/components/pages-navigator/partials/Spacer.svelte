<script lang="ts">
	import type { PagesNavigatorItem } from '../types.js';
	import { isNullish } from '@sveltinio/ts-utils/is';

	export let prev: PagesNavigatorItem;
	export let next: PagesNavigatorItem;
	export let spacer: boolean;

	// true is both the label the href props are valid
	const isValid = (obj: PagesNavigatorItem): boolean => {
		return !isNullish(obj.label) && !isNullish(obj.href) && !obj.href.includes('undefined');
	};
</script>

<div
	class="pagesnav__spacer"
	class:spacer--with-prev={spacer && !isValid(next)}
	class:spacer--with-next={spacer && !isValid(prev)}
	role="presentation"
/>
