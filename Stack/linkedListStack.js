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

	push(data) {
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

	pop() {
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

	getSize() {
		return this.size;
	}
}

let stack = new Linkedlist();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack);
console.log(stack.getSize());
