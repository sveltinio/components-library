<script lang="ts">
	export let id: string;
	export let value: string;
	export let prefixChar: string;
</script>

<li id="toc_item_{id}" class="list__item" data-testid="toc-item-{id}">
	<a class="item__link" href="#{id}" data-testid="toc-link-{id}"
		>{#if prefixChar}{prefixChar}&nbsp;{/if}{value}</a
	>
</li>
