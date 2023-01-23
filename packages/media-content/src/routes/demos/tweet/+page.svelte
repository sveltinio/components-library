<script lang="ts">
	import { Tweet } from '$lib/index.js';

	import { tweetSampleOneId, tweetSampleTwoId, tweetSettings } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>Tweet</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="tweet-default-wrapper" class="demo-wrapper">
		<h3 id="tweet-default">Tweet</h3>
		<div class="preview">
			<Tweet id={tweetSampleOneId} />
		</div>
	</div>

	<div id="tweet-settings-wrapper" class="demo-wrapper">
		<h3 id="tweet-settings">Tweet - Settings</h3>
		<div class="preview">
			<Tweet id={tweetSampleTwoId} settings={tweetSettings} />
		</div>
	</div>
</section>
