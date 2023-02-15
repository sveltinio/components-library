<script lang="ts">
	import { Facebook } from '$lib/index.js';

	import {
		facebookSamplePostTwo,
		facebookSampleVideoTwo,
		facebookSamplePostOne,
		facebookPostSettings,
		facebookVideoSettings
	} from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>Facebook</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="facebook-post-default-wrapper" class="demo-wrapper">
		<h3 id="facebook-post-default">Facebook Post</h3>
		<div class="preview">
			<Facebook id={facebookSamplePostOne} />
		</div>
	</div>

	<div id="facebook-post-settings-wrapper" class="demo-wrapper">
		<h3 id="facebook-post-settings">Facebook Post - Settings</h3>
		<div class="preview">
			<Facebook id={facebookSamplePostTwo} settings={facebookPostSettings} />
		</div>
	</div>

	<div id="facebook-video-default-wrapper" class="demo-wrapper">
		<h3 id="facebook-video-default">Facebook Video</h3>
		<div class="preview">
			<Facebook type="video" id={facebookSampleVideoTwo} />
		</div>
	</div>

	<div id="facebook-video-settings-wrapper" class="demo-wrapper">
		<h3 id="facebook-video-settings">Facebook Video - Settings</h3>
		<div class="preview">
			<Facebook type="video" id={facebookSampleVideoTwo} settings={facebookVideoSettings} />
		</div>
	</div>
</section>
