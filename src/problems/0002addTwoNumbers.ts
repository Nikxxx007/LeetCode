import { ListNode } from "./0206reverseLinkedList";

export const addTwoNumbers = (
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null => {
  let result = new ListNode(0);
  let current = result;
  let carry = 0;

  while (l1 || l2 || carry) {
    let value = 0;

    if (l1) {
      value += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      value += l2.val;
      l2 = l2.next;
    }

    value += carry;
    carry = Math.floor(value / 10);

    current.next = new ListNode(value % 10);
    current = current.next;
  }

  return result.next;
};
