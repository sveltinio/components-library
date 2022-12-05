<script lang="ts">
	export let id: string;
	export let value: string;
	export let prefixChar: string;
	export let theme: string;
</script>

<li id="toc_item_{id}" class="list-item" data-testid="toc_item_{id}">
	<a
		class="toc-list-item-link toc-list-item-link-{theme}"
		href="#{id}"
		data-testid="toc_link_{id}"
		>{#if prefixChar}{prefixChar}&nbsp;{/if}{value}</a
	>
</li>
