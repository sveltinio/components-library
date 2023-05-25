import type { BreakpointMatch, Screens } from './types';

/**
 * The BreakpointChecker class provides methods to check the screen size and
 * breakpoints of a device.
 */
export class BreakpointChecker {
	private _screens: Screens;
	private _mobileSize: number;
	private _desktopSize: number;

	// Default screen sizes
	private _defaultScreenSizes: Screens = {
		xs: { min: '320px', max: '639px' },
		sm: { min: '640px', max: '767px' },
		md: { min: '768px', max: '1023px' },
		lg: { min: '1024px', max: '1279px' },
		xl: { min: '1280px', max: '1535px' },
		'2xl': { min: '1536px' }
	};

	/**
	 * Creates an instance of BreakpointChecker.
	 * @param theScreens - Optional. The screen sizes and breakpoints.
	 * @param mobileSize - Optional. The mobile screen size.
	 * @param desktopSize - Optional. The desktop screen size.
	 */
	constructor(theScreens?: Screens);
	constructor(theScreens?: Screens, mobileSize?: number, desktopSize?: number) {
		this._screens = theScreens || this._defaultScreenSizes;

		this._mobileSize = mobileSize || 768;
		this._desktopSize = desktopSize || 1024;
	}

	/**
	 * Gets or sets the screen sizes and breakpoints
	 */
	public get screens(): Screens {
		return this._screens;
	}
	public set screens(value: Screens) {
		this._screens = value;
	}

	/**
	 * Gets or sets the mobile screen size.
	 */
	public get mobileSize(): number {
		return this._mobileSize;
	}
	public set mobileSize(value: number) {
		this._mobileSize = value;
	}

	/**
	 * Gets or sets the desktop screen size.
	 */
	public get desktopSize(): number {
		return this._desktopSize;
	}
	public set desktopSize(value: number) {
		this._desktopSize = value;
	}

	/**
	 * Checks if the width corresponds to a mobile screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to a mobile screen, false otherwise.
	 */
	public isMobile = (width: number): boolean => width < this.mobileSize;

	/**
	 * Checks if the width corresponds to a desktop screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to a desktop screen, false otherwise.
	 */
	public isDesktop = (width: number): boolean => width >= this.desktopSize;

	/**
	 * Checks if the width corresponds to a tablet screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to a tablet screen, false otherwise.
	 */
	public isTablet = (width: number): boolean =>
		width >= this.mobileSize && width < this.desktopSize;

	/**
	 * Checks if the width corresponds to an extra small screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to an extra small screen, false otherwise.
	 */
	public isXSmallScreen = (width: number): boolean => this.getBreakpointName(width) === 'xs';

	/**
	 * Checks if the width corresponds to a small screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to a small screen, false otherwise.
	 */
	public isSmallScreen = (width: number): boolean => this.getBreakpointName(width) === 'sm';

	/**
	 * Checks if the width corresponds to a medium screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to a medium screen, false otherwise.
	 */
	public isMediumScreen = (width: number): boolean => this.getBreakpointName(width) === 'md';

	/**
	 * Checks if the width corresponds to a large screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to a large screen, false otherwise.
	 */
	public isLargeScreen = (width: number): boolean => this.getBreakpointName(width) === 'lg';

	/**
	 * Checks if the width corresponds to an extra large screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to an extra large screen, false otherwise.
	 */
	public isXLargeScreen = (width: number): boolean => this.getBreakpointName(width) === 'xl';

	/**
	 * Checks if the width corresponds to an extra extra large screen.
	 * @param width - The width to check.
	 * @returns True if the width corresponds to an extra extra large screen, false otherwise.
	 */
	public isXXLargeScreen = (width: number): boolean => this.getBreakpointName(width) === '2xl';

	/**
	 * Gets the name of the breakpoint based on the width.
	 * @param width - The width to check.
	 * @returns The name of the corresponding breakpoint.
	 */
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
