import { contains } from '@sveltinio/ts-utils/collections';
import { isNullish } from '@sveltinio/ts-utils/is';

/**
 * Takes an HTML element and returns a string ID derived from its aria-label attribute.
 *
 * @param node - a DOM element that has an aria-label attribute. The
 * function extracts the ID from this attribute.
 * @returns a string, which is either the modified `id` value derived from the `aria-label`
 * attribute of the given `node` element, or an empty string if the `aria-label` attribute is not
 * present or has no value.
 */
export function getIdFromAriaLabel(node: HTMLElement): string {
	let id = node.getAttribute('aria-label');
	if (id) {
		id = id.trim().toLowerCase().replace(/\s/g, '-').replace('/', '-');
		return id;
	}
	return '';
}

export function getComponentId(node: HTMLElement): string {
	let id = '';
	const role = node.getAttribute('role');

	if (role) {
		id = role + '-' + getIdFromAriaLabel(node);
	}

	return id;
}

/**
 * The function checks if a given string is a single character.
 * @param txt - A string to be checked if it is a single character or not.
 * @returns A boolean value is being returned.
 */
export function isChar(txt: string): boolean {
	const charsRegex = /\S/;
	return txt.length === 1 && charsRegex.test(txt);
}

/**
 * Retrieves the CSS class names from a value, excluding any reserved names.
 * If the value is nullish, an empty string is returned.
 *
 * @param value - The value to retrieve CSS class names from.
 * @param reservedNames - An array of reserved class names to exclude.
 * @returns The retrieved CSS class names or an empty string if reserved names are found.
 */
export function retrieveCssClassNames(value: any, reservedNames: string[]): string {
	if (isNullish(value)) {
		return '';
	}

	const cssClasses = String(value).split(' ');

	if (cssClasses.some((cssClass) => contains(reservedNames, cssClass))) {
		return '';
	}

	return value;
}

/**
 * Adds a CSS class to an HTML element.
 *
 * @param item - This is the HTML element to which the CSS class will be
 * added.
 * @param className - A string parameter that represents the name of the CSS
 * class that needs to be added to the specified HTMLElement.
 */
export function addCssClass(item: HTMLElement, className: string) {
	item.classList.add(className);
}

/**
 * Adds specified CSS classes from a given HTML element.
 *
 * @param item - the HTML element to remove CSS classes from
 * @param names - An array of strings representing the CSS class names that should be added from
 * the `classList` property of the `item` parameter.
 */
export function addCssClasses(item: HTMLElement | null, names: string[]) {
	if (!isNullish(item)) {
		names.map((n) => item.classList.add(n));
	}
}

/**
 * Removes a specified CSS class from a given HTML element.
 *
 * @param item  - This is the HTML element to which the CSS class needs to
 * be removed.
 * @param className - A string that represents the name of the CSS
 * class that needs to be removed from the specified HTMLElement.
 */
export function removeCssClass(item: HTMLElement, className: string) {
	item.classList.remove(className);
}

/**
 * Removes specified CSS classes from a given HTML element.
 *
 * @param item - the HTML element to remove CSS classes from
 * @param names - An array of strings representing the CSS class names that should be removed from
 * the `classList` property of the `item` parameter.
 */
export function removeCssClasses(item: HTMLElement | null, names: string[]) {
	if (!isNullish(item)) {
		names.map((n) => item.classList.remove(n));
	}
}

/**
 * The function `prefixObjectKeys` takes an object, a prefix string, and a list of keys to preserve,
 * and returns a new object with the keys prefixed with the given prefix, except for the keys in the
 * preserve list.
 * @param obj - An object with string keys and string values.
 * @param {string} prefix - The `prefix` parameter is a string that will be added as a prefix to
 * each key in the `obj` object.
 * @param {string[]} preserveList - The `preserveList` parameter is an array of strings that
 * specified the keys in the `obj` parameter that should not be prefixed with the `prefix`
 * parameter. These keys will remain unchanged in the resulting object.
 * @returns a new object with the keys of the input object `obj` modified by adding a prefix and
 * preserving the keys specified in the `preserveList` array.
 */
export function prefixObjectKeys(
	obj: Record<string, string>,
	prefix: string,
	preserveList: string[]
) {
	const entries = Object.keys(obj).map((k) => {
		if (!preserveList.includes(k)) {
			const newK = `${prefix}-${k}`;
			return { [newK]: obj[k] };
		}
		return { [k]: obj[k] };
	});
	return Object.assign({}, ...entries);
}

/**
 * Resets the focus on a list of HTML elements by removing the 'focus' CSS class.
 *
 * @param items - An array of HTMLElements that need to have their focus reset (i.e.
 * have the CSS class 'focus' removed).
 */
export function resetFocusClass(items: HTMLElement[]) {
	items.forEach((item) => removeCssClass(item, 'focus'));
}

export function makeExternalLinkOptions(
	external: boolean,
	noOpener = true,
	noReferrer = true
): string {
	const relString: string[] = ['external'];
	if (external) {
		if (noOpener) relString.push('noopener');
		if (noReferrer) relString.push('noreferrer');
	}

	return relString.join(' ');
}
