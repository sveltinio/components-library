<script lang="ts">
	import { base } from '$app/paths';
	import {
		ResponsiveCard,
		ResponsiveCardImage,
		ResponsiveCardBadge,
		ResponsiveCardInfo,
		ResponsiveCardAction
	} from '$lib/index.js';
	import { getMetadataURL, getURL } from '$lib/utils.js';

	import { contentItem_1, contentItem_2 } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>ResponsiveCard</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="responsivecard-complete-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-complete">Complete</h3>
		<div class="preview">
			<ResponsiveCard
				title={contentItem_2.metadata.title}
				content={contentItem_2.metadata.headline ?? ''}
			>
				<ResponsiveCardImage
					slot="cardImage"
					src="https://placeimg.com/400/400/any"
					alt="any photo"
				/>
				<ResponsiveCardBadge
					slot="cardBadge"
					data={{
						value: String(contentItem_2.metadata.category),
						color: 'blue',
						url: getMetadataURL(
							base,
							contentItem_2.resource,
							'category',
							String(contentItem_2.metadata.category)
						)
					}}
				/>
				<ResponsiveCardInfo
					slot="cardInfo"
					author={contentItem_2.metadata.author ?? ''}
					date={contentItem_2.metadata.created_at ?? ''}
					showAvatar={false}
				/>
				<ResponsiveCardAction slot="cardAction" href={getURL(base, contentItem_2)} />
			</ResponsiveCard>
		</div>
	</div>

	<div id="responsivecard-title-link-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-title-link">Title as Link</h3>
		<div class="preview">
			<ResponsiveCard
				title={contentItem_1.metadata.title}
				content={contentItem_1.metadata.headline ?? ''}
			>
				<ResponsiveCardImage
					slot="cardImage"
					src="https://source.unsplash.com/600x400/?music"
					alt="music photo"
				/>
				<ResponsiveCardBadge
					slot="cardBadge"
					data={{
						value: String(contentItem_1.metadata.category),
						color: 'red',
						url: getMetadataURL(
							base,
							contentItem_1.resource,
							'category',
							String(contentItem_1.metadata.category)
						)
					}}
				/>
				<ResponsiveCardInfo
					slot="cardInfo"
					author={contentItem_1.metadata.author ?? ''}
					date={contentItem_1.metadata.created_at ?? ''}
				/>
			</ResponsiveCard>
		</div>
	</div>

	<div id="responsivecard-no-image-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-no-image">No Image</h3>
		<div class="preview">
			<ResponsiveCard
				title={contentItem_1.metadata.title}
				content={contentItem_1.metadata.headline ?? ''}
			>
				<ResponsiveCardAction slot="cardAction" href={getURL(base, contentItem_1)} />
			</ResponsiveCard>
		</div>
	</div>

	<div id="responsivecard-theming-wrapper" class="demo-wrapper">
		<h3 id="responsivecard-theming">Theming</h3>
		<div class="preview">
			<ResponsiveCard
				title={contentItem_2.metadata.title}
				content={contentItem_2.metadata.headline ?? ''}
				lineClamp={3}
				styles={{
					'bg-color': 'rgb(224 231 255)',
					'border-width': '2px',
					'border-style': 'dashed',
					'border-color': 'rgb(99 102 241)',
					'border-radius': '0',
					'btn-color': 'rgb(238 242 255)',
					'btn-bg-color': 'rgb(67 56 202)',
					'btn-bg-color-hover': 'rgb(79 70 229)'
				}}
			>
				<ResponsiveCardInfo
					slot="cardInfo"
					author={contentItem_2.metadata.author ?? ''}
					date={contentItem_2.metadata.created_at ?? ''}
					showAvatar={false}
				/>
				<ResponsiveCardAction slot="cardAction" href={getURL(base, contentItem_2)} />
			</ResponsiveCard>
		</div>
	</div>
</section>
