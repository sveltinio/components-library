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
		margin-top: var(--_item-mt);
		margin-right: var(--_item-mr);
		margin-bottom: var(--_item-mb);
		margin-left: var(--_item-ml);

		border-top-width: var(--_item-border-t-width);
		border-top-style: var(--_item-border-t-style);
		border-top-color: var(--_item-border-t-color);
		border-right-width: var(--_item-border-r-width);
		border-right-style: var(--_item-border-r-style);
		border-right-color: var(--_item-border-r-color);
		border-bottom-width: var(--_item-border-b-width);
		border-bottom-style: var(--_item-border-b-style);
		border-bottom-color: var(--_item-border-b-color);
		border-left-width: var(--_item-border-l-width);
		border-left-style: var(--_item-border-l-style);
		border-left-color: var(--_item-border-l-color);
		border-radius: var(--_item_border-radius);
	}

	a.toc-list-item-link {
		display: block;
		text-decoration: var(--_item-text-decoration);
		padding-top: var(--_item-pt);
		padding-right: var(--_item-pr);
		padding-bottom: var(--_item-pb);
		padding-left: var(--_item-pl);
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
