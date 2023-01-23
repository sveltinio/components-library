<script lang="ts">
	import { SlideShare } from '$lib/index.js';

	import { slideShareSample } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>SlideShare</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="slideshare-default-wrapper">
		<h3 id="slideshare-default">SlideShare</h3>
		<div class="preview">
			<SlideShare
				id={slideShareSample.id}
				user={slideShareSample.user}
				title={slideShareSample.title}
			/>
		</div>
	</div>
</section>
