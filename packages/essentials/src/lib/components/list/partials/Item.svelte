<script lang="ts">
	import { activeAction } from '$lib/actions.js';
	import { onMount } from 'svelte';
	import type { ListItem } from '../types.js';

	export let id: number;
	export let item: ListItem;
	export let iconSize = '20px';

	export let prefetch = false;
	export let noOpener = true;
	export let noReferrer = true;

	let aElem: HTMLAnchorElement;

	let relOptions = ['external'];
	if (noOpener) relOptions.push('noopener');
	if (noReferrer) relOptions.push('noreferrer');

	const prefetchValue: true | '' | 'hover' | 'off' | 'tap' | null | undefined =
		prefetch && !item.external ? `hover` : `off`;
	const target = item.external ? '_blank' : '_self';

	onMount(() => {
		if (item.external) {
			aElem.setAttribute('target', '_blank');

			let relOptions = ['external'];
			if (noOpener) relOptions.push('noopener');
			if (noReferrer) relOptions.push('noreferrer');
			aElem.setAttribute('rel', relOptions.join(' '));
		}
	});
</script>

<li class="list__item" data-testid="list_item_{item}">
	<a
		bind:this={aElem}
		href={item.url}
		{target}
		data-sveltekit-preload-data={prefetchValue}
		class="item__link"
		role="menuitem"
		use:activeAction
		data-testid="item_link_{id}"
	>
		{#if item.icon}
			<svelte:component this={item.icon} size={iconSize} />
		{/if}
		{item.label}</a
	>
</li>
