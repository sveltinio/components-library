<script lang="ts">
	import { CodeSandbox } from '$lib/index.js';
	import { codeSandboxSampleID, codesandboxSettings } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>CodeSandbox</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="codesandbox-default-wrapper" class="demo-wrapper">
		<h3 id="codesandbox-default">CodeSandbox</h3>
		<div class="preview">
			<CodeSandbox id={codeSandboxSampleID} />
		</div>
	</div>

	<div id="codesandbox-setting-wrapper" class="demo-wrapper">
		<h3 id="codesandbox-default">CodeSandbox - Setting</h3>
		<div class="preview">
			<CodeSandbox id={codeSandboxSampleID} settings={codesandboxSettings} height={500} />
		</div>
	</div>
</section>
