<script lang="ts">
	export let id: string;
	export let value: string;
	export let prefixChar: string;
</script>

<li id="toc_item_{id}" class="list__item" role="none" data-testid="toc_item_{id}">
	<a href="#{id}" role="menuitem" data-testid="toc_link_{id}"
		>{#if prefixChar}{prefixChar}&nbsp;{/if}{value}</a
	>
</li>
