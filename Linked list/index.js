class Circularnode {
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
		const n = new Circularnode(data);

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
		const n = new Circularnode(data);

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
}

let linkedlist = new Linkedlist();
linkedlist.append(10);
linkedlist.append(2);
linkedlist.prepend(5);
console.log(linkedlist.printList());
// console.log(linkedlist.removeFirst());
console.log(linkedlist.printList());
console.log(linkedlist.removeLast());
console.log(linkedlist.printList());
console.log(linkedlist.removeLast());
console.log(linkedlist.printList());
console.log(linkedlist.removeLast());
console.log(linkedlist.printList());
