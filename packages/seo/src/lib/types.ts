export type SEOWebSite = {
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
	socials?: Socials;
	webmaster?: WebMaster;
};

export type Socials = {
	[key: string]: string;
};

export type WebMaster = {
	name: string;
	address: string;
	contactEmail: string;
};

export type SEOMenuItem = {
	identifier: string;
	name: string;
	url: string;
	weight: number;
	external?: boolean;
	children?: Array<SEOMenuItem>;
};

export type SEOWebPageMetadata = {
	url: string;
	title: string;
	description?: string;
	author?: string;
	keywords?: string;
	image?: string;
	imageAlt?: string;
	opengraph?: OpenGraph;
	twitter?: TwitterCard;
};

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

export type OpenGraph = {
	type: string;
	article?: OpenGraphArticle;
	book?: OpenGraphBook;
	profile?: OpenGraphProfile;
	album?: OpenGraphMusicAlbum;
	song?: OpenGraphMusicSong;
};

export type OpenGraphArticle = {
	published_at?: string;
	modified_at?: string;
	expiration_time?: string;
	section?: string;
	tags?: Array<string>;
};

export type OpenGraphBook = {
	author: string;
	isbn: string;
	release_date: string;
	tags: Array<string>;
};

export type OpenGraphProfile = {
	first_name: string;
	last_name: string;
	username: string;
	gender?: EnumOpenGraphProfileGender;
};

export type OpenGraphMusicAlbum = {
	song: OpenGraphMusicSong;
	disc: number;
	track: number;
	musician: OpenGraphProfile;
	release_data: string;
};

export type OpenGraphMusicSong = {
	duration: number;
	album: OpenGraphMusicAlbum;
	disc: number;
	track: number;
	musician: Array<OpenGraphProfile>;
};

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
 * TwitterCard
 * @param type The card type: summary | summary_large_image | player | app
 * @param site (otional) The Twitter @username the card should be attributed to.
 * @param player (optional) A Card that can display video/audio/media
 * @param app (optional) A Card with a direct download to a mobile app
 */
export type TwitterCard = {
	type: string;
	site?: string;
	player?: TwitterPlayer;
	app?: TwitterApp;
};

/**
 * TwitterPlayer
 * * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card
 * @param url HTTPS URL to iFrame player
 * @param width Width of iFrame specified in twitter:player in pixels
 * @param height Height of iFrame specified in twitter:player in pixels
 */
export type TwitterPlayer = {
	url: string; // HTTPS URL to iFrame player.
	width: string; // Width of iFrame specified in twitter:player in pixels
	height: string; // Height of iFrame specified in twitter:player in pixels
};

/**
 * ITwitterApp
 *  * https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card
 * @param country (optional)
 * @param idIPhone String value, the numeric representation of your app ID in the App Store
 * @param idIPad String value, the numeric representation of your app ID in the App Store
 * @param idGooglePlay String value, the numeric representation of your app ID in the Google Play
 */
export type TwitterApp = {
	country?: string;
	idIPhone: string;
	idIPad: string;
	idGooglePlay: string;
};

interface ISchemaOrg {
	toJsonLdObject(): Record<string, unknown>;
}

/**
 *  * JsonLdWebPage
 */
export class JsonLdWebPage implements ISchemaOrg {
	public title!: string;
	public description!: string;
	public author?: string;

	toJsonLdObject(): Record<string, unknown> {
		let resObj = undefined;
		const obj = {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: this.title,
			description: this.description
		};

		if (this.author) {
			const obj2 = {
				author: this.author
			};
			resObj = { ...obj, ...obj2 };
		} else {
			resObj = obj;
		}

		return resObj;
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
	public position!: number;
	public name!: string;
	public description!: string;
	public url!: string;

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
	public items!: Array<JsonLdSiteNavigationElement>;

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
	public position!: number;
	public name!: string;
	public url!: string;

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
	public items!: Array<JsonLdBreadcrumbsItem>;

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
