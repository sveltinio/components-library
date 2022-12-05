<script lang="ts">
	export let label = 'Read More »';
	export let href: string;
	export let prefetch = false;
</script>

<div class="card-btn-wrapper" data-testid="card-button-link">
	<a
		{href}
		title={label}
		data-sveltekit-preload-data={prefetch ? 'hover' : 'off'}
		aria-label={label}
		class="card-btn">{label}</a
	>
</div>
