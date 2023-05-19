import { isNullish } from '@sveltinio/ts-utils/is';
import type { BreakpointMatch, ResourceContent, Screens } from './types';
import { contains } from '@sveltinio/ts-utils/collections';

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

/* The BreakpointChecker class provides methods to check the screen size and breakpoints of a device. */
export class BreakpointChecker {
	private _screens: Screens;
	private _mobileSize: number;
	private _desktopSize: number;

	private _defaultScreenSizes: Screens = {
		xs: { min: '320', max: '639' },
		sm: { min: '640px', max: '767px' },
		md: { min: '768px', max: '1023px' },
		lg: { min: '1024px', max: '1279px' },
		xl: { min: '1280px', max: '1535px' },
		'2xl': { min: '1536px' }
	};

	constructor(theScreens?: Screens);
	constructor(theScreens?: Screens, mobileSize?: number, desktopSize?: number) {
		this._screens = theScreens || this._defaultScreenSizes;

		this._mobileSize = mobileSize || 768;
		this._desktopSize = desktopSize || 1024;
	}

	public get screens(): Screens {
		return this._screens;
	}
	public set screens(value: Screens) {
		this._screens = value;
	}

	public get mobileSize(): number {
		return this._mobileSize;
	}
	public set mobileSize(value: number) {
		this._mobileSize = value;
	}

	public get desktopSize(): number {
		return this._desktopSize;
	}
	public set desktopSize(value: number) {
		this._desktopSize = value;
	}

	public isMobile = (width: number): boolean => width < this.mobileSize;
	public isDesktop = (width: number): boolean => width >= this.desktopSize;
	public isTablet = (width: number): boolean =>
		width >= this.mobileSize && width < this.desktopSize;

	public isXSmallScreen = (width: number): boolean => this.getBreakpointName(width) === 'xs';
	public isSmallScreen = (width: number): boolean => this.getBreakpointName(width) === 'sm';
	public isMediumScreen = (width: number): boolean => this.getBreakpointName(width) === 'md';
	public isLargeScreen = (width: number): boolean => this.getBreakpointName(width) === 'lg';
	public isXLargeScreen = (width: number): boolean => this.getBreakpointName(width) === 'xl';
	public isXXLargeScreen = (width: number): boolean => this.getBreakpointName(width) === '2xl';

	private getBreakpointName(width: number): BreakpointMatch {
		const breakpointKeys = Object.keys(this._screens) as BreakpointMatch[];
		let breakpoint: BreakpointMatch = breakpointKeys[0];

		for (let i = 1; i < breakpointKeys.length; i++) {
			const prevBreakpoint = this._screens[breakpoint];
			const currBreakpoint = this._screens[breakpointKeys[i]];

			if (
				width >= parseInt(prevBreakpoint.min) &&
				width <= parseInt(currBreakpoint.max || '10000')
			) {
				breakpoint = breakpointKeys[i];
			}
		}

		return breakpoint;
	}
}

/**
 * Returns the matching breakpoint for a given width based on predefined screen sizes.
 *
 * @param width - The width of the screen in pixels, used to determine which breakpoint the
 * screen falls into.
 * @returns a string representing the current breakpoint based on the input width value.
 */
export function getBreakpoint(width: number): BreakpointMatch {
	const screens: Screens = {
		xs: { min: '320', max: '639' },
		sm: { min: '640px', max: '767px' },
		md: { min: '768px', max: '1023px' },
		lg: { min: '1024px', max: '1279px' },
		xl: { min: '1280px', max: '1535px' },
		'2xl': { min: '1536px' }
	};
	const breakpointKeys = Object.keys(screens) as BreakpointMatch[];
	let breakpoint: BreakpointMatch = breakpointKeys[0];

	for (let i = 1; i < breakpointKeys.length; i++) {
		const prevBreakpoint = screens[breakpoint];
		const currBreakpoint = screens[breakpointKeys[i]];

		if (width >= parseInt(prevBreakpoint.min) && width <= parseInt(currBreakpoint.max || '10000')) {
			breakpoint = breakpointKeys[i];
		}
	}

	return breakpoint;
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
		id = id.trim().toLowerCase().replace(' ', '-').replace('/', '-');
		return id;
	}
	return '';
}

/**
 *! The following are used as utilities in the demo pages
 */

export function getURL(base: string, item: ResourceContent): string {
	return `${base}/${item.resource}/${item.metadata.slug}`;
}

export function getMetadataURL(
	base: string,
	resourceName: string,
	mdName: string,
	mdValue: string
): string {
	return `${base}/${resourceName}/${mdName}/${mdValue}`;
}
