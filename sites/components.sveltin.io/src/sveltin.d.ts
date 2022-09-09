export namespace Sveltin {
	export interface ContentEntry {
		resource: string;
		metadata: YAMLFrontmatter;
		html?: string;
	}

	export interface ContentMetadata {
		name: string;
		items: Array<YAMLFrontmatter>;
	}

	export interface YAMLFrontmatter {
		title: string;
		slug: string;
		draft: boolean;
		headline: string;
		headings: Array<TOCEntry>;
		author?: string;
		created_at?: string;
		updated_at?: string;
		cover?: string;
		[key: string]: string | number | boolean | object | [];
	}

	export interface TOCEntry {
		id: string;
		title: string;
		depth: number;
		children?: Array<TOCEntry>;
	}

	export interface DynamicObject {
		[key: string]: string | number | object | [];
	}
}
