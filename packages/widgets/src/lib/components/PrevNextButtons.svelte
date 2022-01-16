<script lang="ts">
	import type { ResourceContent } from '../types';

	export let next: ResourceContent;
	export let previous: ResourceContent;
</script>

<div
	class="prevnext-container"
	data-testid="prevnext-container"
	class:bottom-spacer={!previous.metadata.title || !next.metadata.title}
>
	<div class="spacer">
		<div class="prevnext-wrapper">
			<div>
				{#if previous.metadata.title}
					<a
						href={`/${previous.resource}/${previous.metadata.slug}`}
						alt="link to {previous.metadata.title}"
						title="link to {previous.metadata.title}"
						aria-label="link to {previous.metadata.title}"
						class="link-wrapper"
						data-testid="link-to-previous"
						><div class="link-item">
							<span>Previous</span>
							<p data-testid="previous-message-text">
								« {previous.metadata.title}
							</p>
						</div></a
					>
				{/if}
			</div>
			<div class="divider">
				{#if next.metadata.title}
					<a
						href={`/${next.resource}/${next.metadata.slug}`}
						alt="link to {next.metadata.title}"
						title="link to {next.metadata.title}"
						aria-label="link to {next.metadata.title}"
						class="link-wrapper "
						data-testid="link-to-next"
						><div class="link-item">
							<span>Next</span>
							<p data-testid="next-message-text">
								{next.metadata.title} »
							</p>
						</div></a
					>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.prevnext-container {
		max-width: 80rem;
		margin-top: 2rem;
		background-color: #ffffff;
		border-top-width: 2px;
		border-top-style: solid;
		border-top-color: #475569;
		border-bottom-width: 1px;
		border-bottom-style: solid;
		border-bottom-color: #cbd5e1;
	}

	.bottom-spacer {
		padding-bottom: 1rem;
	}

	.spacer {
		margin-left: auto;
		margin-right: auto;
	}

	.prevnext-wrapper {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
	}

	.link-wrapper {
		text-decoration: none;
		cursor: pointer;
	}
	.link-item {
		text-decoration: none;
		cursor: pointer;
		color: #334155;
		padding-top: 2rem;
		padding-right: 1rem;
		padding-left: 1rem;
	}

	.link-item:hover {
		background-color: #f0f0f0;
	}

	.link-item p {
		font-size: 1rem;
		font-weight: 300;
	}

	.link-item span {
		font-size: 0.875rem;
		font-weight: 400;
	}

	@media (min-width: 640px) {
		.link-item {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}

	@media (min-width: 768px) {
		.link-item {
			margin-top: 0;
		}
	}

	@media (min-width: 1024px) {
		.bottom-spacer {
			padding-bottom: 0;
		}

		.prevnext-wrapper {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.divider {
			border-style: solid;
			border-color: #d4d4d8;
			border-right-width: 0px;
			border-left-width: 1px;
			border-bottom-width: 0px;
			border-top-width: 0px;
		}

		.link-item {
			padding-left: 2rem;
			padding-right: 2rem;
			padding-bottom: 2rem;
		}
	}
</style>
