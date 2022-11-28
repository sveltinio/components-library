<script lang="ts">
	import { GitHubButton, GitHubForkRibbon } from '$lib/index.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>GitHub</tt></h2>

	<section id="github-buttons" class="container">
		<div class="row">
			<ul class="list-inline">
				<li>
					<GitHubButton type="star" username="sveltinio" repo="sveltin" />
				</li>
				<li>
					<GitHubButton type="follow" username="sveltinio" repo="sveltin" />
				</li>
				<li>
					<GitHubButton type="watch" username="sveltinio" repo="sveltin" />
				</li>
				<li>
					<GitHubButton type="issue" username="sveltinio" repo="sveltin" />
				</li>
			</ul>
		</div>
	</section>

	<section id="github-buttons" class="container">
		<h3>GitHubForkRibbon</h3>

		<GitHubForkRibbon username="sveltinio" repo="sveltin" />
		<p>It is placed at the top of the page</p>
	</section>
</section>

<style>
	.row {
		display: flex;
		flex-wrap: wrap;
	}
	.list-inline {
		padding-left: 0;
		list-style: none;
	}
	.list-inline > li {
		display: inline-block;
		padding-right: 5px;
		padding-left: 5px;
		margin: 0;
	}
</style>
