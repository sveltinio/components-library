import type { PagesNavigatorItem } from './types';

export const stylesObjToCSSVars = (obj: object): string => {
	return Object.entries(obj)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
};

export const isValidClassName = (value: string, reservedNames: Array<string>): boolean => {
	return value != '' && !reservedNames.some((element) => value.includes(element));
};

export const capitalize = (word: string): string => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export function pickRandomFrom(values: Array<string>): string {
	return values[Math.floor(Math.random() * values.length)];
}

// true is both the label the href props are valid
export const areRequiredDefined = (obj: PagesNavigatorItem): boolean => {
	return obj.label != undefined && !obj.href.includes('undefined');
};

export const pathSegments = (url: string): Array<string> =>
	new URL(url).pathname.split('/').filter((part) => part?.trim() !== '');

export const getLastSegment = (thePath: string) => thePath.substring(thePath.lastIndexOf('/') + 1);

export function isImageFile(str: string): boolean {
	const regex = new RegExp(/[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/);

	if (str == null) {
		return false;
	}

	if (regex.test(str) == true) {
		return true;
	}

	return false;
}

export function makeTitle(slug: string): string {
	const words = slug.split('-');

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		words[i] = word.charAt(0).toUpperCase() + word.slice(1);
	}

	return words.join(' ');
}
