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
		color: #ffffff;
		background-color: #f8fafc;
		width: 100%;
		height: auto;
		padding: 1.75rem 1.75rem 0 1.75rem;
	}

	p {
		color: #475569;
		font-size: 1rem;
		line-height: 1.75rem;
		margin-bottom: 0.25rem;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		overflow: hidden;
	}
</style>
