<script lang="ts">
	import { assets, base } from '$app/paths';
	import { Card, CardAction, CardImage } from '$lib/index.js';
	import { contentItem_1, contentItem_2, contentItem_3 } from '../../../data/sample.js';
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>Card</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/demos">← Return To The Demos</a>
	</div>

	<div id="card-basic-wrapper" class="demo-wrapper">
		<h3 id="card-basic">Basic</h3>
		<div class="preview">
			<Card
				title={contentItem_1.metadata.title}
				content={contentItem_1.metadata.headline ?? ''}
			>
				<CardAction
					slot="cardAction"
					href="{base}/{contentItem_1.resource}/{contentItem_1.metadata.slug}"
				/>
			</Card>
		</div>
	</div>

	<div id="card-title-link-wrapper" class="demo-wrapper">
		<h3 id="card-title-link">Title as Link</h3>
		<div class="preview">
			<Card
				title={contentItem_2.metadata.title}
				content={contentItem_2.metadata.headline ?? ''}
				href="{base}/{contentItem_2.resource}/{contentItem_2.metadata.slug}"
			/>
		</div>
	</div>

	<div id="card-complete-wrapper" class="demo-wrapper">
		<h3 id="card-complete-link">Complete</h3>
		<div class="preview">
			<Card
				title={contentItem_3.metadata.title}
				content={contentItem_3.metadata.headline ?? ''}
			>
				<CardImage
					slot="cardImage"
					alt={contentItem_3.metadata.title}
					src="{assets}/resources/{contentItem_3.resource}/{contentItem_3.metadata
						.slug}/{contentItem_3.metadata.cover}"
				/>
				<CardAction
					slot="cardAction"
					href="{base}/{contentItem_3.resource}/{contentItem_3.metadata.slug}"
				/>
			</Card>
		</div>
	</div>
</section>
