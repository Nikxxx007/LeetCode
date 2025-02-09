export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export const reverseList = (head: ListNode | null): ListNode | null => {
  let current: ListNode | null = head;
  let prev: ListNode | null = null;

  while (current) {
    let next: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
