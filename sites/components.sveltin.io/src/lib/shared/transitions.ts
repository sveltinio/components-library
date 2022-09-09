export function customTransition({ easing }) {
	return {
		delay: 0,
		duration: 300,
		easing,
		css(t: number) {
			return `opacity: ${t}; transform: scale(${0.1 * t + 0.9});`;
		}
	};
}

export function opacityTransition(
	node: any,
	{
		delay = 0, // 0 ms before the transition begins
		duration = 300 // Transition lasts for 300 ms
	}
) {
	// Get the node object's opacity
	const o = +getComputedStyle(node).opacity;

	// Return a transition object with these properties
	return {
		delay,
		duration,

		// Generate CSS animation; in this case animate the opacity
		css: (t: number) => `opacity: ${t * o}`
	};
}
