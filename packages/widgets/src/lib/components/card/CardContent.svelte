<script lang="ts">
	export let content: string;
	export let lineClamp: number;
</script>

<div class="card__content" data-testid="card_content">
	<p style:-webkit-line-clamp={lineClamp} data-testid="card_content_text">
		{content}
	</p>
</div>
