<script lang="ts">
	export let content: string;
	export let lineClamp = 2;
</script>

<div class="card__content" data-testid="card-content">
	<p style:-webkit-line-clamp={lineClamp} data-testid="card-content-text">
		{content}
	</p>
</div>
