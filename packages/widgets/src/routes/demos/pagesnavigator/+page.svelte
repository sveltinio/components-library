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
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>PagesNavigator</tt></h2>
</section>

<section>
	<h3>Default Styles</h3>
	<PagesNavigator prev={prevObj} next={nextObj} />

	<h3>Custom Icons</h3>
	<PagesNavigator prev={prevObj} next={nextObj}>
		<span slot="previous-icon">
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

		<span slot="next-icon">
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

	<h3>Custom Styles - Sample 1</h3>
	<PagesNavigator prev={prevObj} next={nextObj} styles={customStyles_1} spacer />

	<h3>Custom Styles - Sample 2</h3>
	<PagesNavigator prev={prevObj} next={nextObj} styles={dark} spacer />

	<h3>Custom Styles - with css class</h3>
	<PagesNavigator prev={prevObj} next={nextObj} theme="pagesnav-orange" />
</section>
