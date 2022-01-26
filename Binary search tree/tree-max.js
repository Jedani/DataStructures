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
const f = new Node(15);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// recursively

const treeMax = (root) => {
	if (root == null) return -Infinity;
	if (root.left == null && root.right == null) return root.data;
	const pathMax = Math.max(treeMax(root.left), treeMax(root.right));

	return root.data + pathMax;
};

console.log(treeMax(a));
