<script lang="ts">
	export let content: string;
	export let lineClamp: number;
</script>

<div class="card__content">
	<p class="line-clamp" style:-webkit-line-clamp={lineClamp}>
		{content}
	</p>
</div>

<style>
	.line-clamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
</style>
