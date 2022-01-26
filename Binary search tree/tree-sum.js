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

const treeSum = (root, total = 0) => {
	if (root == null) return total;

	// total += root.data;
	// return treeSum(root.left, total) + treeSum(root.right);

	// OR

	return root.data + treeSum(root.left) + treeSum(root.right);
};

console.log(treeSum(a));
