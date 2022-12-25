export const stylesObjToCSSVars = (obj: object): string => {
	return Object.entries(obj)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
};

export const isValidClassName = (name: string, exclude: Array<string>): boolean => {
	return !exclude.includes(name);
};
