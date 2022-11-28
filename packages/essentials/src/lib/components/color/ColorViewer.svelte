<script lang="ts">
	export let value: string;
	export let bordered = true;
</script>

<div class="preview" {...$$restProps}>
	<div class="color" class:bordered style="background: {value};" />
	{value}
</div>

<style>
	.preview {
		align-items: center;
		display: flex;
		font-family: 'Courier New', Courier, monospace;
	}

	.color {
		border: 1px solid transparent;
		border-radius: 50%;
		flex-shrink: 0;
		width: 1rem;
		height: 1rem;
		margin-right: 0.8em;
	}

	.bordered {
		--_border-color: var(--border-color, rgb(226, 232, 240)); /* slate-200 */
		border-color: var(--_border-color);
	}
</style>
