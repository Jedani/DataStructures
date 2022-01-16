function reverse() {
	if (head == null || head.next == null) {
		return head;
	}
	q = reverse(head.next);
	head.next.next = head;
	head.next = null;
	return q;
}
