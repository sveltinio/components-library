export class ResourceContent {
	constructor(public resource: string, public metadata: ContentMetadata, public html?: string) {}
}

export class RecourceContentMaker {
	static create(event: ResourceContent) {
		return new ResourceContent(event.resource, event.metadata, event.html);
	}
}

export class ContentMetadata {
	constructor(
		public title: string,
		public slug: string,
		public draft: boolean,
		public headings: Array<HeadingItem>,
		public author?: string,
		public headline?: string,
		public created_at?: string,
		public updated_at?: string,
		public cover?: string
	) {}
}

export class ContentMetadataMaker {
	static create(event: ContentMetadata): ContentMetadata {
		return new ContentMetadata(
			event.title,
			event.slug,
			event.draft,
			event.headings,
			event.author,
			event.headline,
			event.created_at,
			event.updated_at,
			event.cover
		);
	}
}

export class HeadingItem {
	constructor(
		public id: string,
		public title: string,
		public depth: number,
		public children?: Array<HeadingItem>
	) {}
}

export class HeadingItemMaker {
	static create(event: HeadingItem) {
		return new HeadingItem(event.id, event.title, event.depth, event.children);
	}
}
