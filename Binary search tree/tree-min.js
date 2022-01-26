class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(2);
const e = new Node(4);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// recursively

const treeMin = (root) => {
	if (root == null) return +Infinity;

	const lMin = treeMin(root.left);
	const rMin = treeMin(root.right);

	return Math.min(root.data, lMin, rMin);
};

console.log(treeMin(a));
