<script lang="ts">
	import { Vimeo } from '$lib/index.js';

	import { vimeoSample, vimeoSettings } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>Vimeo</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="vimeo-default-wrapper" class="demo-wrapper">
		<h3 id="vimeo-defatul">Vimeo</h3>
		<div class="preview">
			<Vimeo
				id={vimeoSample.id}
				user={vimeoSample.user}
				title={vimeoSample.title}
				description={vimeoSample.description}
				settings={vimeoSettings}
			/>
		</div>
	</div>
</section>
