import { ListNode } from "./0206reverseLinkedList";

export const hasCycle = (head: ListNode | null): boolean => {
  const values: ListNode[] = [];
  let current = head;

  while (current) {
    if (values.includes(current)) return true;
    else values.push(current);

    current = current.next;
  }

  return false;
};
