export type TocEntry = {
	id: string;
	depth: number;
	value: string;
	children?: Array<TocEntry>;
};
