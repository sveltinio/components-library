<script lang="ts">
	import type { HeadingItem } from '../../types.js';

	export let resource: string;
	export let slug: string;
	export let headings: Array<HeadingItem>;
	export let withChildren: boolean;

	export let isOpen = false;
	const toggle = () => (isOpen = !isOpen);

	function handleAnchorClick(event: MouseEvent) {
		const link = event.currentTarget as HTMLInputElement;
		const linkHref = link.getAttribute('href');

		let anchorId = '';
		if (linkHref) anchorId = new URL(linkHref).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		if (anchor) {
			window.scrollTo({
				top: anchor.offsetTop,
				behavior: 'smooth'
			});
		}
	}
</script>

<nav class="toc-container" data-testid="toc_container">
	<div on:click|preventDefault={toggle} data-testid="toggle_btn">
		<button alt="table of contents" aria-label="table of contents" aria-expanded={isOpen}>
			Table of Contents
		</button>
	</div>
	{#if isOpen}
		<div class="toc">
			<ol class="toc-list" data-testid="toc_list">
				{#each headings as heading}
					<li
						id={`toc_item_${heading.id}`}
						class="toc-list-item"
						data-testid={`toc_item_${heading.id}`}
					>
						<a
							class="toc-link parent-node"
							href={`/${resource}/${slug}#${heading.id}`}
							on:click={handleAnchorClick}
							data-testid={`toc_link_${heading.id}`}># {heading.title}</a
						>
						{#if withChildren}
							{#if heading.children}
								<ol
									class="toc-list child-node"
									id={`toc_children_list_${heading.id}`}
									data-testid={`toc_children_list_${heading.id}`}
								>
									{#each heading.children as child}
										<li
											id={`toc_child_item_${child.id}`}
											class="toc-list-item"
											data-testid={`toc_child_item_${child.id}`}
										>
											<a
												class="toc-link"
												href={`/${resource}/${slug}#${child.id}`}
												on:click={handleAnchorClick}
												data-testid={`toc_child_link_${child.id}`}
												># {child.title}</a
											>
										</li>
									{/each}
								</ol>
							{/if}
						{/if}
					</li>
				{/each}
			</ol>
		</div>
	{/if}
</nav>

<style>
	.toc-container {
		background-color: #f8fafc;
		border-left: 4px solid #929090;
		margin: 0 0 20px 0;
		overflow: hidden;
		padding: 0.25rem 1rem;
	}

	.toc-container button {
		color: rgb(60, 60, 60);
		border-radius: 30px;
		border: 0px none;
		background-color: #f8fafc;
		font-size: 16px;
		font-weight: bold;
		line-height: 1.75rem;
		margin: 10px 0 10px 0;
		min-height: 45px;
		padding: 3px 8px;
		text-transform: uppercase;
		width: 200px;
	}

	.toc-container button:hover {
		background-color: #ecf0f1;
	}

	.toc {
		margin: 0;
		overflow-y: auto;
		padding-top: 0;
		padding-right: 0;
		padding-bottom: 0.5rem;
		padding-left: 0;
	}

	.toc-list {
		color: #1e293b;
		list-style: none;
		padding: 0 0 0 20px;
	}

	li.toc-list-item {
		margin: 0;
	}

	li.toc-list-item a {
		display: block;
		padding: 0.25rem;
	}

	.toc-link {
		color: #292828;
		text-decoration: none;
	}

	li.toc-list-item a:hover {
		background-color: #ecf0f1;
	}

	.parent-node {
		font-weight: 600;
	}

	.child-node {
		font-weight: 500;
	}
</style>
