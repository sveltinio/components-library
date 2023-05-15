<script lang="ts">
	import { active } from '$lib/actions.js';
	import type { ListItem } from './types';

	export let id: number;
	export let item: ListItem;
	export let iconSize = '20px';

	export let prefetch = false;
	export let noOpener = true;
	export let noReferrer = true;

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	const prefetchValue: true | '' | 'hover' | 'off' | 'tap' | null | undefined =
		prefetch && !item.external ? `hover` : `off`;
	const target = item.external ? '_blank' : '_self';
</script>

<li class="list__item" data-testid="list_item_{item}">
	<a
		href={item.url}
		{target}
		data-sveltekit-preload-data={prefetchValue}
		class="item__link"
		use:active
		role="menuitem"
		data-testid="item_link_{id}"
	>
		{#if item.icon}
			<svelte:component this={item.icon} size={iconSize} />
		{/if}
		{item.label}</a
	>
</li>
