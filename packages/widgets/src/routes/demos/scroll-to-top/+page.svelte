<script lang="ts">
	import { ScrollToTopButton } from '$lib/index.js';

	const customBtnStyles = {
		'outline-color': 'blue',
		bottom: '100px'
	};
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>ScrollToTopButton</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="scroll-to-top-default-wrapper" class="demo-wrapper">
		<h3 id="scroll-to-top-default">Complete</h3>
		<div class="preview">
			<ScrollToTopButton showOnPx={10} />
		</div>
	</div>

	<div id="scroll-to-top-theming-with-prop-wrapper" class="demo-wrapper">
		<h3 id="scroll-to-top-theming-with-prop">Custom Styles with prop</h3>
		<div class="preview">
			<ScrollToTopButton
				showOnPx={10}
				iconColor="blue"
				fillColor="red"
				styles={customBtnStyles}
			/>
		</div>
	</div>
</section>
