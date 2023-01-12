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
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="toc-default-wrapper" class="demo-wrapper">
		<h3 id="toc-default">Default</h3>
		<div class="preview">
			<TOC data={tocEntries} />
		</div>
	</div>

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
</section>
