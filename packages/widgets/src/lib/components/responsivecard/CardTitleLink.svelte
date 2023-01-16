<script lang="ts">
	export let title: string;
	export let href = '';
</script>

<a {href} aria-label="link to {title}" data-testid="card-title-link"
	><h2 data-testid="card-title">
		{title}
	</h2></a
>
