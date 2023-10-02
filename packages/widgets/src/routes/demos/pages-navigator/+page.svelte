<script lang="ts">
	import { PagesNavigator } from '$lib/index.js';
	import type { PagesNavigatorItem } from '$lib/types.js';
	import { previous, next } from '../../../data/sample.js';

	const prevObj: PagesNavigatorItem = {
		label: previous.metadata.title,
		href: `/${previous.resource}/${previous.metadata.slug}`
	};

	const nextObj: PagesNavigatorItem = {
		label: next.metadata.title,
		href: `/${next.resource}/${next.metadata.slug}`
	};

	const prevObj2: PagesNavigatorItem = {
		label: previous.metadata.title,
		href: '/posts/undefined'
	};

	const nextObj2: PagesNavigatorItem = {
		label: next.metadata.title,
		href: `/${next.resource}/${next.metadata.slug}`
	};
	/*
	const customStyles_1 = {
		'border-t-width': '2px',
		'border-t-color': '#374151',
		'spacer-color': '#e5e7eb',
		'link-border-color': 'transparent',
		'link-bg-color': 'transparent',
		'link-bg-color-hover': 'transparent',
		'content-bg-color': '#f3f4f6',
		'content-border-color': '#e5e7eb',
		'content-border-color-hover': '#6b7280'
	};

	const dark = {
		'border-t-color': '#1f2937',
		'bg-color': '#374151',
		'spacer-color': '#1f2937',

		'link-width-md': '20rem',
		'link-width-lg': '15rem',
		'link-border-color': 'transparent',
		'link-bg-color': 'transparent',
		'link-bg-color-hover': 'transparent',

		'content-bg-color-hover': '#4b5563',
		'content-border-color': '#64748b',
		'content-l-text-align': 'right',
		'content-l-ml-md': 'auto',
		'content-l-mr-md': '1rem',
		'content-r-text-align': 'left',
		'content-r-ml-md': '1rem',
		'content-r-mr-md': 'auto',

		'icon-color': '#e2e8f0',
		'placeholder-color': '#e2e8f0',
		'placeholder-letter-spacing': '0.025em',
		'message-color': '#e2e8f0',
		'message-letter-spacing': '0.05em'
	};
	*/
</script>

<div class="header" role="main">
	<h1>@sveltinio/widgets</h1>
	<h2>PagesNavigator</h2>
</div>

<section role="contentinfo">
	<div class="actions">
		<a class="btn-back" href="/">← Back to the Demos page</a>
	</div>

	<div id="pagesnavigator-default-wrapper" class="demo-wrapper">
		<h3 id="pagesnavigator-default">Defaults</h3>
		<div class="preview">
			<PagesNavigator prev={prevObj} next={nextObj} />
		</div>
	</div>

	<div id="pagesnavigator-undefined-href-wrapper" class="demo-wrapper">
		<h3 id="pagesnavigator-undefined-href">Undefined href</h3>
		<div class="preview">
			<PagesNavigator prev={prevObj2} next={nextObj2} />
		</div>
	</div>
	<!--
	<div id="pagesnavigator-custom-icons-wrapper" class="demo-wrapper">
		<h3 id="pagesnavigator-custom-icons">Custom Icons</h3>
		<div class="preview">
			<PagesNavigator prev={prevObj} next={nextObj}>
				<span slot="prevIcon">
					<svg
						width="20px"
						height="20px"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						color="currentColor"
						><path
							d="M16 12H8m0 0l3.5 3.5M8 12l3.5-3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
					>
				</span>

				<span slot="nextIcon">
					<svg
						width="20px"
						height="20px"
						stroke-width="1.5"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						color="currentColor"
						><path
							d="M8 12h8m0 0l-3.5-3.5M16 12l-3.5 3.5M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/></svg
					>
				</span>
			</PagesNavigator>
		</div>
	</div>

	<div id="pagesnavigator-theming-with-prop-1-wrapper" class="demo-wrapper">
		<h3 id="pagesnavigator-theming-with-prop-1-">Custom Styles - Sample 1</h3>
		<div class="preview">
			<PagesNavigator prev={prevObj} next={nextObj} styles={customStyles_1} spacer />
		</div>
	</div>

	<div id="pagesnavigator-theming-with-prop-2-wrapper" class="demo-wrapper">
		<h3 id="pagesnavigator-theming-with-prop-2-">Custom Styles - Sample 2</h3>
		<div class="preview">
			<PagesNavigator prev={prevObj} next={nextObj} styles={dark} spacer />
		</div>
	</div>

	<div id="pagesnavigator-theming-with-css-class-wrapper" class="demo-wrapper">
		<h3 id="pagesnavigator-theming-with-css-class-">Custom Styles with css class</h3>
		<div class="preview">
			<PagesNavigator prev={prevObj} next={nextObj} class="pagesnav-orange" />
		</div>
	</div>
	-->
</section>
