import { ListNode, reverseList } from "../src";

function arrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Converts a linked list back to an array for easy comparison
function linkedListToArray(head: ListNode | null): number[] {
  let result: number[] = [];
  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe("reverseList", () => {
  test("should reverse a list with multiple elements", () => {
    const input = arrayToLinkedList([1, 2, 3, 4, 5]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
  });

  test("should reverse a list with two elements", () => {
    const input = arrayToLinkedList([1, 2]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([2, 1]);
  });

  test("should handle an empty list", () => {
    expect(linkedListToArray(reverseList(null))).toEqual([]);
  });

  test("should handle a single-node list", () => {
    const input = arrayToLinkedList([1]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([1]);
  });

  test("should handle a list with repeated elements", () => {
    const input = arrayToLinkedList([1, 1, 1, 1]);
    const reversed = reverseList(input);
    expect(linkedListToArray(reversed)).toEqual([1, 1, 1, 1]);
  });
});
