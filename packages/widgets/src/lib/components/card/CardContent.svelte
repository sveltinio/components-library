<script lang="ts">
	export let lineClamp = '3';
</script>

<div class="card-content">
	<p style:-webkit-line-clamp={lineClamp} data-testid="card-text">
		<slot />
	</p>
</div>

<style>
	.card-content {
		background-color: var(--_content-bg-color);
		width: var(--_content-width);
		height: var(--_content-height);
		padding-top: var(--_content-pt);
		padding-right: var(--_content-pr);
		padding-bottom: var(--_content-pb);
		padding-left: var(--_content-pl);
		margin-top: var(--_content-mt);
		margin-right: var(--_content-mr);
		margin-bottom: var(--_content-mb);
		margin-left: var(--_content-ml);
	}

	.card-content p {
		color: var(--_content-color);
		font-size: var(--_content-font-size);
		line-height: var(--_content-line-height);
		-webkit-box-orient: vertical;
		display: -webkit-box;
		overflow: hidden;
	}
</style>
