<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let id: string;
	export let provider: string;
	export let iframeURL: string;
	export let title = '';
	export let buttonColor = '#282828';

	const dispatch = createEventDispatcher();

	function play() {
		dispatch('component-event', { name: 'play-video', value: true });
	}

	function makeThumbnailURL(providerName: string, id: string): string {
		switch (providerName) {
			case 'youtube':
				return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
			case 'vimeo':
				return `https://vumbnail.com/${id}.jpg`;
			default:
				return providerName;
		}
	}

	function makeResponsiveString(url: string): string {
		let result = url.concat(' 640w, ');

		const _u = url.substring(0, url.lastIndexOf('.'));
		const breakpoints: Record<string, number> = {
			large: 640,
			medium: 200,
			small: 100
		};
		const items = Object.entries(breakpoints);

		items.forEach(([key, value], index) => {
			result = result.concat(`${_u}_${key}.jpg ${value}w`);
			if (index != items.length - 1) {
				result = result.concat(', ');
			}
		});
		return result;
	}

	const thumbnailURL = makeThumbnailURL(provider, id);
	const responsiveSrcSet = makeResponsiveString(thumbnailURL);

	$: altText = title != '' ? title : iframeURL;
</script>

<div id="thumbnail-wrapper-{id}" data-testid="thumbnail-wrapper" class="thumbnail-wrapper">
	{#if provider === 'vimeo'}
		<img
			data-testid="thumbnail"
			srcset={responsiveSrcSet}
			sizes="(max-width: 640px) 100vw, 640px"
			src={thumbnailURL}
			alt={altText}
			referrerpolicy="no-referrer"
		/>
	{:else}
		<img
			data-testid="thumbnail"
			src={thumbnailURL}
			alt={altText}
			referrerpolicy="no-referrer"
		/>
	{/if}

	<button on:click={play} data-testid="play-button">
		<!-- https://commons.wikimedia.org/wiki/File:YouTube_play_buttom_dark_icon_(2013-2017).svg -->
		<svg
			version="1.1"
			id="play-icon"
			data-testid="play-icon"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px"
			y="0px"
			width="150"
			height="50"
			viewBox="0 0 1024 721"
			enable-background="new 0 0 1024 721"
			xml:space="preserve"
		>
			<path id="Triangle" fill="#FFFFFF" d="M407,493l276-143L407,206V493z" />
			<path
				id="The_Sharpness"
				opacity="0.12"
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M407,206l242,161.6l34-17.6L407,206z"
			/>
			<g id="Lozenge">
				<g>
					<path
						fill={buttonColor}
						d="M1013,156.3c0,0-10-70.4-40.6-101.4C933.6,14.2,890,14,870.1,11.6C727.1,1.3,512.7,1.3,512.7,1.3h-0.4
			c0,0-214.4,0-357.4,10.3C135,14,91.4,14.2,52.6,54.9C22,85.9,12,156.3,12,156.3S1.8,238.9,1.8,321.6v77.5
			C1.8,481.8,12,564.4,12,564.4s10,70.4,40.6,101.4c38.9,40.7,89.9,39.4,112.6,43.7c81.7,7.8,347.3,10.3,347.3,10.3
			s214.6-0.3,357.6-10.7c20-2.4,63.5-2.6,102.3-43.3c30.6-31,40.6-101.4,40.6-101.4s10.2-82.7,10.2-165.3v-77.5
			C1023.2,238.9,1013,156.3,1013,156.3z M407,493l0-287l276,144L407,493z"
					/>
				</g>
			</g>
		</svg>
	</button>
</div>

<style>
	.thumbnail-wrapper {
		position: relative;
		width: 100%;
	}

	img {
		width: 100%;
		height: auto;
	}
	button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: transparent;
		border: none;
		font-size: 0;
		z-index: 10;
	}
	svg {
		margin: auto;
		cursor: pointer;
	}
</style>
