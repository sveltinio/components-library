export const stylesObjToCSSVars = (obj: object): string => {
	return Object.entries(obj)
		.map(([key, value]) => `--${key}:${value}`)
		.join(';');
};
