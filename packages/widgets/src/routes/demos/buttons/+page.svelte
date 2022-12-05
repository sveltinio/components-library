<script lang="ts">
	import { ScrollToTopButton } from '$lib/index.js';

	const customBtnStyles = {
		'outline-color': 'blue',
		bottom: '100px'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>Buttons</tt></h2>

	<section id="scroll-to-top" class="container">
		<h3>Scroll-To-Top</h3>
		<p>Scroll down, they will appear</p>

		<!-- Default -->
		<ScrollToTopButton showOnPx={10} />

		<!-- Custom Styles -->
		<ScrollToTopButton
			showOnPx={10}
			iconColor="blue"
			fillColor="red"
			styles={customBtnStyles}
		/>
	</section>
</section>
