export default function headings() {
	let visit;
	let tree_to_string;

	return async function transformer(tree, vFile) {
		if (!visit) {
			tree_to_string = (await import('mdast-util-to-string')).toString;
			visit = (await import('unist-util-visit')).visit;
		}

		vFile.data.headings = [];
		visit(tree, 'heading', getFlatHeadingsList);

		function getFlatHeadingsList(node) {
			const heading = {
				depth: node.depth,
				title: tree_to_string(node)
			};
			if (node.data !== undefined && node.data.id != null) {
				heading.id = node.data.id;
			}
			vFile.data.headings.push(heading);
		}

		function makeTree(headings) {
			const root = { depth: 0 };
			const parents = [];
			let previous = root;

			headings.forEach((heading) => {
				if (heading.depth > previous.depth) {
					if (previous.children === undefined) {
						previous.children = [];
					}
					parents.push(previous);
				} else if (heading.depth < previous.depth) {
					while (parents[parents.length - 1].depth >= heading.depth) {
						parents.pop();
					}
				}

				parents[parents.length - 1].children.push(heading);
				previous = heading;
			});

			return root.children;
		}

		if (!vFile.data.fm) vFile.data.fm = {};
		vFile.data.fm.headings = makeTree(vFile.data.headings);
	};
}
