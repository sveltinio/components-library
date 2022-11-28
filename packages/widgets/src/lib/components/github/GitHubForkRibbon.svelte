<script lang="ts">
	export let username: string;
	export let repo: string;
	export let color = '#ffffff';
	export let bgColor = '#a60042';
</script>

<div class="github-fork-ribbon-wrapper right" data-testid="wrapper">
	<div class="github-fork-ribbon" style:background-color={bgColor} data-testid="ribbon">
		<a
			href="https://github.com/{username}/{repo}/fork"
			target="_blank"
			rel="noreferrer"
			title="fork {username}/{repo} on GitHub"
			aria-label="fork {username}/{repo} on GitHub"
			style:color
			data-testid="githubLink">Fork me on GitHub</a
		>
	</div>
</div>

<style>
	/* Personalized version of
	* https://github.com/simonwhitaker/github-fork-ribbon-css
	*/
	/* Left will inherit from right (so we don't need to duplicate code) */
	.github-fork-ribbon {
		/* The right and left classes determine the side we attach our banner to */
		position: absolute;
		/* Add a bit of padding to give some substance outside the "stitching" */
		padding: 2px 0;
		/* Set a gradient: transparent black at the top to almost-transparent black at the bottom */
		background-image: -webkit-gradient(
			linear,
			left top,
			left bottom,
			from(rgba(0, 0, 0, 0)),
			to(rgba(0, 0, 0, 0.15))
		);
		background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
		background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
		background-image: -ms-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
		background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
		background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.15));
		/* Add a drop shadow */
		-webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
		-moz-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.5);
		/* Set the font */
		font: 700 13px 'Helvetica Neue', Helvetica, Arial, sans-serif;
		z-index: 9999;
		pointer-events: auto;
	}
	.github-fork-ribbon a,
	.github-fork-ribbon a:hover {
		/* Set the text properties */
		text-decoration: none;
		text-shadow: 0 -1px rgba(0, 0, 0, 0.5);
		text-align: center;
		/* Set the geometry. If you fiddle with these you'll also need
		to tweak the top and right values in .github-fork-ribbon. */
		width: 100%;
		line-height: 20px;
		/* Set the layout properties */
		display: inline-block;
		padding: 2px 0;
		/* Add "stitching" effect */
		border-width: 1px 0;
		border-style: dotted;
		border-color: rgba(255, 255, 255, 0.7);
	}
	.github-fork-ribbon-wrapper {
		width: 100%;
		height: 150px;
		position: absolute;
		overflow: hidden;
		top: 0;
		z-index: 9999;
		pointer-events: none;
	}
	.github-fork-ribbon-wrapper.right {
		right: 0;
	}
	.github-fork-ribbon-wrapper.right .github-fork-ribbon {
		top: 1px;
		right: 0px;
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);
		transform: rotate(0deg);
		text-align: center;
		width: 100%;
	}
	@media (min-width: 768px) {
		.github-fork-ribbon-wrapper.right .github-fork-ribbon {
			top: 1px;
		}
	}
	@media (min-width: 1024px) {
		.github-fork-ribbon-wrapper {
			width: 150px;
		}
		.github-fork-ribbon-wrapper.right .github-fork-ribbon {
			text-align: center;
			width: 200px;
			top: 42px;
			right: -43px;
			-webkit-transform: rotate(45deg);
			-moz-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			-o-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
</style>
