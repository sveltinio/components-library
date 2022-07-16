import type { callBackTwoParameters } from './types';

export function isValidValue<Type>(value: Type, collection: Array<Type>): boolean {
	return collection.includes(value);
}

export function isEmptyObject<Type>(obj: Type): boolean {
	return Object.keys(obj).length === 0;
}

export function isPropValueSet<Type>(value: Type) {
	switch (typeof value) {
		case 'boolean':
			return true;
		case 'number':
			return value > 0;
		case 'string':
			return value != '';
	}
}

export function isCommaSepareted(text: string): boolean {
	return text.indexOf(',') >= 0;
}

export function toCommaSepareted(text: string): string {
	const re = /\s+|;+/g;
	return text.replace(re, ',');
}

export function isValidURL(url: string): boolean {
	// /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
	const re =
		/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
	return re.test(url);
}

export function removeFirstOccurrence(text: string, searchstr: string) {
	const index = text.indexOf(searchstr);
	if (index === -1) {
		return text;
	}
	return text.slice(0, index) + text.slice(index + searchstr.length);
}

export function toID(url: string): string {
	if (isValidURL(url)) {
		const u = new URL(url);
		return removeFirstOccurrence(u.pathname, '/');
	}
	return 'not_a_valid_url';
}

export function isValidHex(color: string): boolean {
	return /^#([0-9A-F]{3}){1,2}$/i.test(color);
}

export function getHexValue(color: string): string {
	//if (color.substring(0, 1) === '#') return color.substring(1);
	if (isValidHex(color)) return color.substring(1);
	return 'not_a_valid_hex_color';
}

export function toSnakeCase(text: string): string {
	const res = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
	if (res) return res.map((x) => x.toLowerCase()).join('_');

	return text;
}

export function toKebabCase(text: string): string {
	const res = text.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
	if (res) return res.map((x) => x.toLowerCase()).join('-');

	return text;
}

export function makeSettingsString<Type>(
	opts: Type,
	callback?: callBackTwoParameters<string, string>
): string {
	return Object.keys(opts)
		.map((key) => {
			if (callback) {
				return callback(key, opts[key]);
			} else {
				switch (typeof opts[key]) {
					case 'boolean':
						return `${key}=${Number(opts[key])}`;
					case 'number':
						return `${key}=${String(opts[key])}`;
					default:
						return `${key}=${opts[key]}`;
				}
			}
		})
		.join('&');
}

export function isScriptLoaded(url: string): boolean {
	const scripts = window.document.getElementsByTagName('script');

	for (let i = scripts.length; i--; ) {
		if (scripts[i].src == url) return true;
	}
	return false;
}
