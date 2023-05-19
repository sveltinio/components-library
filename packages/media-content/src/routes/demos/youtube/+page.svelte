<script lang="ts">
	import { YouTube } from '$lib/index.js';

	import {
		youtubeSampleOne,
		youtubeSampleTwo,
		youtubeSampleVideoSettings,
		youtubeSamplePlayList,
		youtubeSamplePlaylistSettings
	} from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/media-content</h1>
	<h2>YouTube</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="youtube-default-wrapper" class="demo-wrapper">
		<h3 id="youtube-default">YouTube</h3>
		<div class="preview">
			<YouTube id={youtubeSampleOne.id} title={youtubeSampleOne.title} />
		</div>
	</div>

	<div id="youtube-settings-wrapper" class="demo-wrapper">
		<h3 id="youtube-settings">YouTube - Settings</h3>
		<div class="preview">
			<YouTube
				id={youtubeSampleTwo.id}
				title={youtubeSampleTwo.title}
				settings={youtubeSampleVideoSettings}
			/>
		</div>
	</div>

	<div id="youtube-playlist-settings-wrapper" class="demo-wrapper">
		<h3 id="youtube-playlist-settings">YouTube Playlist</h3>
		<div class="preview">
			<YouTube
				type="playlist"
				id={youtubeSamplePlayList.id}
				title={youtubeSamplePlayList.title}
				settings={youtubeSamplePlaylistSettings}
			/>
		</div>
	</div>
</section>
