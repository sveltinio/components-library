export function padTo2Digits(num: number) {
	return num.toString().padStart(2, '0');
}
export function formatDate(date: Date) {
	return [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1), date.getFullYear()].join(
		'/'
	);
}

export function dayInMonthFromDate(dateStr: string): number {
	const dt = new Date(dateStr);
	return dt.getDate();
}

export function monthShortFromDate(dateStr: string): string {
	const dt = new Date(dateStr);
	return dt.toLocaleString('default', { month: 'short' });
}
