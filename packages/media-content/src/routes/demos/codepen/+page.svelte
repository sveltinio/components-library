<script lang="ts">
	import { CodePen } from '$lib/index.js';
	import { codepenSampleOne, codepenSampleTwo, codepenSettings } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>Codepen</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="codepen-default-wrapper" class="demo-wrapper">
		<h3 id="codepen-default">Codepen</h3>
		<div class="preview full">
			<CodePen
				user={codepenSampleOne.user}
				id={codepenSampleOne.id}
				title={codepenSampleOne.title}
			/>
		</div>
	</div>

	<div id="codepen-setting-wrapper" class="demo-wrapper">
		<h3 id="codepen-setting">Codepen - Setting</h3>
		<div class="preview full">
			<CodePen
				user={codepenSampleTwo.user}
				id={codepenSampleTwo.id}
				settings={codepenSettings}
			/>
		</div>
	</div>
</section>
