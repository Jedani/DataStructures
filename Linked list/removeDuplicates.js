var deleteDuplicates = function (head) {
	// Create the fast and slow pointers
	let slowPointer = head;
	let fastPointer = head?.next;

	while (fastPointer) {
		if (slowPointer.val !== fastPointer.val) {
			// Skip all the duplicates
			slowPointer.next = fastPointer;
			slowPointer = fastPointer;
		}
		// Get the next node of the list
		fastPointer = fastPointer.next;
	}

	// Remove the duplicates in the end of the list
	if (slowPointer) slowPointer.next = null;

	return head;
};

//   using pointers
