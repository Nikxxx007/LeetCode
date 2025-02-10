import { ListNode } from "../problems/0206reverseLinkedList";

export const arrayToLinkedList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
};

export const linkedListToArray = (head: ListNode | null): number[] => {
  let result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
};
