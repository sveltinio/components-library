<script lang="ts">
	export let date: string;
	export let withCover = false;
</script>

<p class="badge" class:no-cover={!withCover} class:cover={withCover}>
	<time datetime="2020-12-02">{date}</time>
</p>

<style>
	.badge {
		position: relative;
		display: inline-block;
		color: var(--_badge-color);
		font-size: var(--_badge-font-size);
		font-weight: var(--_badge-font-weight);
		line-height: var(--_badge-line-height);
		text-transform: var(--_badge-text-transform);
		border-radius: var(--_badge-border-radius);
		background-color: var(--_badge-bg-color);
		padding-top: var(--_badge-pt);
		padding-right: var(--_badge-pr);
		padding-bottom: var(--_badge-pb);
		padding-left: var(--_badge-pl);
	}

	.no-cover {
		margin-top: var(--_badge-mt);
		margin-left: var(--_badge-ml);
	}

	.cover {
		position: absolute;
		top: var(--_badge-absolute-t);
		right: var(--_badge-absolute-r);
		padding: 0.5rem 0.75rem;
	}
</style>
