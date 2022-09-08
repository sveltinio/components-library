<script lang="ts">
	export let value: string;
</script>

<div class="preview">
	<div class="color" style="background: {value};" />
	{value}
</div>

<style>
	.preview {
		align-items: center;
		display: flex;
		font-family: 'Courier New', Courier, monospace;
	}

	.color {
		border-radius: 50%;
		flex-shrink: 0;
		width: 1rem;
		height: 1rem;
		margin-right: 0.8em;
	}
</style>
