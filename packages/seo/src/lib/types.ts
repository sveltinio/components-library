export interface WebSite {
	name: string;
	baseURL: string;
	language: string;
	title: string;
	slogan?: string;
	description: string;
	seoDescription: string;
	favicon: string;
	logo: string;
	copyright: string;
	keywords: string;
	contactEmail: string;
	sitemap: Sitemap;
	socials: Socials;
	webmaster: WebMaster;
}

export interface Sitemap {
	changefreq: string;
	priority: number;
}

export interface Socials {
	linkedin: string;
	twitter: string;
	github: string;
	facebook: string;
	instagram: string;
	youtube: string;
}

export interface WebMaster {
	name: string;
	address: string;
	contactEmail: string;
}

export interface MenuItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
	external?: boolean;
	children?: Array<MenuItem>;
}

/**
 * SiteNavigationElement
 */

interface IJsonLdSiteNavigationElementItem {
	position: number;
	name: string;
	description: string;
	url: string;
	toJsonLdObject(): Record<string, unknown>;
}

class JsonLdSiteNavigationElement implements IJsonLdSiteNavigationElementItem {
	position: number;
	name: string;
	description: string;
	url: string;

	toJsonLdObject(): Record<string, unknown> {
		return {
			'@type': 'SiteNavigationElement',
			position: this.position,
			name: this.name,
			description: this.description,
			url: this.url
		};
	}
}

export class JsonLdSiteNavigationElementMaker {
	static create() {
		return new JsonLdSiteNavigationElement();
	}

	static createWithValues(position: number, name: string, description: string, url: string) {
		const item = new JsonLdSiteNavigationElement();
		item.position = position;
		item.name = name;
		item.description = description;
		item.url = url;
		return item;
	}
}

/**
 * Breadcrumbs
 */

export interface IJsonLdBreadcrumbsListItem {
	url: string;
	name: string;
	toJsonLdObject(): Record<string, unknown>;
}

class JsonLdBreadcrumbsListItem implements IJsonLdBreadcrumbsListItem {
	public name: string;
	public url: string;

	toJsonLdObject(): Record<string, unknown> {
		return {
			'@id': this.url,
			name: this.name
		};
	}
}

export class JsonLdBreadcrumbsListItemMaker {
	static create() {
		return new JsonLdBreadcrumbsListItem();
	}

	static createWithValues(url: string, name: string) {
		const item = new JsonLdBreadcrumbsListItem();
		item.url = url;
		item.name = name;

		return item;
	}
}

export interface IJsonLdBreadcrumbsItemListElement {
	position: number;
	item: JsonLdBreadcrumbsListItem;
	toJsonLdObject(): Record<string, unknown>;
}

class JsonLdBreadcrumbsItemListElement implements IJsonLdBreadcrumbsItemListElement {
	public position: number;
	public item: JsonLdBreadcrumbsListItem;

	toJsonLdObject(): Record<string, unknown> {
		return {
			'@type': 'ListItem',
			position: this.position,
			item: this.item.toJsonLdObject()
		};
	}
}

export class JsonLdBreadcrumbsItemListElementMaker {
	static create() {
		return new JsonLdBreadcrumbsItemListElement();
	}

	static createWithValues() {
		const item = new JsonLdBreadcrumbsItemListElement();
		return item;
	}
}
