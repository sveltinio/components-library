export interface IWebSite {
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
	sitemap: ISitemap;
	socials: ISocials;
	webmaster: IWebMaster;
}

export interface ISitemap {
	changefreq: string;
	priority: number;
}

export interface ISocials {
	linkedin: string;
	twitter: string;
	github: string;
	facebook: string;
	instagram: string;
	youtube: string;
}

export interface IWebMaster {
	name: string;
	address: string;
	contactEmail: string;
}

export interface IMenuItem {
	identifier: string;
	name: string;
	url: string;
	weight: number;
	external?: boolean;
	children?: Array<IMenuItem>;
}

export interface IWebPageMetadata {
	url: string;
	title: string;
	description?: string;
	author?: string;
	keywords?: string;
	image?: string;
	imageAlt?: string;
	opengraph?: IOpenGraph;
	twitter?: ITwitterCard;
}

export enum EnumOpenGraphType {
	Website = 'website',
	Article = 'article',
	Book = 'book'
}

export enum EnumOpenGraphProfileGender {
	Male = 'male',
	Female = 'female'
}

export const OpenGraphType: typeof EnumOpenGraphType = {
	Website: EnumOpenGraphType.Website,
	Article: EnumOpenGraphType.Article,
	Book: EnumOpenGraphType.Book
};

export const OpenGraphProfileGender: typeof EnumOpenGraphProfileGender = {
	Male: EnumOpenGraphProfileGender.Male,
	Female: EnumOpenGraphProfileGender.Female
};

export interface IOpenGraph {
	type: string;
	article?: IOpenGraphArticle;
	book?: IOpenGraphBook;
	profile?: IOpenGraphProfile;
	album?: IOpenGraphMusicAlbum;
	song?: IOpenGraphMusicSong;
}

export interface IOpenGraphArticle {
	published_at?: string;
	modified_at?: string;
	expiration_time?: string;
	section?: string;
	tags?: Array<string>;
}

export interface IOpenGraphBook {
	author: string;
	isbn: string;
	release_date: string;
	tags: Array<string>;
}

export interface IOpenGraphProfile {
	first_name: string;
	last_name: string;
	username: string;
	gender?: EnumOpenGraphProfileGender;
}

export interface IOpenGraphMusicAlbum {
	song: IOpenGraphMusicSong;
	disc: number;
	track: number;
	musician: IOpenGraphProfile;
	release_data: string;
}

export interface IOpenGraphMusicSong {
	duration: number;
	album: IOpenGraphMusicAlbum;
	disc: number;
	track: number;
	musician: Array<IOpenGraphProfile>;
}

/**
 * EnumTwitterCardType
 *
 * * Enumation with different TwitterCard types:
 * * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
 *
 * - SUMMARY: Title, description, and thumbnail
 * - LARGE: Similar to the Summary Card, but with a prominently-featured image
 * - APP: A Card with a direct download to a mobile app
 * - PLAYER: A Card that can display video/audio/media
 */
export enum EnumTwitterCardType {
	Summary = 'summary',
	Large = 'summary_large_image',
	App = 'app',
	Player = 'player'
}

export const TwitterCardType: typeof EnumTwitterCardType = {
	Summary: EnumTwitterCardType.Summary,
	Large: EnumTwitterCardType.Large,
	App: EnumTwitterCardType.App,
	Player: EnumTwitterCardType.Player
};

/**
 * ITwitterCard
 * @param type The card type: summary | summary_large_image | player | app
 * @param site (otional) The Twitter @username the card should be attributed to.
 * @param player (optional) A Card that can display video/audio/media
 * @param app (optional) A Card with a direct download to a mobile app
 */
export interface ITwitterCard {
	type: string;
	site?: string;
	player?: ITwitterPlayer;
	app?: ITwitterApp;
}

/**
 * ITwitterPlayer
 * * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card
 * @param url HTTPS URL to iFrame player
 * @param width Width of iFrame specified in twitter:player in pixels
 * @param height Height of iFrame specified in twitter:player in pixels
 */
export interface ITwitterPlayer {
	url: string; // HTTPS URL to iFrame player.
	width: string; // Width of iFrame specified in twitter:player in pixels
	height: string; // Height of iFrame specified in twitter:player in pixels
}

