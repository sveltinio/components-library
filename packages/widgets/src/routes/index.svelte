<script lang="ts">
	import {
		Card,
		PrevNextButtons,
		TOC,
		ScrollToTopButton,
		CollapsibleList,
		Breadcrumbs
	} from '../lib';
	import {
		contentItem,
		contentItemWithCreateDate,
		contentItemWithCover,
		contentItemWithCoverAndCreateDate,
		previous,
		next,
		headings
	} from '../lib/__tests__/__fixtures__/data.test.js';
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>Demos</tt></h2>

	<section id="scroll-to-top" class="container">
		<h3>ScrollToTop</h3>
		<ScrollToTopButton showOnPx={200} />
		<p>Scroll down, it will appear</p>
	</section>

	<section id="card" class="container">
		<h3>Card</h3>

		<h4 id="card-wo-cover-create-date)">plain</h4>
		<Card item={contentItem} />

		<h4 id="card-without-cover-with-create-date">w/ create date, w/o cover</h4>
		<Card item={contentItemWithCreateDate} />

		<h4 id="card-with-cover-without-create-date">w/ cover, w/o create date</h4>
		<Card item={contentItemWithCover} />

		<h4 id="card-without-cover-and-create-date">w/ cover & created_at</h4>
		<Card item={contentItemWithCoverAndCreateDate} />
	</section>

	<section id="prev-next-buttons" class="container">
		<h3>PrevNextButtons</h3>

		<h4>Default Styles</h4>
		<PrevNextButtons {previous} {next} />

		<h4>Custom Styles</h4>
		<PrevNextButtons
			{previous}
			{next}
			borderTopColor="#008C7D"
			borderBottomColor="#A9AD9B"
			linkColor="#006B70"
			linkHoverBgColor="#ECF5CE"
		/>
	</section>

	<section id="collapsable-list" class="container">
		<h3>CollapsibleList</h3>

		<div style="width: 50%">
			<CollapsibleList headerText="Expand Me">
				<ul>
					<li>First</li>
					<li>Second</li>
					<li>Third</li>
				</ul>
			</CollapsibleList>
		</div>
	</section>

	<section id="breadcrumbs" class="container">
		<h3>Breadcrumbs</h3>

		<Breadcrumbs baseURL="http://example.com" parent="posts" currentTitle="Getting Started" />
	</section>

	<section id="toc" class="container">
		<h3>TOC</h3>
		<h4 id="toc-default">default</h4>
		<TOC resource="posts" slug="welcome" {headings} withChildren={false} />

		<h4 id="toc-open">Open by default</h4>
		<TOC resource="posts" slug="welcome" {headings} isOpen={true} withChildren={false} />

		<h4 id="toc-with-children">w/ children</h4>
		<TOC resource="posts" slug="welcome" {headings} withChildren={true} />
	</section>
</section>
