<script lang="ts">
	export let title: string;
	export let href = '';
</script>

<div class="card__title" data-testid="card-title">
	<a {href}
		><h2 data-testid="card-title-text">
			{title}
		</h2></a
	>
</div>
