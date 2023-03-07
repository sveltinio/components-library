<script lang="ts">
	import type { WebSite, WithContext } from 'schema-dts';
	import type { SEOWebSite } from '../../../types.js';
	import { serializeJSONLdSchema, isSEOPerson } from '../../../utils.js';

	export let data: SEOWebSite;

	const schemaOrgWebSite: WithContext<WebSite> = {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${data.baseURL}/#website`,
		name: data.name,
		url: data.baseURL,
		description: data.description,
		inLanguage: data.language,
		license: data.copyright || ''
	};

	if (data.socials != undefined) {
		schemaOrgWebSite.sameAs = Object.values(data.socials).filter((v) => v != '');
	}

	if (data.creator) {
		let _address: string | any;

		if (typeof data.creator.address === 'string') {
			_address = data.creator.address;
		} else {
			_address = {
				'@type': 'PostalAddress',
				addressLocality: data.creator.address?.city,
				postalCode: data.creator.address?.postalCode,
				streetAddress: data.creator.address?.streetAddress
			};
		}

		let _creator: any = {
			'@type': isSEOPerson(data.creator) ? 'Person' : 'Organization',
			name: data.creator.name,
			email: data.creator.email,
			url: data.creator.url,
			telephone: data.creator.telephone,
			address: _address
		};

		if (isSEOPerson(data.creator)) {
			_creator['jobTitle'] = data.creator.jobTitle;
		}

		schemaOrgWebSite.creator = _creator;
	}
</script>

<svelte:head>
	{@html serializeJSONLdSchema(schemaOrgWebSite, 'jsonld-website')}
</svelte:head>
