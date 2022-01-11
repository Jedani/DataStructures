class Stack {
	constructor() {
		this.storage = [];
		this.top = -1;
	}

	push(data) {
		this.top++;
		this.storage[this.top] = data;
	}

	pop() {
		if (this.top == -1) {
			return null;
		}

		let data = this.storage[this.top];
		this.top--;
		return data;
	}

	getSize() {
		return this.top + 1;
	}

	peek() {
		let data = this.storage[this.top];
		return data || null;
	}
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.getSize());
