<script lang="ts">
	import { TOC } from '$lib/index.js';
	import { tocEntries } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>TOC</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="toc-default-wrapper" class="demo-wrapper">
		<div class="preview">
			<TOC data={tocEntries} />
		</div>
	</div>
	<div class="demo-content">
		<h2 id="intro">Intro</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quasi qui officiis
			soluta alias sit id magni laborum animi? Amet suscipit, omnis quae eveniet ut molestiae.
			Perferendis, esse deleniti.
		</p>

		<h2 id="motivation">Motivation</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quasi qui officiis
			soluta alias sit id magni laborum animi? Amet suscipit, omnis quae eveniet ut molestiae.
			Perferendis, esse deleniti.
		</p>

		<h2 id="design-development">Design & Development</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quasi qui officiis
			soluta alias sit id magni laborum animi? Amet suscipit, omnis quae eveniet ut molestiae.
			Perferendis, esse deleniti.
		</p>

		<h3 id="component-design">Design Component</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quasi qui officiis
			soluta alias sit id magni laborum animi? Amet suscipit, omnis quae eveniet ut molestiae.
			Perferendis, esse deleniti.
		</p>

		<h3 id="development">Development</h3>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quasi qui officiis
			soluta alias sit id magni laborum animi? Amet suscipit, omnis quae eveniet ut molestiae.
			Perferendis, esse deleniti.
		</p>

		<h2 id="license">License</h2>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quidem quasi qui officiis
			soluta alias sit id magni laborum animi? Amet suscipit, omnis quae eveniet ut molestiae.
			Perferendis, esse deleniti.
		</p>
	</div>
	<!--
	<div id="toc-ordered-wrapper" class="demo-wrapper">
		<h3 id="toc-ordered">Ordered</h3>
		<div class="preview">
			<TOC data={tocEntries} ordered />
		</div>
	</div>

	<div id="toc-custom-title-wrapper" class="demo-wrapper">
		<h3 id="toc-custom-title">Custom Title</h3>
		<div class="preview">
			<TOC data={tocEntries} label="My TOC" />
		</div>
	</div>

	<div id="toc-label-only-wrapper" class="demo-wrapper">
		<h3 id="toc-label-only">Label Only</h3>
		<div class="preview">
			<TOC data={tocEntries} labelOnly />
		</div>
	</div>

	<div id="toc-icon-only-wrapper" class="demo-wrapper">
		<h3 id="toc-icon-only">Icon Only</h3>
		<div class="preview">
			<TOC data={tocEntries} iconOnly />
		</div>
	</div>

	<div id="toc-open-wrapper" class="demo-wrapper">
		<h3 id="toc-open">Open by default</h3>
		<div class="preview">
			<TOC data={tocEntries} isOpen />
		</div>
	</div>

	<div id="toc-theming-with-css-class-wrapper" class="demo-wrapper">
		<h3 id="toc-theming-with-css-class">Custom styles with CSS class</h3>
		<div class="preview">
			<TOC data={tocEntries} class="toc-violet-theme" prefixChar="*" />
		</div>
	</div>
	-->
</section>
