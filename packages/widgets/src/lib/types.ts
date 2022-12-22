export type ResourceContent = {
	resource: string;
	metadata: YAMLFrontmatter;
	html?: string;
};

export class ResourceContentFactory {
	static make(resource: string, metadata: YAMLFrontmatter, html?: string): ResourceContent {
		const item: ResourceContent = {
			resource: resource,
			metadata: metadata,
			html: html
		};
		return item;
	}
}

export class ResourceContentUtils {
	static getCoverPath(resourcesFolder: string, item: ResourceContent): string {
		if (item.metadata && item.metadata.cover != undefined) {
			return `${resourcesFolder}/${item.resource}/${item.metadata.slug}/${item.metadata.cover}`;
		}
		return '';
	}

	static getURL(base: string, item: ResourceContent): string {
		return `${base}/${item.resource}/${item.metadata.slug}`;
	}

	static getMetadataURL(
		base: string,
		resourceName: string,
		mdName: string,
		mdValue: string
	): string {
		return `${base}/${resourceName}/${mdName}/${mdValue}`;
	}
}

export type TocEntry = {
	id: string;
	depth: number;
	value: string;
	children?: Array<TocEntry>;
};

export type PagesNavigatorItem = {
	placeholder?: string;
	label: string;
	href: string;
	alt?: string;
};

export type YAMLFrontmatter = {
	title: string;
	slug: string;
	draft: boolean;
	headings?: Array<TocEntry>;
	author?: string;
	headline?: string;
	created_at?: string;
	updated_at?: string;
	cover?: string;
	[key: string]: string | undefined | Array<TocEntry> | boolean;
};

export type CardBadge = {
	value: string;
	color: string;
	url?: string;
};
