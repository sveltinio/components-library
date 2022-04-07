<script lang="ts">
	import {
		CodePen,
		CodeSandbox,
		Facebook,
		SlideShare,
		StackBlitz,
		Tweet,
		Vimeo,
		YouTube
	} from '../lib';

	import {
		codepenSampleOne,
		codepenSampleTwo,
		codepenSettings,
		codeSandboxSampleID,
		codesandboxSettings,
		facebookSamplePostTwo,
		facebookSampleVideoTwo,
		facebookSampleVideoOne,
		facebookSamplePostOne,
		facebookPostSettings,
		facebookVideoSettings,
		slideShareSample,
		stackblitzSample,
		stackblitzSettings,
		tweetSampleOneId,
		tweetSampleTwoId,
		tweetSettings,
		vimeoSample,
		vimeoSettings,
		youtubeSampleOne,
		youtubeSampleTwo,
		youtubeSampleVideoSettings,
		youtubeSamplePlayList,
		youtubeSamplePlaylistSettings
	} from '../lib/__tests__/__fixtures__/data.test.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/media</tt></h1>

	<h2><tt>Demos</tt></h2>

	<!-- CODEPEN -->
	<section id="codepen-container" class="container">
		<h3>Codepen</h3>
		<h4>Default options</h4>
		<CodePen user={codepenSampleOne.user} id={codepenSampleOne.id} title={codepenSampleOne.title} />
		<br />
		<h4>Custom options</h4>
		<CodePen user={codepenSampleTwo.user} id={codepenSampleTwo.id} settings={codepenSettings} />
	</section>

	<!-- CODESANDBOX -->
	<section id="codesandbox-container" class="container">
		<h3>CodeSandbox</h3>
		<h4>Default options</h4>
		<CodeSandbox id={codeSandboxSampleID} />

		<br />
		<h4>Custom options</h4>
		<CodeSandbox id={codeSandboxSampleID} settings={codesandboxSettings} height={500} />
	</section>

	<!-- FACEBOOK -->
	<section id="facebook-post-container" class="container">
		<h3>Facebook Post</h3>
		<h4>Default options</h4>
		<Facebook id={facebookSamplePostOne} />

		<br />
		<h4>Custom options</h4>
		<Facebook id={facebookSamplePostTwo} settings={facebookPostSettings} />
	</section>

	<section id="facebook-video-container" class="container">
		<h3>Facebook Video</h3>
		<h4>Default options</h4>
		<Facebook type="video" id={facebookSampleVideoOne} />
		<br />

		<h4>Custom options</h4>
		<Facebook type="video" id={facebookSampleVideoTwo} settings={facebookVideoSettings} />
	</section>

	<!-- SLIDESHARE -->
	<section id="slideshare-container" class="container">
		<h3>SlideShare</h3>
		<SlideShare
			id={slideShareSample.id}
			user={slideShareSample.user}
			title={slideShareSample.title}
		/>
	</section>

	<!-- STACKBLITZ -->
	<section id="stackblitz-container" class="container">
		<h3>StackBlitz</h3>
		<h4>Default options</h4>
		<StackBlitz id={stackblitzSample.id} />
		<br />
		<h4>Custom options</h4>
		<StackBlitz id={stackblitzSample.id} settings={stackblitzSettings} />
	</section>

	<!-- TWEET -->
	<section id="tweet-container" class="container">
		<h3>Tweet</h3>
		<h4>Default options</h4>
		<Tweet id={tweetSampleOneId} />

		<h4>Custom options</h4>
		<Tweet id={tweetSampleTwoId} settings={tweetSettings} />
	</section>

	<!-- VIMEO -->
	<section id="vimeo-container" class="container">
		<h3>Vimeo</h3>
		<Vimeo
			id={vimeoSample.id}
			user={vimeoSample.user}
			title={vimeoSample.title}
			description={vimeoSample.description}
			settings={vimeoSettings}
		/>
	</section>

	<!-- YOUTUBE-->
	<section id="youtube-container" class="container">
		<h3>YouTube</h3>
		<h4>Default settings</h4>
		<YouTube id={youtubeSampleOne.id} title={youtubeSampleOne.title} />
		<br />

		<h4>Custom settings</h4>
		<YouTube
			id={youtubeSampleTwo.id}
			title={youtubeSampleTwo.title}
			settings={youtubeSampleVideoSettings}
		/>
	</section>

	<section id="youtube-playlist-container" class="container">
		<h3>YouTube Playlist</h3>
		<YouTube
			type="playlist"
			id={youtubeSamplePlayList.id}
			title={youtubeSamplePlayList.title}
			settings={youtubeSamplePlaylistSettings}
		/>
	</section>
</section>
