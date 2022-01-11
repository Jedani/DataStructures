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
	delete(data) {
		if (data < this.data && this.left) {
			this.left = this.left.delete(data);
		} else if (data > this.data && this.right) {
			this.right = this.right.delete(data);
		} else {
			if (this.data == data) {
				if (this.right && this.left) {
					let minVal = this.right.min();
					this.data = minVal;
					this.right = this.right.delete(minVal);
				} else if (this.left) {
					return this.left;
				} else if (this.right) {
					return this.right;
				} else {
					return null;
				}
			}
		}
		return this;
	}

	find(data) {
		if (this.data == data) {
			return true;
		} else if (data < this.data && this.left != null) {
			return this.left.find(data);
		} else if (data > this.data && this.right != null) {
			return this.right.find(data);
		}
		return false;
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

	delete(data) {
		if (this.root) {
			this.root = this.root.delete(data);
		}
	}

	find(data) {
		if (this.root) {
			return this.root.find(data);
		}
		return false;
	}
}

let tree = new Bst();
tree.insert(40);
tree.insert(20);
tree.insert(80);
tree.insert(55);
tree.delete(80);
console.log(tree.find(55));
console.log(tree);
