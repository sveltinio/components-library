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
		'spacer-color': '#6b7280',
		'link-border-color': 'transparent',
		'link-bg-color': 'transparent',
		'link-bg-color-hover': 'transparent',
		'content-max-width-md': '100%',
		'content-max-width-lg': '50%',
		'content-bg-color': '#f3f4f6',
		'content-border-color': '#e5e7eb',
		'content-border-color-hover': '#6b7280'
	};
	const orange = {
		'max-width': '80rem',
		'bg-color': '#fbbf24',
		'border-t-color': '#b45309',
		'border-r-color': '#b45309',
		'border-b-color': '#b45309',
		'border-l-color': '#b45309',
		'border-tl-radius': '1rem',
		'border-br-radius': '1rem',
		'link-border-color': 'transparent',
		'link-bg-color': 'transparent',
		'link-bg-color-hover': 'transparent',
		'content-bg-color-hover': '#fcd34d',
		'content-border-color': 'transparent',
		'content-border-color-hover': '#f59e0b',
		'content-max-width-md': '100%',
		'content-max-width-lg': '80%',
		'placeholder-color': '#92400e',
		'message-color': '#92400e'
	};

	const dark = {
		'border-t-color': '#1f2937',
		'bg-color': '#374151',
		'spacer-color': '#1f2937',
		'link-border-color': 'transparent',
		'link-bg-color': 'transparent',
		'link-bg-color-hover': 'transparent',
		'content-max-width-md': '70%',
		'content-max-width-lg': '60%',
		'content-l-ml': 'auto',
		'content-l-mr-md': '2rem',
		'content-l-text-align': 'right',
		'content-r-ml-md': '2rem',
		'content-r-mr-md': 'auto',
		'content-r-text-align': 'left',
		'content-bg-color-hover': '#4b5563',
		'content-border-color': '#64748b',
		'placeholder-color': '#e2e8f0',
		'placeholder-letter-spacing': '0.025em',
		'message-color': '#e2e8f0',
		'message-font-weight': '500',
		'message-letter-spacing': '0.05em'
	};
</script>

<section class="main">
	<h1><tt>@sveltinio/widgets</tt></h1>

	<h2><tt>PagesNavigator</tt></h2>

	<h4>Default Styles</h4>
	<PagesNavigator prev={prevObj} next={nextObj} />

	<h4>Custom Styles - Sample 1</h4>
	<PagesNavigator prev={prevObj} next={nextObj} styles={customStyles_1} spacer />

	<h4>Custom Styles - Sample 2</h4>
	<PagesNavigator prev={prevObj} next={nextObj} styles={orange} />

	<h4>Custom Styles - Sample 3</h4>
	<PagesNavigator prev={prevObj} next={nextObj} styles={dark} spacer />
</section>
