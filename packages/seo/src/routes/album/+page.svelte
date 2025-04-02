<script lang="ts">
	import type { SEOWebPage } from '$lib/types.js';
	import { OpenGraphType } from '$lib/types.js';
	import { PageMetaTags } from '$lib/index.js';

	const sampleMusicAlbum: SEOWebPage = {
		url: 'https://www.dgmlive.com/',
		title: 'In the Court of the Crimson King',
		description: 'Description for the album',
		keywords: ['progressive rock, jazz rock, rock'],
		opengraph: {
			type: OpenGraphType.MusicAlbum,
			album: {
				url: 'https://open.spotify.com/album/6tVg2Wl9hVKMpHYcAl2V2M?si=dJtzXM7ATvmLOn9NfdDnbg',
				musicians: [
					{
						url: 'https://open.spotify.com/artist/7M1FPw29m5FbicYzS2xdpi?si=w9MGJ88-S3O7tiG5IheXAw'
					}
				],
				songs: [
					{
						url: 'https://open.spotify.com/track/5L7VBYoosmkmiiDlzumdCe?si=aa49699b95604f8d'
					},
					{
						url: 'https://open.spotify.com/track/4QbpagjMCqSECj6IimTL2n?si=65e9458fe8454eea'
					}
				],
				release_date: '10-10-1969'
			}
		}
	};
</script>

<!-- BEGIN OF USAGE NOTE: do not need to put into svelte:head -->
<PageMetaTags data={sampleMusicAlbum} />
<!-- END OF USAGE NOTE -->

<div class="header">
	<h1>@sveltinio/seo</h1>
	<h2>Sample Music Album</h2>
	<h3>Inspect the head of the webpage</h3>
</div>
