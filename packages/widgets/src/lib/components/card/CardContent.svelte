<script lang="ts">
	export let content: string;
	export let lineClamp: number;
</script>

<div class="card__content" data-testid="card_content">
	<p class="line-clamp" style:-webkit-line-clamp={lineClamp} data-testid="card_content_text">
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
