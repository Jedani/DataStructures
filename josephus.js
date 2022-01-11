class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class circularLinkedList {
	constructor() {
		this.length = 0;
		this.head = null;
	}

	getElementAt(index) {
		if (index >= 0 && index <= this.length) {
			let node = this.head;
			for (let i = 0; i < index && node != null; i++) {
				node = node.next;
			}
			return node;
		}
		return undefined;
	}

	append(data) {
		const node = new Node(data);
		let current;

		if (this.head === null) {
			this.head = node;
		} else {
			current = this.getElementAt(this.length - 1);
			current.next = node;
		}

		node.next = this.head;
		this.length++;
	}

	removeAt(index) {
		if (index >= 0 && index < this.length) {
			let current = this.head;

			//Remove from head
			if (index === 0) {
				if (this.length === 1) {
					this.head = undefined;
				} else {
					const removed = this.head;
					console.log(removed);
					current = this.getElementAt(this.length - 1);
					this.head = this.head.next;
					current.next = this.head;
					current = removed;
				}
			} else {
				//Remove at given index (middle or end)
				let prev = null;
				let current = this.head;
				let count = 0;
				while (count < index) {
					prev = current;
					current = current.next;
					count++;
				}
				prev.next = current.next;
				this.length--;
				return current.data;
			}
		}
		return undefined;
	}
}

let linkedlist = new circularLinkedList();
// linkedlist.append(3);
// linkedlist.append(5);
// linkedlist.append(10);
// console.log(linkedlist.getElementAt(0));
// console.log(linkedlist.removeAt(0));

function josephus(items, k) {
	let result = [];
	items.forEach((element) => {
		linkedlist.append(element);
	});

	for (let index = 0; index < items.length; index++) {
		console.log(linkedlist.removeAt(k - 1));
	}
}

// josephus([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1);
josephus([1, 2, 3, 4, 5, 6, 7], 3);
