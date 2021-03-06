class Singlylinked {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Linkedlist {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	prepend(data) {
		const n = new Singlylinked(data);

		if (this.size === 0) {
			this.head = n;
			this.tail = n;
		} else {
			n.next = this.head;
			this.head = n;
		}
		this.size++;
	}

	append(data) {
		const n = new Singlylinked(data);

		if (this.size === 0) {
			this.head = n;
			this.tail = n;
		} else {
			const temp = this.tail;
			this.tail = n;
			temp.next = this.tail;
		}
		this.size++;
	}

	printList() {
		let data = "";
		let current = this.head;
		while (current != null) {
			data += current.data + " ";
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
		}
		this.size--;
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
			return;
		}
		if (pos === 0) {
			this.prepend(data);
		} else if (pos === this.size) {
			this.append(data);
		} else {
			const n = new Singlylinked(data);

			let prev = null;
			let current = this.head;
			let count = 0;

			while (count < pos) {
				prev = current;
				current = current.next;
				count++;
			}
			n.next = current;
			prev.next = n;
			this.size++;
		}
	}

	removeAt(pos) {
		if (pos < 0 || pos >= this.size) {
			return null;
		}
		if (pos === 0) {
			this.removeFirst();
		} else if (pos === this.size - 1) {
			this.removeLast();
		} else {
			let prev = null;
			let current = this.head;
			let count = 0;
			while (count < pos) {
				prev = current;
				current = current.next;
				count++;
			}
			prev.next = current.next;
			this.size--;

			return current.data;
		}
	}

	reverse() {
		if (this.head == null) {
			return;
		}
		let prev = this.tail.next;
		let current = this.head;
		while (current !== null) {
			const next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		this.head = prev;
		return this.printList();
	}
}

let linkedlist = new Linkedlist();
linkedlist.append(10);
linkedlist.append(20);
linkedlist.append(30);
linkedlist.prepend(5);
console.log(linkedlist.printList());
console.log(linkedlist.reverse());
linkedlist.removeAt(3);
console.log(linkedlist.removeFirst());
console.log(linkedlist.removeLast());
console.log(linkedlist.printList());
linkedlist.insertAt(0, 70);
console.log(linkedlist.printList());
linkedlist.removeAt(1);
console.log(linkedlist.printList());