/**
 * ITwitterApp
 *  * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card
 * @param country (optional)
 * @param idIPhone String value, the numeric representation of your app ID in the App Store
 * @param idIPad String value, the numeric representation of your app ID in the App Store
 * @param idGooglePlay String value, the numeric representation of your app ID in the Google Play
 */
export interface ITwitterApp {
	country?: string;
	idIPhone: string;
	idIPad: string;
	idGooglePlay: string;
}

interface ISchemaOrg {
	toJsonLdObject(): Record<string, unknown>;
}

/**
 *  * JsonLdWebPage
 */
export class JsonLdWebPage implements ISchemaOrg {
	public title: string;
	public description: string;
	public author?: string;

	toJsonLdObject(): Record<string, unknown> {
		const obj = {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: this.title,
			description: this.description
		};

		if (this.author) {
			obj['author'] = this.author;
		}

		return obj;
	}
}

/**
 * * JsonLdWebPageMaker
 */
export class JsonLdWebPageMaker {
	static make() {
		return new JsonLdWebPage();
	}

	static makeWithValues(title: string, description: string, author?: string) {
		const item = this.make();
		item.title = title;
		item.description = description;

		if (author) item.author = author;

		return item;
	}
}

/**
 * * JsonLdSiteNavigationElement
 */

export class JsonLdSiteNavigationElement implements ISchemaOrg {
	public position: number;
	public name: string;
	public description: string;
	public url: string;

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

/**
 *  * JsonLdSiteNavigationElementMaker
 */
export class JsonLdSiteNavigationElementMaker {
	static make() {
		return new JsonLdSiteNavigationElement();
	}

	static makeWithValues(position: number, name: string, description: string, url: string) {
		const item = this.make();
		item.position = position;
		item.name = name;
		item.description = description;
		item.url = url;
		return item;
	}
}

/**
 * * JsonLdSiteNavigationElementList
 */
export class JsonLdSiteNavigationElementList implements ISchemaOrg {
	public items: Array<JsonLdSiteNavigationElement>;

	toJsonLdObject(): Record<string, unknown> {
		const elementListAsJsonString = Array<Record<string, unknown>>();
		this.items.forEach((item) => {
			elementListAsJsonString.push(item.toJsonLdObject());
		});

		return {
			'@context': 'https://schema.org',
			'@type': 'ItemList',
			itemListElement: elementListAsJsonString
		};
	}
}

/**
 * * JsonLdSiteNavigationElementListMaker
 */
export class JsonLdSiteNavigationElementListMaker {
	static make() {
		return new JsonLdSiteNavigationElementList();
	}

	static makeWithValues(items: Array<JsonLdSiteNavigationElement>) {
		const obj = this.make();
		obj.items = items;
		return obj;
	}
}

/**
 * * JsonLdBreadcrumbsItem
 */
export class JsonLdBreadcrumbsItem implements ISchemaOrg {
	public position: number;
	public name: string;
	public url: string;

	toJsonLdObject(): Record<string, unknown> {
		return {
			'@type': 'ListItem',
			position: this.position,
			name: this.name,
			item: this.url
		};
	}
}

/**
 * * JsonLdBreadcrumbsItemMaker
 */
export class JsonLdBreadcrumbsItemMaker {
	static make() {
		return new JsonLdBreadcrumbsItem();
	}

	static makeWithValues(position: number, name: string, url: string) {
		const item = this.make();
		item.position = position;
		item.name = name;
		item.url = url;

		return item;
	}
}

/**
 * * JsonLdBreadcrumbsList
 */
export class JsonLdBreadcrumbsList implements ISchemaOrg {
	public items: Array<JsonLdBreadcrumbsItem>;

	toJsonLdObject(): Record<string, unknown> {
		const elementListAsJsonString = Array<Record<string, unknown>>();
		this.items.forEach((item) => {
			elementListAsJsonString.push(item.toJsonLdObject());
		});

		return {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: elementListAsJsonString
		};
	}
}

/**
 * * JsonLdBreadcrumbsListMaker
 */
export class JsonLdBreadcrumbsListMaker {
	static make() {
		return new JsonLdBreadcrumbsList();
	}

	static makeWithValues(items: Array<JsonLdBreadcrumbsItem>) {
		const obj = this.make();
		obj.items = items;
		return obj;
	}
}
