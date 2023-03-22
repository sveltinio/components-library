<script lang="ts">
	export let title: string;
	export let href: string;
	export let prefetch: true | '' | 'hover' | 'off' | 'tap' | null | undefined = 'off';
</script>

<a
	data-sveltekit-preload-data={prefetch}
	{href}
	aria-label="link to {title}"
	data-testid="card_title_link"
	><h2 data-testid="card_title">
		{title}
	</h2></a
>
