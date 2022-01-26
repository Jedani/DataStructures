class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

//  iteratively

const depthFirstValues = (root) => {
	const result = [];
	const stack = [root];
	while (stack.length > 0) {
		const current = stack.pop();
		result.push(current.data);

		if (current.right) stack.push(current.right);
		if (current.left) stack.push(current.left);
	}
	console.log(result);
	return result;
};
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

depthFirstValues(a);

// recursively

const depthFirstValues = (root) => {
	if (root == null) return [];
	const lVal = depthFirstValues(root.left);
	const rVal = depthFirstValues(root.right);

	return [root.data, ...lVal, ...rVal];
};

console.log(depthFirstValues(a));
