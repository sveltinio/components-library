<script lang="ts">
	export let title: string;
	export let full: boolean;
	export let isOpen: boolean;
</script>

<button
	class="btn"
	class:btn--full={full}
	aria-controls="items-list"
	aria-expanded={isOpen}
	data-testid="list_toggle_btn"
>
	<span class="btn__icon">
		{#if $$slots.leftSideIcon}
			<slot name="leftSideIcon" />
		{/if}
	</span>

	{title}

	<span
		class="btn__icon"
		class:icon-to-right={full}
		class:rotate90={isOpen}
		class:rotate0={!isOpen}
	>
		<slot name="rightSideIcon" />
	</span>
</button>
