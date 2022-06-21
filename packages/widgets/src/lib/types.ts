interface IResourceContent {
	resource: string;
	metadata: ContentMetadata;
	html?: string;
}

export class ResourceContent implements IResourceContent {
	public resource: string;
	public metadata: ContentMetadata;
	public html?: string;
}

export class ResourceContentMaker {
	static create() {
		return new ResourceContent();
	}

	static createWithValues(resource: string, metadata: ContentMetadata, html?: string) {
		const item = new ResourceContent();
		item.resource = resource;
		item.metadata = metadata;
		item.html = html;
		return item;
	}
}

export interface IContentMetedata {
	title: string;
	slug: string;
	draft: boolean;
	headings: Array<HeadingItem>;
	author?: string;
	headline?: string;
	created_at?: string;
	updated_at?: string;
	cover?: string;
}

export class ContentMetadata implements IContentMetedata {
	public title: string;
	public slug: string;
	public draft: boolean;
	public headline: string;
	public headings: Array<HeadingItem>;
	public author?: string;
	public created_at?: string;
	public updated_at?: string;
	public cover?: string;
}

export class ContentMetadataMaker {
	static create() {
		return new ContentMetadata();
	}

	static createWithValues(
		title: string,
		slug: string,
		draft: boolean,
		headline: string,
		headings: Array<HeadingItem>,
		author?: string,
		created_at?: string,
		updated_at?: string
	) {
		const item = new ContentMetadata();
		item.title = title;
		item.slug = slug;
		item.draft = draft;
		item.headline = headline;
		item.headings = headings;
		item.author = author;
		item.created_at = created_at;
		item.updated_at = updated_at;

		return item;
	}

	static createWithMandatoryValuesOnly(
		title: string,
		slug: string,
		draft: boolean,
		headline: string,
		headings: Array<HeadingItem>
	) {
		const item = new ContentMetadata();
		item.title = title;
		item.slug = slug;
		item.draft = draft;
		item.headline = headline;
		item.headings = headings;

		return item;
	}
}

export interface IHeadingItem {
	id: string;
	title: string;
	depth: number;
	children?: Array<HeadingItem>;
}

export class HeadingItem implements IHeadingItem {
	public id: string;
	public title: string;
	public depth: number;
	public children?: Array<HeadingItem>;
}

export class HeadingItemMaker {
	static create() {
		return new HeadingItem();
	}

	static createWithValues(id: string, title: string, depth: number, children?: Array<HeadingItem>) {
		const item = new HeadingItem();
		item.id = id;
		item.title = title;
		item.depth = depth;
		item.children = children;
		return item;
	}
}

export interface IDropdownItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
	external?: boolean;
	children?: Array<IDropdownItem>;
}
