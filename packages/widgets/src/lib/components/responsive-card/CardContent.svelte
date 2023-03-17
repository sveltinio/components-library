<script lang="ts">
	export let content: string;
	export let lineClamp = 4;
</script>

<div class="card__content">
	<p style:-webkit-line-clamp={lineClamp}>
		{content}
	</p>
</div>
