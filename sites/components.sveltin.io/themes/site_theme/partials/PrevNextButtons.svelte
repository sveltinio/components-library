<script lang="ts">
	import type { ResourceContent } from '@sveltinio/widgets/types';

	export let next: ResourceContent;
	export let previous: ResourceContent;

	export let withBorderTop = false;
	export let withBorderBottom = false;
</script>

<dl
	data-testid="prevnext-container"
	class:bottom-spacer={!previous.metadata.title || !next.metadata.title}
	class:border-t={withBorderTop}
	class:border-b={withBorderBottom}
	class="prevnext-container {$$props.class}"
>
	<div>
		{#if previous.metadata.title}
			<dt class="description">Previous</dt>
			<dd>
				<a
					href={`/${previous.resource}/${previous.metadata.slug}`}
					alt="link to {previous.metadata.title}"
					title="link to {previous.metadata.title}"
					aria-label="link to {previous.metadata.title}"
					class="link-item text-left"
				>
					« {previous.metadata.title}
				</a>
			</dd>
		{/if}
	</div>
	<div>
		{#if next.metadata.title}
			<dt class="description">Next</dt>
			<dd>
				<a
					href={`/${next.resource}/${next.metadata.slug}`}
					alt="link to {next.metadata.title}"
					title="link to {next.metadata.title}"
					aria-label="link to {next.metadata.title}"
					class="link-item text-right"
				>
					{next.metadata.title} »
				</a>
			</dd>
		{/if}
	</div>
</dl>

<style>
	.prevnext-container {
		--_bg-color: var(--bg-color, rgb(255 255 255));
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-top: 3rem;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		background-color: var(--_bg-color);
	}

	.description {
		--_label-color: var(--label-color, rgb(51 65 85)); /* slate-700 */
		color: var(--_label-color);
		font-size: 0.875rem; /* 14px */
		line-height: 1.25rem; /* 20px */
		font-weight: 600;
	}

	.border-t {
		--_border-top-width: var(--border-top-width, 2px);
		--_border-top-style: var(--border-top-style, solid);
		--_border-top-color: var(--border-top-color, rgb(71 85 105));
		border-top: var(--_border-top-width) var(--_border-top-style) var(--_border-top-color);
	}

	.border-b {
		--_border-bottom-style: var(--border-top-style, solid);
		--_border-bottom-width: var(--border-top-width, 1px);
		--_border-bottom-color: var(--border-top-color, rgb(203 213 225));
		border-bottom: var(--_border-bottom-width) var(--_border-bottom-style)
			var(--_border-bottom-color);
	}

	.text-left {
		text-align: left;
	}

	.text-right {
		text-align: right;
	}

	.link-item {
		--_color: var(--color, rgb(100 116 139)); /* slate-500 */
		text-decoration: none;
		color: var(--_color);
		font-size: 1rem; /* 16px */
		line-height: 1.5rem; /* 24px */
		font-weight: 500;
	}

	.link-item:hover {
		--_color-hover: var(--color-hover, rgb(71 85 105)); /* slate-600 */
		color: var(--_color-hover);
		cursor: pointer;
	}
</style>
