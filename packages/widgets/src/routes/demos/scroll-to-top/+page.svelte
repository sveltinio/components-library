<script lang="ts">
	import { ScrollToTopButton } from '$lib/index.js';

	const customBtnStyles = {
		'outline-color': 'blue',
		bottom: '100px'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>
	<h2><tt>ScrollToTopButton</tt></h2>
</section>

<section>
	<p>Scroll down and it will appear</p>
	<div class="demo-card-container">
		<!-- Default -->
		<ScrollToTopButton showOnPx={10} />

		<!-- Custom Styles -->
		<ScrollToTopButton
			showOnPx={10}
			iconColor="blue"
			fillColor="red"
			styles={customBtnStyles}
		/>
	</div>
</section>
