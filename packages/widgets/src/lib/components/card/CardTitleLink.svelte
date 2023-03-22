<script lang="ts">
	export let title: string;
	export let href: string;
	export let prefetch: true | '' | 'hover' | 'off' | 'tap' | null | undefined = 'off';
</script>

<div class="card__title" data-testid="card_title">
	<a data-sveltekit-preload-data={prefetch} {href} aria-label="link to {title}"
		><h2 data-testid="card_title_text">
			{title}
		</h2></a
	>
</div>
