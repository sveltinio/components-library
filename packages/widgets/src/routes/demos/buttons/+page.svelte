<script lang="ts">
	import { PrevNextButtons, ScrollToTopButton } from '$lib/index.js';
	import { previous, next } from '../../../data/sample.js';

	const customStyles = {
		'border-top-color': '#008C7D',
		'border-top-width': '3px',
		'border-bottom-color': '#A9AD9B',
		'link-color': '#006B70',
		'link-bg-color-hover': '#ECF5CE',
		'divider-color': '#10b981'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>Buttons</tt></h2>

	<section id="scroll-to-top" class="container">
		<h3>ScrollToTop</h3>
		<ScrollToTopButton showOnPx={10} />
		<p>Scroll down, it will appear</p>
	</section>

	<section id="prev-next-buttons" class="container">
		<h3>PrevNextButtons</h3>

		<h4>Default Styles</h4>
		<PrevNextButtons
			prevValue={previous.metadata.title}
			prevHref="/{previous.resource}/{previous.metadata.slug}"
			nextValue={next.metadata.title}
			nextHref="/{next.resource}/{next.metadata.slug}"
		/>

		<h4>Custom Styles</h4>
		<PrevNextButtons
			prevValue={previous.metadata.title}
			prevHref="/{previous.resource}/{previous.metadata.slug}"
			nextValue={next.metadata.title}
			nextHref="/{next.resource}/{next.metadata.slug}"
			styles={customStyles}
		/>
	</section>
</section>
