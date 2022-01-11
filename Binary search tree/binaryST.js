class Node {
	constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
	}

	insert(data) {
		if (this.data === data) {
			throw new Error("data already exists");
		} else if (this.data > data) {
			if (this.left) {
				this.left.insert(data);
			} else {
				this.left = new Node(data);
			}
		} else {
			if (this.right) {
				this.right.insert(data);
			} else {
				this.right = new Node(data);
			}
		}
	}
}

class Bst {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root) {
			this.root.insert(data);
		} else {
			this.root = new Node(data);
		}
	}
}

let tree = new Bst();
tree.insert(40);
tree.insert(20);
tree.insert(80);
tree.insert(55);
console.log(tree);
