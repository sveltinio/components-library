<script lang="ts">
	export let title: string;
	export let href = '';
</script>

<a {href} data-testid="card-title-link"
	><h2 data-testid="card-title">
		{title}
	</h2></a
>
