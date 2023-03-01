<script lang="ts">
	import type { ListItem, BreadcrumbList, WithContext } from 'schema-dts';
	import { serializeJSONLdSchema, pathSegments } from '../../../utils.js';

	export let url: string;

	const baseURL = new URL(url).origin;
	const segments = pathSegments(url);
	const current = segments.pop() || '';

	const parents =
		segments.map((segment, segmentIndex) => {
			const previousParts = segments.slice(0, segmentIndex);
			return {
				label: segment,
				href:
					previousParts?.length > 0
						? `${previousParts?.join('/')}/${segment}`
						: `${segment}`
			};
		}) || [];

	function makeBreadcrumbListItem(): Array<ListItem> {
		let elements: Array<ListItem> = [];

		const rootElem: ListItem = {
			'@type': 'ListItem',
			position: 1,
			name: 'Home',
			url: baseURL
		};
		elements.push(rootElem);

		parents.forEach((parent, index) => {
			const parentElem: ListItem = {
				'@type': 'ListItem',
				position: 2 + index++,
				name: parent.label,
				url: `${baseURL}/${parent.href}`
			};
			elements.push(parentElem);
		});

		if (current != '') {
			const currentElem: ListItem = {
				'@type': 'ListItem',
				position: 2 + segments.length,
				name: current,
				url: url
			};
			elements.push(currentElem);
		}
		return elements;
	}

	const schemaOrgBreadcrumbList: WithContext<BreadcrumbList> = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: makeBreadcrumbListItem()
	};
</script>

<svelte:head>
	{@html serializeJSONLdSchema(schemaOrgBreadcrumbList, 'jsonld-breadcrumbs')}
</svelte:head>
