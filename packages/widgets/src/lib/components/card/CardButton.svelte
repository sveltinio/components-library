<script lang="ts">
	export let label = 'Read More »';
	export let href: string;
	export let prefetch = false;
</script>

<div class="card-btn-wrapper" data-testid="card-button-link">
	<a
		{href}
		title={label}
		data-sveltekit-preload-data={prefetch ? 'hover' : ''}
		aria-label={label}
		class="card-btn">{label}</a
	>
</div>

<style>
	.card-btn-wrapper {
		width: var(--_btn-wrapper-width);
		height: var(--_btn-wrapper-height);
		padding-top: var(--_btn-wrapper-pt);
		padding-right: var(--_btn-wrapper-pr);
		padding-bottom: var(--_btn-wrapper-pb);
		padding-left: var(--_btn-wrapper-pl);
		margin-top: var(--_btn-wrapper-mt);
		margin-right: var(--_btn-wrapper-mr);
		margin-bottom: var(--_btn-wrapper-mb);
		margin-left: var(--_btn-wrapper-ml);
	}

	.card-btn {
		cursor: var(--_btn-cursor);
		display: flex;
		justify-content: var(--_btn-text-align);
		align-items: center;
		color: var(--_btn-color);
		font-size: var(--_btn-font-size);
		font-weight: var(--_btn-font-weight);
		line-height: var(--_btn-line-height);
		letter-spacing: var(--_btn-letter-spacing);
		text-decoration: var(--_btn-text-decoration);
		padding-top: var(--_btn-pt);
		padding-right: var(--_btn-pr);
		padding-bottom: var(--_btn-pb);
		padding-left: var(--_btn-pl);
		background-color: var(--_btn-bg-color);
		border-color: var(--_btn-border-color);
		border-style: var(--_btn-border-style);
		border-width: var(--_btn-border-width);
		border-radius: var(--_btn-border-radius);
	}
</style>
