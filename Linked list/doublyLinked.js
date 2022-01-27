class Doublylinked {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class Linkedlist {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	prepend(data) {
		const n = new Doublylinked(data);

		if (this.size === 0) {
			this.head = n;
			this.tail = n;
		} else {
			n.next = this.head;
			this.head.prev = n;
			this.head = n;
		}
		this.size++;
	}

	append(data) {
		const n = new Doublylinked(data);

		if (this.size === 0) {
			this.head = n;
			this.tail = n;
		} else {
			let temp = this.tail;
			this.tail.next = n;
			this.tail = n;
			this.tail.prev = temp;
		}
		this.size++;
	}

	printList() {
		let data = "";
		let current = this.head;
		while (current != null) {
			data += current.data + " -> ";
			current = current.next;
		}
		return data;
	}

	removeFirst() {
		if (this.size === 0) {
			return null;
		}

		let data = this.head.data;
		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.head = this.head.next;
			this.size--;
		}

		return data;
	}

	removeLast() {
		if (this.size === 0) {
			return null;
		}
		let data = this.tail.data;

		if (this.size === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let curr = this.head;

			while (curr.next.next != null) {
				curr = curr.next;
			}
			curr.next = null;
			this.tail = curr;
			this.size--;
			return data;
		}
	}

	insertAt(pos, data) {
		if (pos < 0 || pos > this.size) {
			return "not enough items in list";
		}
		if (pos === 0) {
			this.prepend(data);
		} else if (pos === this.size) {
			this.append(data);
		} else {
			const n = new Doublylinked(data);

			let count = 1;
			let current = this.head;

			while (count < pos) {
				current = current.next;
				count++;
			}
			let temp = current.next;
			n.next = current.next;
			temp.prev = n;
			current.next = n;
			n.prev = current;
			this.size++;
		}
	}

	removeAt(pos) {
		if (pos < 0 || pos > this.size) {
			return null;
		}
		if (pos === 0) {
			this.removeFirst();
		} else if (pos === this.size - 1) {
			this.removeLast();
		} else {
			let count = 0;
			let curr = this.head;

			while (count < pos) {
				curr = curr.next;
				count++;
			}

			let previous = curr.prev;
			let after = curr.next;
			previous.next = after;
			after.prev = previous;
		}
		this.size--;
	}

	reverse() {
		if (this.head == null || this.head.next == null) {
			return this.head;
		}
		let curr = this.head;
		let temp;
		while (curr !== null) {
			temp = curr.prev;
			curr.prev = curr.next;
			curr.next = temp;
			curr = curr.prev;
		}
		if (temp !== null) {
			temp = temp.prev;
			this.head = temp;
		}
		console.log(this.head);
	}
}

let linkedlist = new Linkedlist();
linkedlist.prepend(10);
linkedlist.prepend(5);
linkedlist.prepend(1);
linkedlist.append(15);
linkedlist.append(20);
linkedlist.append(25);
linkedlist.append(30);
console.log(linkedlist.printList());
console.log(linkedlist.removeFirst());
console.log(linkedlist.removeLast());
linkedlist.insertAt(0, 1);
linkedlist.insertAt(0, 100);
linkedlist.removeAt(2);
console.log(linkedlist.printList());

console.log(linkedlist.printList());

console.log(linkedlist.printList());
console.log(linkedlist.removeLast());
console.log(linkedlist.printList());
linkedlist.reverse();
console.log(linkedlist.printList());
