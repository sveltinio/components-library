<script lang="ts">
	import type { ResourceContent } from '../types';

	export let item: ResourceContent;
	export let lineClamp = '3';
</script>

<div class="card" id={`card-${item.metadata.slug}`}>
	{#if item.metadata.cover}
		<div class="card-header">
			<img
				src={`/resources/${item.resource}/${item.metadata.slug}/${item.metadata.cover}`}
				alt={`cover for ${item.metadata.title}`}
				title={`cover for ${item.metadata.title}`}
			/>
		</div>
	{/if}
	<div class="card-content">
		{#if item.metadata.created_at}
			<span class="badge" class:badge-absolute={item.metadata.cover}
				><time datetime="2020-12-02">{item.metadata.created_at}</time></span
			>
		{/if}
		<h2>
			<a
				href={`/${item.resource}/${item.metadata.slug}`}
				sveltekit:prefetch
				data-testid="card-title">{item.metadata.title}</a
			>
		</h2>
		<p style:-webkit-line-clamp={lineClamp} data-testid="card-text">
			{item.metadata.headline}
		</p>
		<p class="accent">
			<a
				sveltekit:prefetch
				href={`/${item.resource}/${item.metadata.slug}`}
				title="Read more link to {item.metadata.title}"
				aria-label="Read more link to {item.metadata.title} "
				data-testid="card-link">Read More »</a
			>
		</p>
	</div>
</div>

<style>
	.card {
		position: relative;
		max-width: 24rem;
		overflow: hidden;
		border-radius: 0.75rem;
		border-style: solid;
		border-width: 1px;
		border-color: #e2e8f0;
		box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%), 0 0px 0 1px rgb(10 10 10 / 2%);
	}

	.card-header {
		width: 100%;
		height: auto;
	}

	.card-header img {
		object-fit: cover;
		width: 100%;
	}

	.card-content {
		position: relative;
		color: #ffffff;
		background-color: #f8fafc;
		width: 100%;
		height: auto;
		z-index: 20;
		padding: 1.75rem;
	}

	.card-content h2 {
		color: #475569;
		font-size: 1.5rem;
		font-weight: 700;
		line-height: 2rem;
		margin: 0 0 0.75rem 0;
	}

	.card-content a {
		color: inherit;
		text-decoration: none;
	}

	.badge {
		display: inline-block;
		color: #334155;
		font-size: 0.875rem;
		font-weight: 600;
		line-height: 1rem; /* 16px */
		text-transform: uppercase;
		border-radius: 9999px;
		background-color: #f8fafc;
		margin-top: -0.875rem;
		padding: 0.5rem 0.1rem;
	}

	.badge-absolute {
		position: absolute;
		top: 0;
		padding: 0.5rem 0.75rem;
	}

	.card-content p {
		color: #475569;
		font-size: 1.125rem;
		line-height: 1.75rem;
		margin-bottom: 0.25rem;
		-webkit-box-orient: vertical;
		display: -webkit-box;
		overflow: hidden;
	}

	.accent {
		font-weight: 700;
		margin: 0.75rem 0 0.25rem 0;
	}

	@media screen and (min-width: 1024px) {
		.card-content h2 {
			font-size: 1.875rem;
			line-height: 2.25rem;
		}
	}
</style>
