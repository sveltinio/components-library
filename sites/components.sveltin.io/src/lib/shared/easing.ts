export function easeIn(t: number): number {
	const u = 1 - t;
	return u * u * u * 0.42 + 3 * u * t * t + t * t * t;
}

export function easeOut(t: number): number {
	const u = 1 - t;
	return 3 * u * t * t * 0.58 + t * t * t;
}
