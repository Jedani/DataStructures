// target 'e';
const target = "e";

class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

//  iteratively

const breadthFirst = (root) => {
	if (root == null) return false;
	const queue = [root];
	while (queue.length > 0) {
		const current = queue.shift();
		if (current.data == target) return true;

		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
	}
	return false;
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

console.log(breadthFirst(a));

// recursively

const treeIncludes = (root) => {
	if (root == null) return false;
	if (root.data == target) return true;
	return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

console.log(treeIncludes(a));
