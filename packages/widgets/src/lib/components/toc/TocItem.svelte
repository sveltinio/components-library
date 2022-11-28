<script lang="ts">
	export let id = '';
	export let value = '';
	export let prefixChar: string;
	export let theme: string;
</script>

<li id={`toc_item_${id}`} data-testid={`toc_item_${id}`}>
	<a
		class="toc-list-item-link toc-list-item-link-{theme}"
		href={`#${id}`}
		data-testid={`toc_link_${id}`}
		>{#if prefixChar}{prefixChar}&nbsp;{/if}{value}</a
	>
</li>

<style>
	li {
		position: relative;
		margin: 0;
	}

	a.toc-list-item-link {
		display: block;
		text-decoration: var(--_item-text-decoration);
		padding-top: var(--_item-pt);
		padding-right: var(--_item-pr);
		padding-bottom: var(--_item-pb);
		padding-left: var(--_item-pl);
		border-radius: 0.375rem; /* 6px */
	}

	a.toc-list-item-link-default,
	a.toc-list-item-link-sveltin {
		color: var(--_item-color);
	}

	a:hover.toc-list-item-link-default,
	a:hover.toc-list-item-link-sveltin {
		background-color: var(--_item-bg-color-hover);
		text-decoration: var(--_item-text-decoration-hover);
	}
</style>
