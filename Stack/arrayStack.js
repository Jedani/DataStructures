class Stack {
	constructor() {
		this.storage = [];
		this.top = -1;
	}

	push(data) {
		this.top++;
		this.storage[this.top] = data;
	}
}
