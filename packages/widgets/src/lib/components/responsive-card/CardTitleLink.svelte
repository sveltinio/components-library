<script lang="ts">
	export let title: string;
	export let href = '';
</script>

<a {href} aria-label="link to {title}" data-testid="card_title_link"
	><h2 data-testid="card_title">
		{title}
	</h2></a
>
