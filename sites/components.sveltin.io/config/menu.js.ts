import type { IMenuItem } from '@sveltinio/seo/dist/types';
const menu: Array<IMenuItem> = [
	{
		identifier: 'home',
		name: 'Home',
		url: '/',
		weight: 1
	},
	{
		identifier: 'overview',
		name: 'Overview',
		url: '/overview',
		weight: 2
	},
	{
		identifier: 'essentials',
		name: 'Essentials',
		url: '/essentials',
		external: false,
		weight: 3,
		children: [
			{
				identifier: 'button',
				name: 'Button',
				url: '/essentials/button',
				external: false,
				weight: 1
			},
			{
				identifier: 'dropdown',
				name: 'Dropdown',
				url: '/essentials/dropdown',
				external: false,
				weight: 2
			},
			{
				identifier: 'link',
				name: 'Link',
				url: '/essentials/link',
				external: false,
				weight: 3
			},
			{
				identifier: 'picture',
				name: 'Picture',
				url: '/essentials/picture',
				external: false,
				weight: 4
			},
			{
				identifier: 'tabs',
				name: 'Tabs',
				url: '/essentials/tabs',
				external: false,
				weight: 5
			},
			{
				identifier: 'list',
				name: 'ToggleList',
				url: '/essentials/list',
				external: false,
				weight: 6
			}
		]
	},

	{
		identifier: 'media-content',
		name: 'Media Content',
		url: '/media-content',
		external: false,
		weight: 4,

		children: [
			{
				identifier: 'codepen',
				name: 'Codepen',
				url: '/media-content/codepen',
				external: false,
				weight: 1
			},

			{
				identifier: 'codesandbox',
				name: 'CodeSandbox',
				url: '/media-content/codesandbox',
				external: false,
				weight: 2
			},

			{
				identifier: 'facebook',
				name: 'Facebook',
				url: '/media-content/facebook',
				external: false,
				weight: 3
			},

			{
				identifier: 'slideshare',
				name: 'SlideShare',
				url: '/media-content/slideshare',
				external: false,
				weight: 4
			},

			{
				identifier: 'stackblitz',
				name: 'Stackblitz',
				url: '/media-content/stackblitz',
				external: false,
				weight: 5
			},

			{
				identifier: 'tweet',
				name: 'Tweet',
				url: '/media-content/tweet',
				external: false,
				weight: 6
			},

			{
				identifier: 'vimeo',
				name: 'Vimeo',
				url: '/media-content/vimeo',
				external: false,
				weight: 7
			},

			{
				identifier: 'youtube',
				name: 'YouTube',
				url: '/media-content/youtube',
				external: false,
				weight: 8
			}
		]
	},

	{
		identifier: 'seo',
		name: 'SEO',
		url: '/seo',
		external: false,
		weight: 5,

		children: [
			{
				identifier: 'json-ld-breadcrumbs',
				name: 'Json Ld Breadcrumbs',
				url: '/seo/json-ld-breadcrumbs',
				external: false,
				weight: 1
			},

			{
				identifier: 'json-ld-sitenavigationelement',
				name: 'Json Ld Sitenavigationelement',
				url: '/seo/json-ld-sitenavigationelement',
				external: false,
				weight: 2
			},

			{
				identifier: 'json-ld-webpage',
				name: 'Json Ld Webpage',
				url: '/seo/json-ld-webpage',
				external: false,
				weight: 3
			},

			{
				identifier: 'json-ld-website',
				name: 'Json Ld Website',
				url: '/seo/json-ld-website',
				external: false,
				weight: 4
			},

			{
				identifier: 'opengraph',
				name: 'Opengraph',
				url: '/seo/opengraph',
				external: false,
				weight: 5
			},

			{
				identifier: 'pagemetatags',
				name: 'Pagemetatags',
				url: '/seo/pagemetatags',
				external: false,
				weight: 6
			},

			{
				identifier: 'twittercard',
				name: 'Twittercard',
				url: '/seo/twittercard',
				external: false,
				weight: 7
			}
		]
	},

	{
		identifier: 'services',
		name: 'Services',
		url: '/services',
		external: false,
		weight: 6,

		children: [
			{
				identifier: 'google-analytics',
				name: 'Google Analytics',
				url: '/services/google-analytics',
				external: false,
				weight: 1
			},

			{
				identifier: 'google-fonts',
				name: 'Google Fonts',
				url: '/services/google-fonts',
				external: false,
				weight: 2
			},

			{
				identifier: 'umami-analytics',
				name: 'Umami Analytics',
				url: '/services/umami-analytics',
				external: false,
				weight: 3
			}
		]
	},

	{
		identifier: 'widgets',
		name: 'Widgets',
		url: '/widgets',
		external: false,
		weight: 7,

		children: [
			{
				identifier: 'breadcrumbs',
				name: 'Breadcrumbs',
				url: '/widgets/breadcrumbs',
				external: false,
				weight: 1
			},

			{
				identifier: 'card',
				name: 'Card',
				url: '/widgets/card',
				external: false,
				weight: 2
			},

			{
				identifier: 'collapsible-list',
				name: 'Collapsible List',
				url: '/widgets/collapsible-list',
				external: false,
				weight: 3
			},

			{
				identifier: 'github-button',
				name: 'Github Button',
				url: '/widgets/github-button',
				external: false,
				weight: 4
			},

			{
				identifier: 'github-fork-ribbon',
				name: 'Github Fork Ribbon',
				url: '/widgets/github-fork-ribbon',
				external: false,
				weight: 5
			},

			{
				identifier: 'prev-next-buttons',
				name: 'Prev Next Buttons',
				url: '/widgets/prev-next-buttons',
				external: false,
				weight: 6
			},

			{
				identifier: 'scroll-to-top-button',
				name: 'Scroll To Top Button',
				url: '/widgets/scroll-to-top-button',
				external: false,
				weight: 7
			},

			{
				identifier: 'toc',
				name: 'Toc',
				url: '/widgets/toc',
				external: false,
				weight: 8
			}
		]
	}
];

export { menu };
