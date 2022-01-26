class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}
}

//  iteratively

const breadthFirst = (root) => {
	if (root == null) return [];
	const result = [];
	const queue = [root];
	while (queue.length > 0) {
		const current = queue.shift();
		result.push(current.data);

		if (current.left !== null) queue.push(current.left);
		if (current.right !== null) queue.push(current.right);
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

breadthFirst(a);

// recursively is tricky since this way requires queues and recursion uses stack structures by default
