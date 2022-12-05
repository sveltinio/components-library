<script lang="ts">
	export let lineClamp = '3';
</script>

<div class="card-content">
	<p style:-webkit-line-clamp={lineClamp} data-testid="card-text">
		<slot />
	</p>
</div>
