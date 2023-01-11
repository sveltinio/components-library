export const stylesObjToCSSVars = (obj: object): string => {
	return Object.entries(obj)
		.map(([key, value]) => `--${key}: ${value};`)
		.join(' ');
};

export const isValidClassName = (value: string, reservedNames: Array<string>): boolean => {
	return value != '' && !reservedNames.some((element) => value.includes(element));
};
