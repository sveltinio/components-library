export const stylesObjToCSSVars = (obj: object): string => {
	return Object.entries(obj)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
};

export const capitalize = (word: string): string => {
	return word.charAt(0).toUpperCase() + word.slice(1);
};

export function pickRandomFrom(values: Array<string>): string {
	return values[Math.floor(Math.random() * values.length)];
}
